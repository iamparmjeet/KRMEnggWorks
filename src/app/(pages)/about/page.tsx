import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-20 bg-slate-950 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-yellow-400 font-semibold text-lg">
            Our values and vaulted us to the top of our industry.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-blue-600 mb-2 uppercase">Welcome to Our Company</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left - Image */}
            <div className="rounded-lg overflow-hidden h-80 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center order-2 lg:order-1">
              <span className="text-6xl">🔧</span>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                KRM Engineering Works Provides a full range of services
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold mt-1">●</span>
                  <div>
                    <p className="font-semibold text-slate-900">KRM Engineering Works A Leading Manufacturer and Supplier of construction machine manufacturers equipment</p>
                    <p className="text-slate-600 text-sm mt-1">Since 2021, KRM has been a trusted name in construction equipment. We are proud of our long-standing history in equipment manufacturing, exporting, and importing a wide range of products including Tandem Vibratory Rollers, Concrete Cutters, Power Floaters, Walk Behind Rollers, and Bar Bending Machines etc</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold mt-1">●</span>
                  <p className="font-semibold text-slate-900">Uncompromising Quality</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold mt-1">●</span>
                  <p className="font-semibold text-slate-900">Meeting Your Needs</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold mt-1">●</span>
                  <p className="font-semibold text-slate-900">Experienced Leadership</p>
                </div>

                <div className="flex gap-3">
                  <span className="text-blue-600 font-bold mt-1">●</span>
                  <div>
                    <p className="font-semibold text-slate-900">Under the guidance of our CEO, KM Ansari, KRM Engineering Works has earned a reputation for excellence in the industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-slate-300 rounded-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-lg">Total Number of Employees</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <p className="text-lg font-semibold text-slate-900 mb-4">11 to 25 People</p>
                <div className="text-4xl">👥</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-300 rounded-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-lg">Year of Establishment</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <p className="text-lg font-semibold text-slate-900 mb-4">Serving since 2021</p>
                <div className="text-4xl">📊</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-300 rounded-lg">
              <CardHeader className="pb-4">
                <CardTitle className="text-blue-600 text-lg">GST No.</CardTitle>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <p className="text-lg font-semibold text-slate-900 mb-4">09CBCPA0B7901ZS</p>
                <div className="text-4xl">📈</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
