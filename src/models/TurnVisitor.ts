import {Player} from "./Player";

export interface TurnVisitor {
    playHuman(player: Player): Promise<void>;
    playBot(player: Player): Promise<void>;
}