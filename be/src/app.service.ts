import { Injectable } from '@nestjs/common';
import { jwt } from 'jsonwebtoken';

@Injectable()
export class AppService {

  wallets = [
    {
      coinId: 'eth',
      amount: 0.03224,
    },
    {
      coinId: 'btc',
      amount: 0.01224,
    },
    {
      coinId: 'btc',
      amount: 0.03224,
    },
    {
      coinId: 'btc',
      amount: 0.03224,
    },
  ];

  combinedSumm = 114504;

  users: any = [];

  getWallets(): any {
    return {
      wallets: this.wallets,
      combinedSumm: this.combinedSumm
    };
  }

  getCombunedSumm(): any {
    return this.combinedSumm;
  }

  registration(user: any): any {
    this.users.push({
      name: user.name,
      email: user.email,
      password: user.password
    });
  }

  login(user: any): any {
    const find = this.users.find(u => u.email === user.email && u.password === user.password);
    if (find) {
      const access_token = jwt.sign({ data: user.email }, 'secret', {
        expiresIn: 60 * 60,
      });
      return { access_token };
    }
  }
}
