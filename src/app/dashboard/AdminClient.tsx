// app/dashboard/AdminClient.tsx
"use client";

import { useState, useEffect } from "react"
import { getMenu, addMenuItem, deleteMenuItem } from "@/services/menuServices";
import { MenuItem, Category } from "@/types/types";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, ArrowLeft } from "lucide-react"

interface AdminClientProps {
  session: any // or type it properly with your Session type
}

export default function AdminClient({ session }: AdminClientProps) {
  const isAdmin = session?.user?.role === "admin"

  const [items, setItems] = useState<MenuItem[]>([])
  const [showForm, setShowForm] = useState<boolean>(false)

  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [price, setPrice] = useState<string>("")
  const [category, setCategory] = useState<Category>(Category.MAIN)
  const [imageUrl, setImageUrl] = useState<string>("")
  const [ingredientsStr, setIngredientsStr] = useState<string>("")

  useEffect(() => {
    refreshMenu()
  }, [])

  const refreshMenu = (): void => {
    setItems(getMenu())
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    addMenuItem({
      name,
      description,
      price: Number(price),
      category,
      imageUrl: imageUrl || "",
      isAvailable: true,
      ingredients: ingredientsStr
        .split(",")
        .map(s => s.trim())
        .filter(Boolean),
    })

    setName("")
    setDescription("")
    setPrice("")
    setCategory(Category.MAIN)
    setImageUrl("")
    setIngredientsStr("")
    setShowForm(false)

    refreshMenu()
  }

  const handleDelete = (id: string): void => {
    const confirmed = window.confirm("Are you sure you want to delete this item?")
    if (!confirmed) return

    deleteMenuItem(id)
    refreshMenu()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your restaurant&apos;s menu items. Logged in as: {session.user.email} ({session.user.role})
          </p>
        </div>

        {!showForm && (
          <Button onClick={() => setShowForm(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Add New Item
          </Button>
        )}
      </div>

      {showForm ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowForm(false)}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <CardTitle>Add New Menu Item</CardTitle>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Dish Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={category}
                  onChange={e => setCategory(e.target.value as Category)}
                  className="w-full px-3 py-2 border border-input rounded-md"
                  required
                >
                  <option value={Category.MAIN}>Main</option>
                  <option value={Category.APPETIZER}>Appetizer</option>
                  <option value={Category.DESSERT}>Dessert</option>
                  <option value={Category.BEVERAGE}>Beverage</option>
                </select>
              </div>

              <div>
                <Label htmlFor="imageUrl">Image URL (optional)</Label>
                <Input
                  id="imageUrl"
                  type="url"
                  value={imageUrl}
                  onChange={e => setImageUrl(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="ingredients">Ingredients (comma separated)</Label>
                <Textarea
                  id="ingredients"
                  value={ingredientsStr}
                  onChange={e => setIngredientsStr(e.target.value)}
                  placeholder="e.g. tomato, basil, mozzarella"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Item</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {items.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-md"
            >
              <div>
                <div className="font-medium">{item.name}</div>
                <Badge>{item.category}</Badge>
              </div>

              {isAdmin && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}