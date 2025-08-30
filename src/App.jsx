import React, { useState } from 'react';
import './App.css';
import { ShoppingCart, Star, Shield, Truck, Phone, Mail, CheckCircle, Minus, Plus } from 'lucide-react';

// Import des images
import productImage1 from './assets/lRG1c8QclBa2.webp';
import productImage2 from './assets/qKsVVMStEBQ5.jpg';
import productImage3 from './assets/N7G671gQtRMa.jpg';
import productImage4 from './assets/PhZtC2EOyfHq.jpeg';

function App() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [productImage1, productImage2, productImage3, productImage4];
  
  const price = 89.99;
  const totalPrice = (price * quantity).toFixed(2);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">VIRAX</h1>
            <span className="text-sm text-muted-foreground">Outillage Professionnel</span>
          </div>
          <div className="flex items-center space-x-4">
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images du produit */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={productImages[selectedImage]} 
                alt="Déboucheur Virax 290210"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Vue ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informations produit */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Déboucheur à pompe Virax 290210</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(767 avis)</span>
              </div>
              <p className="text-4xl font-bold text-primary mb-4">{price}€</p>
            </div>

            {/* Avantages clés */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Débouchage rapide et efficace</h3>
                  <p className="text-sm text-muted-foreground">Grâce à la puissance de l'air comprimé à haute pression</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Matériaux de haute qualité</h3>
                  <p className="text-sm text-muted-foreground">ABS, PVC, acier inoxydable - durable et résistant</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold">Multifonctionnel</h3>
                  <p className="text-sm text-muted-foreground">2 embouts inclus pour tous types de canalisations</p>
                </div>
              </div>
            </div>

            {/* Quantité et achat */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantité :</span>
                <div className="flex items-center border rounded-lg">
                  <button 
                    className='px-3 py-1'
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button className='px-3 py-1' onClick={incrementQuantity}>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total :</span>
                  <span>{totalPrice}€</span>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg" onClick={() => window.open('https://buy.stripe.com/3cIcN48dY301gPV7ukefC00', '_blank')}>
                  Acheter maintenant
                </button>
              </div>
            </div>

            {/* Garanties */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Garantie 2 ans</p>
                <p className="text-xs text-muted-foreground">Virax</p>
              </div>
              <div className="text-center">
                <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Livraison rapide</p>
                <p className="text-xs text-muted-foreground">En France</p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="text-sm font-medium">Support client</p>
                <p className="text-xs text-muted-foreground">7j/7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description détaillée */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Description du produit</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className='font-bold text-lg mb-2'>Caractéristiques techniques</h3>
              <ul className='space-y-2'>
                <li className='flex justify-between'><span>Marque :</span><span className='font-medium'>Virax</span></li>
                <li className='flex justify-between'><span>Modèle :</span><span className='font-medium'>290210</span></li>
                <li className='flex justify-between'><span>Poids :</span><span className='font-medium'>2 kg</span></li>
                <li className='flex justify-between'><span>Matériaux :</span><span className='font-medium'>ABS, PVC, Acier inox</span></li>
                <li className='flex justify-between'><span>Embouts inclus :</span><span className='font-medium'>2</span></li>
              </ul>
            </div>

            <div>
              <h3 className='font-bold text-lg mb-2'>Utilisation</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Le déboucheur Virax 290210 est parfait pour déboucher rapidement et efficacement 
                les canalisations obstruées dans les toilettes, éviers, douches et lavabos.
              </p>
              <ul className="text-sm space-y-1">
                <li>• Fonctionne par pression et aspiration</li>
                <li>• Adapté aux canalisations de 25 à 50 mm</li>
                <li>• Facile à nettoyer après utilisation</li>
                <li>• Résistant aux produits chimiques</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>01 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@virax-shop.fr</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Livraison</h3>
              <ul className="text-sm space-y-1">
                <li>Livraison en France métropolitaine</li>
                <li>Expédition sous 24h</li>
                <li>Livraison gratuite dès 50€</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Garantie</h3>
              <ul className="text-sm space-y-1">
                <li>Garantie fabricant 2 ans</li>
                <li>Retour gratuit 30 jours</li>
                <li>Service client réactif</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Virax Shop. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
