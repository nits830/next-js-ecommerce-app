"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { formatCurrency } from '@/lib/formatter'
import React, { useState } from 'react'

const ProductForm = () => {

    const [price, setPrice] = useState<number>(0)
  return (
   <form action="" className='space-y-8'>
    <div className='space-y-2'>
        <Label htmlFor='name'>Product</Label>
        <Input type='text' id='name' name='name' required/>
    </div>
    <div className='space-y-2'>
        <Label htmlFor='price'>Price</Label>
        <Input type='text' id='price' name='price' required value={price} onChange={e => setPrice(Number(e.target.value) || undefined)}/>
    </div>
    <div className='text-muted-foreground'>
        {formatCurrency(price || 0)}
    </div>

    <div className='space-y-2'>
        <Label htmlFor='description'>Description</Label>
        <Textarea  id='description' name='description'/>
    </div>
    <div className='space-y-2 '>
        <Label htmlFor='file'>File</Label>
        <Input type='file' id='file' name='file' required/>
    </div>
    <div className='space-y-2 '>
        <Label htmlFor='image'>Image</Label>
        <Input type='file' id='image' name='image' required/>
    </div>
    <Button type='submit'>Save</Button>
       
   </form>
  )
}

export default ProductForm