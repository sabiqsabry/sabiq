import { FeaturedProjectsCard } from "./cards/featured-projects-card"
import { LocationCard } from "./cards/location-card"
import { SocialsCard } from "./cards/socials-card"
import { CalendarCard } from "./cards/calendar-card"
import { AboutCard } from "./cards/about-card"
import { AwardsCard } from "./cards/awards-badge"

export function BentoGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px]">

            {/* Row 1 & 2 Left - Featured Projects (Large) */}
            <div className="col-span-2 md:col-span-2 row-span-2">
                <FeaturedProjectsCard />
            </div>

            {/* Row 1 & 2 Right - Location (Medium/Large) */}
            <div className="col-span-2 md:col-span-2 row-span-2">
                <LocationCard />
            </div>

            {/* Row 3 - Four Small Cards */}
            <div className="col-span-1 md:col-span-1 row-span-1">
                <SocialsCard />
            </div>

            <div className="col-span-1 md:col-span-1 row-span-1">
                <CalendarCard />
            </div>

            <div className="col-span-1 md:col-span-1 row-span-1">
                <AboutCard />
            </div>

            <div className="col-span-1 md:col-span-1 row-span-1">
                <AwardsCard />
            </div>

        </div>
    )
}
