import BodyServices from "@/components/services/Body"
import ServicesHeader from "@/components/services/Header"


function ServicesPage() {
    return (
        <main className="text-dark dark:text-light">
            <ServicesHeader />
            <BodyServices />
        </main>
    )
}

export default ServicesPage