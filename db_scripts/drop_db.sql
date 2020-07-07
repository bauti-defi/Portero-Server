--Drop table triggers
drop trigger can_be_guardia on guardia;
drop trigger revert_account_type_to_user on guardia;
drop trigger update_account_type_to_guardia on guardia;
drop trigger is_user on user_session;
drop trigger can_be_propietario on propietario;
drop trigger is_propietario on invite;
--Drop tables
drop table account, barrio, account_type, barrio_session, device, guardia, message, lote, lote_in_barrio, person, user_session, propietario, session, guest, invite, approved_guest, rejected_guest cascade;
--Drop functions
drop function if exists select_invite_as_guardia, can_be_guardia, is_user, can_be_propietario, revert_account_type_to_user, update_account_type_to_guardia, delete_lote, insert_person, insert_barrio_session, insert_user_session, insert_barrio, insert_guardia, insert_invite, insert_lote, insert_message, insert_propietario, insert_message, insert_session, insert_user, select_account, select_guardias_by_barrio, select_lotes_by_barrio, select_lotes_by_propietario, update_account_type, validate_invite, verify_session;