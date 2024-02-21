//import RevenueChart from "../../ui/dashboard/revenue-chart"
//import LatestInvoices from "../../ui/dashboard/latest-invoices"
import { lusitana } from "@/app/ui/fonts"
import { Suspense } from "react"
//import { LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons"
//import CardWrapper from "../../ui/dashboard/cards"
//import { CardSkeleton } from "@/app/ui/skeletons"


export default async function Page() {
    
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-x1 md:text-2x1`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            </div>
        </main>
    )
}
