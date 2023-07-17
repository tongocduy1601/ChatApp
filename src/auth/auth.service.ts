import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async signIn(email:string,password:string):Promise<any>{
        const user = await this.usersService.findByEmail(email);
        console.log(user);
        const checkPass=await bcrypt.compare(password,user.password);
        if (!checkPass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user._id, username: user.email};
        return {
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}
