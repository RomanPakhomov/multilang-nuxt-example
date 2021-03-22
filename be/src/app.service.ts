import { Injectable } from '@nestjs/common';
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
      const accessToken = user.email + user.password;
      return { accessToken };
    }
  }
}
