import { ArgsType, ClassType, Field, Int, ObjectType } from "type-graphql";
import { Booking, Listing } from "../entities";

@ArgsType()
export class PaginationArgs {
    @Field(() => Int)
    limit: number;

    @Field(() => Int)
    page: number;
}

export function DataResponse<T>(TClass: ClassType<T>) {
    @ObjectType(`Data${TClass.name}Response`)
    class DataResponseClass {
        @Field(() => Int)
        total: number;

        @Field(() => [TClass])
        result: T[];
    }

    return DataResponseClass;
}

export const ListingDataResponse = DataResponse(Listing);
export type ListingDataResponse = InstanceType<typeof ListingDataResponse>;

export const BookingDataResponse = DataResponse(Booking);
export type BookingDataResponse = InstanceType<typeof BookingDataResponse>;
