import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import prisma from "@/db/db"
import { formatCurrency, formatNumber } from "@/lib/formatter";




async function getSalesData(){
    const data = await prisma.order.aggregate({
        _sum: {pricePaidInCents: true},
        _count: true
    })

    return {
        amount: (data._sum.pricePaidInCents || 0)/100,
        numberOfSales: data._count
    }
}

async function getUserData(){
    const [userCount, orderData] = await Promise.all([
        prisma.user.count(),
        prisma.order.aggregate({
            _sum: {pricePaidInCents:true}
        })
    ])
    return {
        userCount,
        averageValuePerUser : userCount === 0 ? 0 : (orderData._sum.pricePaidInCents || 0)/userCount
    }
}

async function getProductData(){
     const [activeProducts, inActiveProducts] = await Promise.all([
        prisma.product.count({where: {isAvailableForPurchage:true}}),
        prisma.product.count({where : {isAvailableForPurchage:false}})
     ])

     return {activeProducts, inActiveProducts}
}

export default async function AdminDashBoard(){

    const [salesData, userData, productData] = await Promise.all([
        getSalesData(),
        getUserData(),
        getProductData()
    ])

    return (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
            <DashboardCard title = "Sales" subtitle={formatCurrency(salesData.numberOfSales)} body={formatNumber(salesData.amount)}/>
            <DashboardCard title = "Customers" subtitle={formatNumber(userData.userCount)} body={formatNumber(userData.averageValuePerUser)}/>
            <DashboardCard title = "Products" subtitle={formatNumber(productData.activeProducts)} body={formatNumber(productData.inActiveProducts)}/>
        </div>

    )
}

type DashboardCardProps = {
    title: string,
    subtitle: string
    body: string
}

function DashboardCard({title, subtitle, body }:DashboardCardProps){

    return(
    <Card>
            <CardHeader>
               <CardTitle>{title}</CardTitle> 
               <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
            
            <CardContent>
                <p>{body}</p>
            </CardContent>
        </Card>
    )
}