import {
  CommandInteraction,
  CommandInteractionOptionResolver,
  ChatInputApplicationCommandData,
  PermissionResolvable,
  GuildManager,
  GuildMember,
} from "discord.js";
import { ExtendedClient } from "../structures/Client";

/*
 * {
 *  name: "command name",
 *  description: "any description",
 *  run:  async({client, instructions}) => {}
 * }
 */

export interface ExtendedInteraction extends CommandInteraction {
  member: GuildMember;
}

interface RunOptions {
  client: ExtendedClient;
  interaction: ExtendedInteraction;
  args: CommandInteractionOptionResolver;
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = {
  userPermissions?: PermissionResolvable[];
  run: RunFunction;
} & ChatInputApplicationCommandData;
