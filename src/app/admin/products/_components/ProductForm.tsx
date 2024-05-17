"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

const ProductForm = () => {

    const [price, setPrice] = useState<number>()
  return (
   <form action="" className='space-y-8'>
    <div className='space-y-2'>
        <Label htmlFor='name'>Product</Label>
        <Input type='text' id='name' name='name' required/>
    </div>
    <div className='space-y-2'>
        <Label htmlFor='price'>Price</Label>
        <Input type='text' id='price' name='price' required value={price} onChange={(e) => setPrice(Number(e.target.value) || undefined)}/>
    </div>

    <div className='space-y-2'>
        <Label htmlFor='description'>Description</Label>
        <Textarea  id='description' name='description'/>
    </div>
       
   </form>
  )
}

export default ProductForm