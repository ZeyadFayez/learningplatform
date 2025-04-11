import React from 'react';
import { BookOpen, Users, Target, Award, Star, Heart, Zap, Globe, BarChart as ChartBar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-emerald-700 min-h-screen p-4">
          <div className="text-white font-semibold text-xl mb-8">Dashboard</div>
          <nav className="space-y-2">
            <a href="#" className="block text-white hover:bg-emerald-600 px-4 py-2 rounded">Home</a>
            <a href="#" className="block text-white hover:bg-emerald-600 px-4 py-2 rounded">Announcements</a>
            <a href="#" className="block text-white hover:bg-emerald-600 px-4 py-2 rounded">FAQ & Support</a>
            <a href="#" className="block text-white hover:bg-emerald-600 px-4 py-2 rounded">Contact Support</a>
            <a href="#" className="block text-white hover:bg-emerald-600 px-4 py-2 rounded flex items-center gap-2">
              <ChartBar className="w-4 h-4" />
              Progress Analytics    
            </a>
            <a href="#" className="block text-white hover:bg-emerald-600 px-4 py-2 rounded bg-emerald-600">About Us</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Empowering Global Education</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're dedicated to making quality education accessible to everyone, everywhere. Our platform combines cutting-edge technology with expert instruction to create an engaging learning experience.
              </p>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-emerald-600 mb-2">50,000+</div>
                <div className="text-gray-600">Active Students</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-emerald-600 mb-2">200+</div>
                <div className="text-gray-600">Expert Instructors</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl font-bold text-emerald-600 mb-2">1,000+</div>
                <div className="text-gray-600">Courses Available</div>
              </div>
            </section>

            {/* Mission Section */}
            <section className="bg-white rounded-lg shadow-sm p-8 mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-50 p-4 rounded-full mb-4">
                    <Target className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Accessible Education</h3>
                  <p className="text-gray-600">Breaking down barriers to make quality education available to everyone, regardless of location or background.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-50 p-4 rounded-full mb-4">
                    <Star className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Excellence in Learning</h3>
                  <p className="text-gray-600">Providing top-tier educational content and maintaining the highest standards of academic quality.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-50 p-4 rounded-full mb-4">
                    <Globe className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Global Community</h3>
                  <p className="text-gray-600">Building a diverse, inclusive learning community that spans across cultures and continents.</p>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Meet Our Leadership Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a" alt="CEO" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">Dr. Sarah Chen</h3>
                    <p className="text-emerald-600 mb-3">Chief Executive Officer</p>
                    <p className="text-gray-600">Former Stanford professor with 15+ years in EdTech innovation.</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" alt="CTO" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">Michael Rodriguez</h3>
                    <p className="text-emerald-600 mb-3">Chief Technology Officer</p>
                    <p className="text-gray-600">Tech veteran with experience at leading educational platforms.</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" alt="COO" className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">Emma Thompson</h3>
                    <p className="text-emerald-600 mb-3">Chief Operating Officer</p>
                    <p className="text-gray-600">Dedicated to scaling educational impact globally.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Values Section */}
            <section className="bg-emerald-50 rounded-lg p-8 mb-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-8">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Passion</h3>
                    <p className="text-gray-600">For education</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Community</h3>
                    <p className="text-gray-600">Collaborative learning</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Excellence</h3>
                    <p className="text-gray-600">In everything</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-full">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Innovation</h3>
                    <p className="text-gray-600">Through technology</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-lg p-12">
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Learning Community</h2>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                Start your learning journey today and become part of our global community of learners and educators.
              </p>
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                Get Started Now
              </button>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
