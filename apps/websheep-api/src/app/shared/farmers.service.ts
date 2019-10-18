import { database } from '../../lib/database';

export const farmersService = {
  get({ farmerId }: { farmerId: string }) {
    return database
      .get('farmers')
      .find({ id: farmerId })
      .value();
  },
  getByToken({ token }: { token: string }) {
    const tokenInfo = database
      .get('tokens')
      .find({ token })
      .value();

    if (tokenInfo == null) {
      return null;
    }

    return this.get({ farmerId: tokenInfo.userId });
  }
};