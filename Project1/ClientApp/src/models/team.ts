import { PlayerModel } from './player';
export class TeamModel {
    id: number;
    name: string;
    country: string;
    coachName: string;
    foundationDate: Date;
    logoImage?: any;
    players: PlayerModel[];
}
