import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service'
import { Profile } from './profile.interface';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {

    }

    @Get()
    find(): Profile {
        return this.profileService.getProfile();
    }
}