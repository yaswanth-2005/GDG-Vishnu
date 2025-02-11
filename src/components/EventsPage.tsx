//@ts-nocheck
import { events } from '@/data/events'
import EventCard from './event-card'
import { EventTypes } from '@/lib/types'

const EventsPage = () => {
    return (
        <div className=' w-full   max-w-[1300px] items-center mx-auto py-8 px-4'>
            <div className='grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {events.map((event: EventTypes) => (
                    <EventCard
                        key={event.slug} // Use a unique key like slug for better performance
                        bannerImage={event.bannerImage}
                        title={event.title}
                        slug={event.slug}
                        description={event.description}
                        date={event.date}
                    />
                ))}
            </div>
        </div>
    )
}

export default EventsPage
