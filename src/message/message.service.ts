import { Injectable } from '@nestjs/common';
import { Connection } from 'typeorm';
import { MessageType } from './message.type';

const jwt = require('jsonwebtoken');

@Injectable()
export default class MessageService {
  constructor(private readonly connection: Connection) {}

  private async sign(data: any, issuer: string): Promise<SignedMessage> {
    const message = await this.connection
      .query(insert_message(issuer))
      .then(response => response[0]);
    const token = await jwt.sign(data, message.key);
    return {
      message: token,
      id: message.message_id,
    };
  }

  async createLoteInvite(lote_id: string, barrio_id: string) {
    return await this.sign(loteInvite(lote_id, barrio_id), barrio_id);
  }

  async decode(message: string, message_id: string) {
    const key: string = await this.connection
      .query(select_invite_key_query(message_id))
      .then(response => response[0]['encry_key']);

    return await jwt.decode(message, key);
  }
}

export type SignedMessage = { message: string; id: string };

function loteInvite(lote_id: string, barrio_id: string) {
  return { type: MessageType.ASSOCIATE_PROP, lote_id, barrio_id };
}

function select_invite_key_query(message_id: string): string {
  return `SELECT encry_key from message where id = '${message_id}';`;
}

function insert_message(issuer: string): string {
  return `SELECT * from insert_message('${issuer}');`;
}
