import React from 'react'
import PageHeader from '../_components/PageHeader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Table, TableBody } from '@/components/ui/table'
import { TableHead, TableHeader, TableRow } from '@/components/ui/table'

const page = () => {
  return (
   <>
        <div className='flex justify-between item-center gap-4'>
                <PageHeader>Products</PageHeader>
                <Button asChild>
                    <Link href="/admin/products/new">Add Product</Link>
                </Button>

        </div>
        <ProductsTable/>

    
   </>
  )
}

export default page


function ProductsTable(){
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-0'>
                        <span className='sr-only'>Availabe for purchase</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Order</TableHead>
                    <TableHead className='w-0'>
                        <span className='sr-only'>Actions</span>
                    </TableHead>
                </TableRow>
                
            </TableHeader>
            <TableBody>
                
            </TableBody>
        </Table>
    )
}
