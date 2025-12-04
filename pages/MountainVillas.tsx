import React from 'react';
import { Wifi, Shield, Coffee, Utensils, Check, Fish, Mountain, Camera } from 'lucide-react';
import { MOUNTAIN_VILLA_PRICING, MOUNTAIN_VILLAS } from '../constants';
import SectionHeader from '../components/SectionHeader';
import Gallery from '../components/Gallery';

const MountainVillas: React.FC = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <div className="text-center py-14">
        <h1 className="font-serif text-5xl md:text-6xl text-dark mb-3">Mountain Villas</h1>
        <p className="text-gray-600">Timeless architecture and contemporary comfort on the slopes of Mt. Kenya.</p>
      </div>

      {/* Pricing Section */}
      <section className="py-20 bg-stone-50 -mt-20 relative z-20 rounded-t-[3rem]">
        <div className="container mx-auto px-6">
          <SectionHeader title="Your Stay Options" subtitle="Choose Your Experience" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOUNTAIN_VILLA_PRICING.map((tier, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-gray-100 flex flex-col">
                <h3 className="font-serif text-2xl text-dark mb-2">{tier.title}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-primary text-3xl font-bold">{tier.price}</span>
                  <span className="text-gray-400 text-sm ml-2">{tier.unit}</span>
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-5 h-5 rounded-full bg-orange-100 text-primary flex items-center justify-center flex-shrink-0">
                        <Check size={12} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-lg font-medium uppercase text-xs tracking-widest">
                  Reserve Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villas Sections with Inline Galleries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          {MOUNTAIN_VILLAS.map((villa) => (
            <div key={villa.id} className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <Gallery images={villa.images} altBase={villa.name} />
              </div>
              <div>
                <h2 className="font-serif text-4xl text-dark mb-2">{villa.name}</h2>
                <p className="text-gray-600 mb-2">{villa.location}</p>
                {villa.propertyType && (
                  <p className="text-gray-500 italic mb-6">{villa.propertyType}</p>
                )}

                {villa.architecture && (
                  <div className="mb-6">
                    <span className="text-xs uppercase text-gray-400">Architecture</span>
                    <p className="text-dark">{villa.architecture}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <span className="block text-xs text-gray-400 uppercase mb-2">Features</span>
                    <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                      {villa.features?.map((f: string, i: number) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase mb-2">Facilities</span>
                    <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                      {villa.facilities?.map((f: string, i: number) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <span className="block text-xs text-gray-400 uppercase mb-2">Services</span>
                    <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                      {villa.services?.map((s: string, i: number) => <li key={i}>{s}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400 uppercase mb-2">Nearby Parks</span>
                    <ul className="space-y-1 text-sm text-gray-700 list-disc list-inside">
                      {villa.nearbyParks?.map((p: string, i: number) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-dark text-white py-3 rounded text-sm font-medium uppercase tracking-wide hover:bg-black transition-colors">
                    Book Stay
                  </button>
                  <button className="flex-1 border border-gray-200 text-dark py-3 rounded text-sm font-medium uppercase tracking-wide hover:bg-gray-50 transition-colors">
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities could be added here if needed */}
    </div>
  );
};

export default MountainVillas;
