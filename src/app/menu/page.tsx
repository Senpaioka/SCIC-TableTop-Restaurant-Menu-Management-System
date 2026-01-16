"use client";

import { useState, useEffect } from 'react';
import { getMenu } from '@/services/menuServices';
import { MenuItem, Category } from '@/types/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from 'lucide-react';
import Image from 'next/image';


export default function MenuPage() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  useEffect(() => {
    setMenuItems(getMenu());
  }, []);

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const categories = ['All', ...Object.values(Category)];

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col space-y-6">

        <div className="flex flex-col items-center text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Our Menu</h1>
          <p className="text-muted-foreground max-w-150">
            Explore our diverse selection of dishes, crafted to satisfy every craving.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 pb-6">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat as Category | 'All')}
              className="rounded-full"
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="aspect-video w-full overflow-hidden bg-muted relative">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
                {!item.isAvailable && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-bold text-lg px-4 py-2 border-2 border-white rounded-md">SOLD OUT</span>
                    </div>
                )}
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-lg line-clamp-1">{item.name}</CardTitle>
                  <span className="font-bold text-primary whitespace-nowrap">${item.price.toFixed(2)}</span>
                </div>
                <Badge variant="secondary" className="w-fit text-xs">{item.category}</Badge>
              </CardHeader>
              <CardContent className="p-4 pt-2 grow">
                <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full" variant="outline" onClick={() => setSelectedDish(item)}>
                    View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
                No items found in this category.
            </div>
        )}
      </div>

      {/* Dish Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-background rounded-xl max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl relative animate-in zoom-in-95 duration-200 border">
            <button 
              onClick={() => setSelectedDish(null)}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors z-10 bg-background/50 backdrop-blur-sm"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="grid md:grid-cols-2 min-h-125">
              <div className="h-64 md:h-full relative bg-muted">
                  <Image
                    src={selectedDish.imageUrl}
                    alt={selectedDish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover"
                    priority
                  />
              </div>
              <div className="p-8 md:p-10 flex flex-col space-y-8">
                <div>
                  <div className="flex justify-between items-start">
                    <h2 className="text-3xl font-bold tracking-tight">{selectedDish.name}</h2>
                    <p className="text-2xl font-bold text-primary ml-4">${selectedDish.price.toFixed(2)}</p>
                  </div>
                  <Badge className="mt-3 text-sm px-3 py-1">{selectedDish.category}</Badge>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Description</h3>
                    <p className="leading-relaxed text-lg text-foreground/90">{selectedDish.description}</p>
                  </div>

                  {selectedDish.ingredients && selectedDish.ingredients.length > 0 && (
                     <div>
                        <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">Key Ingredients</h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedDish.ingredients.map((ing, i) => (
                                <Badge key={i} variant="outline" className="text-sm px-3 py-1">{ing}</Badge>
                            ))}
                        </div>
                     </div>
                  )}
                </div>

                <div className="pt-4 mt-auto">
                    <Button className="w-full h-12 text-lg font-semibold" size="lg" disabled={!selectedDish.isAvailable}>
                        {selectedDish.isAvailable ? 'Add to Order' : 'Currently Unavailable'}
                    </Button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
