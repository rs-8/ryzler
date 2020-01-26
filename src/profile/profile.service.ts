import { Injectable } from '@nestjs/common'
import { Profile } from './profile.interface';

@Injectable()
export class ProfileService {
    constructor() {

    }

    getProfile(): Profile {
        return { id: 0, name: 'rs-8' };
    }
}