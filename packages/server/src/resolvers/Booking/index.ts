import { Query, Resolver } from "type-graphql";
import { Booking } from "../../entity";

@Resolver(Booking)
export class BookingResolver {
    @Query(() => [Booking])
    async allTypes(): Promise<Booking[]> {
        return await Booking.find();
    }
}
