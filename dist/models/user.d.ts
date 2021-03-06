import { Types } from 'mongoose';
import CarMeta from './subModels/car';
import GolfMeta from './subModels/golf';
export declare namespace User {
    interface Model {
        _id?: Types.ObjectId;
        address?: string;
        admin?: boolean;
        birthday?: Date | null;
        city?: string;
        clubID?: Types.ObjectId;
        remoteID?: string;
        email?: string;
        firstName?: string;
        jobTitle?: string;
        joined?: Date;
        lastName?: string;
        location?: string;
        middleName?: string;
        password?: string;
        phone?: string;
        photoURL?: string;
        state?: string;
        username?: string;
        zip?: string;
        groups?: string[];
        memberNumber?: string;
        membershipType?: Types.ObjectId;
        maritalStatus?: MaritalStatus;
        memberStatus?: MemberStatus;
        meta?: UserMeta;
    }
    interface UserGroup {
        _id?: Types.ObjectId;
        name: string;
        description?: string;
        users?: Types.ObjectId[] | Model[];
    }
    interface UserMeta {
        golf?: GolfMeta.Model;
        car?: CarMeta.Model;
    }
    enum MaritalStatus {
        Single = "SINGLE",
        InRelationship = "IN_RELATIONSHIP",
        Married = "MARRIED",
        Divorced = "DIVORCED",
        Widowed = "WIDOWED"
    }
    enum MemberStatus {
        Prospect = "PROSPECT",
        Active = "ACTIVE",
        Lapsed = "LAPSED"
    }
}
export default User;
