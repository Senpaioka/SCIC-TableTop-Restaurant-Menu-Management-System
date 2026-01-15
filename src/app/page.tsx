import Link from 'next/link';
import Image from 'next/image';
// icons
import { ArrowRight, Star, ChefHat, Clock, Quote } from 'lucide-react';
// UI
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative bg-muted/40 py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-6 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
              Taste the <span className="text-primary">Extraordinary</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-150 mx-auto md:mx-0">
              Experience a culinary journey crafted with passion, fresh ingredients, and a touch of magic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/menu">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  View Full Menu <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Book a Table
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-[500px] z-10 relative aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Delicious Dish"
              fill
              className="rounded-xl shadow-2xl object-cover hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

          
          {/* Decorative background element */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-0" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-transparent group">
              <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Top Quality</h3>
                <p className="text-muted-foreground">Sourced from the finest local producers for unmatched freshness.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-transparent group">
              <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <ChefHat className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Master Chefs</h3>
                <p className="text-muted-foreground">Culinary experts dedicated to perfecting every plate.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-none bg-transparent group">
              <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                <div className="p-4 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Fast Service</h3>
                <p className="text-muted-foreground">Enjoy your meal without the wait, served with a smile.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight mb-4">Customer Favorites</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Dishes that keep our guests coming back for more.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {/* Dish 1 */}
                <Card className="overflow-hidden border-none shadow-md bg-background hover:shadow-xl transition-all duration-300 group">
                    <div className="overflow-hidden h-56">
                        <img src="https://picsum.photos/400/300?random=20" alt="Signature Steak" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-xl">Signature Steak</h3>
                            <span className="font-semibold text-primary">$32.00</span>
                        </div>
                        <p className="text-muted-foreground text-sm">Premium cut grilled to perfection with our secret herb butter.</p>
                    </CardContent>
                </Card>
                {/* Dish 2 */}
                <Card className="overflow-hidden border-none shadow-md bg-background hover:shadow-xl transition-all duration-300 group">
                     <div className="overflow-hidden h-56">
                        <img src="https://picsum.photos/400/300?random=21" alt="Ocean Platter" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </div>
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-xl">Ocean Platter</h3>
                            <span className="font-semibold text-primary">$28.00</span>
                        </div>
                        <p className="text-muted-foreground text-sm">A fresh assortment of todays best catch, served with lemon garlic sauce.</p>
                    </CardContent>
                </Card>
                 {/* Dish 3 */}
                <Card className="overflow-hidden border-none shadow-md bg-background hover:shadow-xl transition-all duration-300 group">
                     <div className="overflow-hidden h-56">
                        <img src="https://picsum.photos/400/300?random=22" alt="Truffle Pasta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                     </div>
                    <CardContent className="p-6">
                         <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-xl">Truffle Pasta</h3>
                            <span className="font-semibold text-primary">$24.00</span>
                        </div>
                        <p className="text-muted-foreground text-sm">Handmade pasta tossed in a rich creamy truffle sauce.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="text-center mt-12">
                <Link href="/menu">
                    <Button variant="outline" size="lg" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        View Full Menu
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
       <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight mb-4">What People Say</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                    { name: "Sarah J.", text: "The atmosphere is stunning and the food is even better. Best dining experience in the city!" },
                    { name: "Michael R.", text: "I was blown away by the flavors. The Spicy Tuna Tartare is a must-try." },
                    { name: "Emily Chen", text: "Incredible service and a menu that caters to everyone. Highly recommended for date nights." }
                 ].map((t, i) => (
                    <Card key={i} className="bg-muted/30 border-none relative overflow-visible mt-6">
                        <div className="absolute -top-6 left-8 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                            <Quote className="h-6 w-6 fill-current" />
                        </div>
                        <CardContent className="p-8 pt-10 flex flex-col gap-4 h-full">
                            <p className="italic text-muted-foreground text-lg leading-relaxed">{t.text}</p>
                            <div className="font-bold text-foreground mt-auto border-t pt-4 border-border/50">
                                {t.name}
                            </div>
                        </CardContent>
                    </Card>
                 ))}
            </div>
        </div>
       </section>

       {/* Newsletter Section */}
       <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Culinary Club</h2>
             <p className="text-primary-foreground/90 max-w-xl mx-auto mb-10 text-lg md:text-xl font-light">
                Sign up for our newsletter to receive exclusive offers, seasonal menu updates, and chefs special recipes.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                 <Input 
                    placeholder="Enter your email address" 
                    className="bg-background text-foreground border-none h-12 text-base rounded-lg"
                 />
                 <Button variant="secondary" size="lg" className="h-12 px-8 font-bold text-base rounded-lg shadow-lg">
                    Subscribe
                 </Button>
             </div>
             <p className="mt-4 text-xs text-primary-foreground/60">
                 No spam, ever. Unsubscribe at any time.
             </p>
        </div>
       </section>
    </div>
  );
}
