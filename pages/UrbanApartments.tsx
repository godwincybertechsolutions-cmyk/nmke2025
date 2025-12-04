import React from 'react';
import { Bed, Bath, Move, Check, Car, User } from 'lucide-react';
import { URBAN_APARTMENTS } from '../constants';
import Gallery from '../components/Gallery';
import SectionHeader from '../components/SectionHeader';

const UrbanApartments: React.FC = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <div className="relative h-[50vh] w-full bg-dark">
        <img 
          src="https://kingsdevelopersapi.co.ke/blog/d10dcefb-45ac-4081-80f8-2b0485469c4c/image-1732602254089-630681340.png" 
          alt="Nairobi Skyline" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
           <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">Nairobi Living</h1>
           <p className="text-white/90 text-lg tracking-wide uppercase">Sophistication in the City</p>
        </div>
      </div>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="Select Your Residence" subtitle="Premium Locations" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {URBAN_APARTMENTS.map((apt) => (
              <div key={apt.id} className="group border border-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white">
                {/* Inline Gallery */}
                <div className="overflow-hidden relative">
                  <div className="absolute top-4 right-4 bg-dark text-white px-3 py-1 text-xs font-bold uppercase tracking-wider z-10 rounded">
                    {apt.location}
                  </div>
                  <Gallery images={apt.images || (apt.image ? [apt.image] : [])} altBase={apt.name} />
                </div>

                {/* Details */}
                <div className="p-8">
                  <h3 className="font-serif text-3xl mb-2 text-dark">{apt.name}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
                    {apt.units && (
                      <span className="flex items-center gap-1"><Bed size={16} /> {apt.units.twoBedroom ?? 0}x 2BR • {apt.units.oneBedroom ?? 0}x 1BR</span>
                    )}
                    {apt.floors && (
                      <span className="flex items-center gap-1"><Move size={16} /> Floors: {apt.floors.join(', ')}</span>
                    )}
                  </div>

                  {/* Facilities & Services */}
                  <div className="bg-stone-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="block text-xs text-gray-400 uppercase">Facilities</span>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
                        {apt.facilities?.map((f: string, i: number) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-400 uppercase">Services</span>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
                        {apt.services?.map((s: string, i: number) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {apt.features.map((feat: string, i: number) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check size={14} className="text-primary" /> {feat}
                      </div>
                    ))}
                  </div>

                  {apt.surrounding && (
                    <div className="mb-8">
                      <span className="block text-xs text-gray-400 uppercase">Surrounding Area</span>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600 list-disc list-inside">
                        {apt.surrounding.map((s: string, i: number) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button className="flex-1 bg-dark text-white py-3 rounded text-sm font-medium uppercase tracking-wide hover:bg-black transition-colors">
                      Book Stay
                    </button>
                    <button className="flex-1 border border-gray-200 text-dark py-3 rounded text-sm font-medium uppercase tracking-wide hover:bg-gray-50 transition-colors">
                      Enquire Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-6">
          <SectionHeader title="Concierge Services" subtitle="City Experiences" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Car size={32} />
              </div>
              <h4 className="font-serif text-xl mb-3">Chauffeur Services</h4>
              <p className="text-gray-500 text-sm">Airport transfers and daily city navigation in luxury comfort.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <User size={32} />
              </div>
              <h4 className="font-serif text-xl mb-3">Private Guides</h4>
              <p className="text-gray-500 text-sm">Discover the hidden gems of Nairobi with our local experts.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Bed size={32} />
              </div>
              <h4 className="font-serif text-xl mb-3">Premium Housekeeping</h4>
              <p className="text-gray-500 text-sm">Daily cleaning, laundry, and turndown services included.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UrbanApartments;
