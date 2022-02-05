var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// wasm-deferred:/home/gridlocker/dev/side/metaitems/assets/node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib_bg.wasm
var cardano_serialization_lib_bg_default;
var init_cardano_serialization_lib_bg = __esm({
  "wasm-deferred:/home/gridlocker/dev/side/metaitems/assets/node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib_bg.wasm"() {
    cardano_serialization_lib_bg_default = "./cardano_serialization_lib_bg-H3IPY5RS.wasm";
  }
});

// wasm-module:/home/gridlocker/dev/side/metaitems/assets/node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib_bg.wasm
async function loadWasm(module2, imports2) {
  if (typeof module2 === "string") {
    const moduleRequest = await fetch(module2);
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(moduleRequest, imports2);
      } catch (e) {
        if (moduleRequest.headers.get("Content-Type") != "application/wasm") {
          console.warn(e);
        } else {
          throw e;
        }
      }
    }
    module2 = await moduleRequest.arrayBuffer();
  }
  return await WebAssembly.instantiate(module2, imports2);
}
var imports, instance, module, memory, __wbg_unitinterval_free, unitinterval_to_bytes, unitinterval_from_bytes, unitinterval_numerator, unitinterval_denominator, unitinterval_new, __wbg_transaction_free, transaction_to_bytes, transaction_from_bytes, transaction_body, transaction_witness_set, transaction_is_valid, transaction_auxiliary_data, transaction_set_is_valid, transaction_new, __wbg_transactioninputs_free, transactioninputs_to_bytes, transactioninputs_from_bytes, transactioninputs_new, transactioninputs_len, transactioninputs_get, transactioninputs_add, __wbg_transactionoutputs_free, transactionoutputs_to_bytes, transactionoutputs_from_bytes, transactionoutputs_new, transactionoutputs_len, transactionoutputs_get, transactionoutputs_add, __wbg_certificates_free, certificates_to_bytes, certificates_from_bytes, certificates_new, certificates_len, certificates_get, certificates_add, __wbg_transactionbody_free, transactionbody_to_bytes, transactionbody_from_bytes, transactionbody_inputs, transactionbody_outputs, transactionbody_fee, transactionbody_ttl, transactionbody_set_certs, transactionbody_certs, transactionbody_set_withdrawals, transactionbody_withdrawals, transactionbody_set_update, transactionbody_update, transactionbody_set_auxiliary_data_hash, transactionbody_auxiliary_data_hash, transactionbody_set_validity_start_interval, transactionbody_validity_start_interval, transactionbody_set_mint, transactionbody_multiassets, transactionbody_set_script_data_hash, transactionbody_script_data_hash, transactionbody_set_collateral, transactionbody_collateral, transactionbody_set_required_signers, transactionbody_required_signers, transactionbody_set_network_id, transactionbody_network_id, transactionbody_new, __wbg_transactioninput_free, transactioninput_to_bytes, transactioninput_from_bytes, transactioninput_transaction_id, transactioninput_index, transactioninput_new, __wbg_transactionoutput_free, transactionoutput_to_bytes, transactionoutput_from_bytes, transactionoutput_address, transactionoutput_amount, transactionoutput_data_hash, transactionoutput_set_data_hash, transactionoutput_new, __wbg_stakeregistration_free, stakeregistration_to_bytes, stakeregistration_from_bytes, stakeregistration_stake_credential, stakeregistration_new, __wbg_stakederegistration_free, stakederegistration_to_bytes, stakederegistration_from_bytes, stakederegistration_stake_credential, stakederegistration_new, __wbg_stakedelegation_free, stakedelegation_to_bytes, stakedelegation_from_bytes, stakedelegation_stake_credential, stakedelegation_pool_keyhash, stakedelegation_new, __wbg_ed25519keyhashes_free, ed25519keyhashes_to_bytes, ed25519keyhashes_from_bytes, ed25519keyhashes_new, ed25519keyhashes_len, ed25519keyhashes_get, ed25519keyhashes_add, __wbg_relays_free, relays_to_bytes, relays_from_bytes, relays_new, relays_len, relays_get, relays_add, __wbg_poolparams_free, poolparams_to_bytes, poolparams_from_bytes, poolparams_operator, poolparams_vrf_keyhash, poolparams_pledge, poolparams_cost, poolparams_margin, poolparams_reward_account, poolparams_pool_owners, poolparams_relays, poolparams_pool_metadata, poolparams_new, __wbg_poolregistration_free, poolregistration_to_bytes, poolregistration_from_bytes, poolregistration_pool_params, poolregistration_new, __wbg_poolretirement_free, poolretirement_to_bytes, poolretirement_from_bytes, poolretirement_pool_keyhash, poolretirement_epoch, poolretirement_new, __wbg_genesiskeydelegation_free, genesiskeydelegation_to_bytes, genesiskeydelegation_from_bytes, genesiskeydelegation_genesishash, genesiskeydelegation_genesis_delegate_hash, genesiskeydelegation_vrf_keyhash, genesiskeydelegation_new, __wbg_moveinstantaneousrewardscert_free, moveinstantaneousrewardscert_to_bytes, moveinstantaneousrewardscert_from_bytes, moveinstantaneousrewardscert_move_instantaneous_reward, moveinstantaneousrewardscert_new, __wbg_certificate_free, certificate_to_bytes, certificate_from_bytes, certificate_new_stake_registration, certificate_new_stake_deregistration, certificate_new_stake_delegation, certificate_new_pool_registration, certificate_new_pool_retirement, certificate_new_genesis_key_delegation, certificate_new_move_instantaneous_rewards_cert, certificate_kind, certificate_as_stake_registration, certificate_as_stake_deregistration, certificate_as_stake_delegation, certificate_as_pool_registration, certificate_as_pool_retirement, certificate_as_genesis_key_delegation, certificate_as_move_instantaneous_rewards_cert, __wbg_mirtostakecredentials_free, mirtostakecredentials_to_bytes, mirtostakecredentials_from_bytes, mirtostakecredentials_new, mirtostakecredentials_len, mirtostakecredentials_insert, mirtostakecredentials_get, mirtostakecredentials_keys, __wbg_moveinstantaneousreward_free, moveinstantaneousreward_to_bytes, moveinstantaneousreward_from_bytes, moveinstantaneousreward_new_to_other_pot, moveinstantaneousreward_new_to_stake_creds, moveinstantaneousreward_pot, moveinstantaneousreward_kind, moveinstantaneousreward_as_to_other_pot, moveinstantaneousreward_as_to_stake_creds, __wbg_ipv4_free, ipv4_to_bytes, ipv4_from_bytes, ipv4_new, ipv4_ip, __wbg_ipv6_free, ipv6_to_bytes, ipv6_from_bytes, ipv6_new, ipv6_ip, __wbg_url_free, url_to_bytes, url_from_bytes, url_new, url_url, __wbg_dnsrecordaoraaaa_free, dnsrecordaoraaaa_to_bytes, dnsrecordaoraaaa_from_bytes, dnsrecordaoraaaa_new, dnsrecordaoraaaa_record, __wbg_dnsrecordsrv_free, dnsrecordsrv_to_bytes, dnsrecordsrv_from_bytes, dnsrecordsrv_new, dnsrecordsrv_record, __wbg_singlehostaddr_free, singlehostaddr_to_bytes, singlehostaddr_from_bytes, singlehostaddr_port, singlehostaddr_ipv4, singlehostaddr_ipv6, singlehostaddr_new, __wbg_singlehostname_free, singlehostname_to_bytes, singlehostname_from_bytes, singlehostname_port, singlehostname_dns_name, singlehostname_new, __wbg_multihostname_free, multihostname_to_bytes, multihostname_from_bytes, multihostname_dns_name, multihostname_new, __wbg_relay_free, relay_to_bytes, relay_from_bytes, relay_new_single_host_addr, relay_new_single_host_name, relay_new_multi_host_name, relay_kind, relay_as_single_host_addr, relay_as_single_host_name, relay_as_multi_host_name, __wbg_poolmetadata_free, poolmetadata_to_bytes, poolmetadata_from_bytes, poolmetadata_url, poolmetadata_pool_metadata_hash, poolmetadata_new, __wbg_stakecredentials_free, stakecredentials_to_bytes, stakecredentials_from_bytes, stakecredentials_new, stakecredentials_len, stakecredentials_get, stakecredentials_add, __wbg_rewardaddresses_free, rewardaddresses_to_bytes, rewardaddresses_from_bytes, rewardaddresses_new, rewardaddresses_len, rewardaddresses_get, rewardaddresses_add, __wbg_withdrawals_free, withdrawals_to_bytes, withdrawals_from_bytes, withdrawals_new, withdrawals_len, withdrawals_insert, withdrawals_get, withdrawals_keys, __wbg_transactionwitnessset_free, transactionwitnessset_to_bytes, transactionwitnessset_from_bytes, transactionwitnessset_set_vkeys, transactionwitnessset_vkeys, transactionwitnessset_set_native_scripts, transactionwitnessset_native_scripts, transactionwitnessset_set_bootstraps, transactionwitnessset_bootstraps, transactionwitnessset_set_plutus_scripts, transactionwitnessset_plutus_scripts, transactionwitnessset_set_plutus_data, transactionwitnessset_plutus_data, transactionwitnessset_set_redeemers, transactionwitnessset_redeemers, transactionwitnessset_new, __wbg_scriptpubkey_free, scriptpubkey_to_bytes, scriptpubkey_from_bytes, scriptpubkey_addr_keyhash, scriptpubkey_new, __wbg_scriptall_free, scriptall_to_bytes, scriptall_from_bytes, scriptall_native_scripts, scriptall_new, __wbg_scriptany_free, scriptany_to_bytes, scriptany_from_bytes, scriptany_native_scripts, scriptany_new, __wbg_scriptnofk_free, scriptnofk_to_bytes, scriptnofk_from_bytes, scriptnofk_n, scriptnofk_native_scripts, scriptnofk_new, __wbg_timelockstart_free, timelockstart_to_bytes, timelockstart_from_bytes, timelockstart_slot, timelockstart_new, __wbg_timelockexpiry_free, timelockexpiry_to_bytes, timelockexpiry_from_bytes, timelockexpiry_slot, timelockexpiry_new, __wbg_nativescript_free, nativescript_to_bytes, nativescript_from_bytes, nativescript_hash, nativescript_new_script_pubkey, nativescript_new_script_all, nativescript_new_script_any, nativescript_new_script_n_of_k, nativescript_new_timelock_start, nativescript_new_timelock_expiry, nativescript_kind, nativescript_as_script_pubkey, nativescript_as_script_all, nativescript_as_script_any, nativescript_as_script_n_of_k, nativescript_as_timelock_start, nativescript_as_timelock_expiry, __wbg_nativescripts_free, nativescripts_new, nativescripts_len, nativescripts_get, nativescripts_add, __wbg_update_free, update_to_bytes, update_from_bytes, update_proposed_protocol_parameter_updates, update_epoch, update_new, __wbg_genesishashes_free, genesishashes_to_bytes, genesishashes_from_bytes, genesishashes_new, genesishashes_len, genesishashes_get, genesishashes_add, __wbg_scripthashes_free, scripthashes_to_bytes, scripthashes_from_bytes, scripthashes_new, scripthashes_len, scripthashes_get, scripthashes_add, __wbg_proposedprotocolparameterupdates_free, proposedprotocolparameterupdates_to_bytes, proposedprotocolparameterupdates_from_bytes, proposedprotocolparameterupdates_new, proposedprotocolparameterupdates_len, proposedprotocolparameterupdates_insert, proposedprotocolparameterupdates_get, proposedprotocolparameterupdates_keys, __wbg_protocolversion_free, protocolversion_to_bytes, protocolversion_from_bytes, protocolversion_major, protocolversion_minor, protocolversion_new, __wbg_protocolversions_free, protocolversions_to_bytes, protocolversions_from_bytes, protocolversions_new, protocolversions_len, protocolversions_get, protocolversions_add, __wbg_protocolparamupdate_free, protocolparamupdate_to_bytes, protocolparamupdate_from_bytes, protocolparamupdate_set_minfee_a, protocolparamupdate_minfee_a, protocolparamupdate_set_minfee_b, protocolparamupdate_minfee_b, protocolparamupdate_set_max_block_body_size, protocolparamupdate_max_block_body_size, protocolparamupdate_set_max_tx_size, protocolparamupdate_max_tx_size, protocolparamupdate_set_max_block_header_size, protocolparamupdate_max_block_header_size, protocolparamupdate_set_key_deposit, protocolparamupdate_key_deposit, protocolparamupdate_set_pool_deposit, protocolparamupdate_pool_deposit, protocolparamupdate_set_max_epoch, protocolparamupdate_max_epoch, protocolparamupdate_set_n_opt, protocolparamupdate_n_opt, protocolparamupdate_set_pool_pledge_influence, protocolparamupdate_pool_pledge_influence, protocolparamupdate_set_expansion_rate, protocolparamupdate_expansion_rate, protocolparamupdate_set_treasury_growth_rate, protocolparamupdate_treasury_growth_rate, protocolparamupdate_set_d, protocolparamupdate_d, protocolparamupdate_set_extra_entropy, protocolparamupdate_extra_entropy, protocolparamupdate_set_protocol_version, protocolparamupdate_protocol_version, protocolparamupdate_set_min_pool_cost, protocolparamupdate_min_pool_cost, protocolparamupdate_set_ada_per_utxo_byte, protocolparamupdate_ada_per_utxo_byte, protocolparamupdate_set_cost_models, protocolparamupdate_cost_models, protocolparamupdate_set_execution_costs, protocolparamupdate_execution_costs, protocolparamupdate_set_max_tx_ex_units, protocolparamupdate_max_tx_ex_units, protocolparamupdate_set_max_block_ex_units, protocolparamupdate_max_block_ex_units, protocolparamupdate_set_max_value_size, protocolparamupdate_max_value_size, protocolparamupdate_new, __wbg_transactionbodies_free, transactionbodies_to_bytes, transactionbodies_from_bytes, transactionbodies_new, transactionbodies_len, transactionbodies_get, transactionbodies_add, __wbg_transactionwitnesssets_free, transactionwitnesssets_to_bytes, transactionwitnesssets_from_bytes, transactionwitnesssets_new, transactionwitnesssets_len, transactionwitnesssets_get, transactionwitnesssets_add, __wbg_auxiliarydataset_free, auxiliarydataset_new, auxiliarydataset_len, auxiliarydataset_insert, auxiliarydataset_get, auxiliarydataset_indices, __wbg_block_free, block_to_bytes, block_from_bytes, block_header, block_transaction_bodies, block_transaction_witness_sets, block_auxiliary_data_set, block_invalid_transactions, block_new, __wbg_header_free, header_to_bytes, header_from_bytes, header_header_body, header_body_signature, header_new, __wbg_operationalcert_free, operationalcert_to_bytes, operationalcert_from_bytes, operationalcert_hot_vkey, operationalcert_sequence_number, operationalcert_kes_period, operationalcert_sigma, operationalcert_new, __wbg_headerbody_free, headerbody_to_bytes, headerbody_from_bytes, headerbody_block_number, headerbody_slot, headerbody_prev_hash, headerbody_issuer_vkey, headerbody_vrf_vkey, headerbody_nonce_vrf, headerbody_leader_vrf, headerbody_block_body_size, headerbody_block_body_hash, headerbody_operational_cert, headerbody_protocol_version, headerbody_new, __wbg_assetname_free, assetname_to_bytes, assetname_from_bytes, assetname_new, assetname_name, __wbg_assetnames_free, assetnames_to_bytes, assetnames_from_bytes, assetnames_new, assetnames_len, assetnames_get, assetnames_add, __wbg_assets_free, assets_to_bytes, assets_from_bytes, assets_new, assets_len, assets_insert, assets_get, assets_keys, __wbg_multiasset_free, multiasset_to_bytes, multiasset_from_bytes, multiasset_new, multiasset_len, multiasset_insert, multiasset_get, multiasset_keys, multiasset_sub, __wbg_mintassets_free, mintassets_new, mintassets_len, mintassets_insert, mintassets_get, mintassets_keys, __wbg_mint_free, mint_to_bytes, mint_from_bytes, mint_new, mint_len, mint_insert, mint_get, mint_keys, __wbg_networkid_free, networkid_to_bytes, networkid_from_bytes, networkid_testnet, networkid_mainnet, networkid_kind, __wbg_metadatamap_free, metadatamap_to_bytes, metadatamap_from_bytes, metadatamap_new, metadatamap_len, metadatamap_insert, metadatamap_insert_str, metadatamap_insert_i32, metadatamap_get, metadatamap_get_str, metadatamap_get_i32, metadatamap_has, metadatamap_keys, __wbg_metadatalist_free, metadatalist_to_bytes, metadatalist_from_bytes, metadatalist_new, metadatalist_len, metadatalist_get, metadatalist_add, __wbg_transactionmetadatum_free, transactionmetadatum_to_bytes, transactionmetadatum_from_bytes, transactionmetadatum_new_map, transactionmetadatum_new_list, transactionmetadatum_new_int, transactionmetadatum_new_bytes, transactionmetadatum_new_text, transactionmetadatum_kind, transactionmetadatum_as_map, transactionmetadatum_as_list, transactionmetadatum_as_int, transactionmetadatum_as_bytes, transactionmetadatum_as_text, __wbg_transactionmetadatumlabels_free, transactionmetadatumlabels_to_bytes, transactionmetadatumlabels_from_bytes, transactionmetadatumlabels_new, transactionmetadatumlabels_len, transactionmetadatumlabels_get, transactionmetadatumlabels_add, __wbg_generaltransactionmetadata_free, generaltransactionmetadata_to_bytes, generaltransactionmetadata_from_bytes, generaltransactionmetadata_new, generaltransactionmetadata_len, generaltransactionmetadata_insert, generaltransactionmetadata_get, generaltransactionmetadata_keys, __wbg_auxiliarydata_free, auxiliarydata_to_bytes, auxiliarydata_from_bytes, auxiliarydata_new, auxiliarydata_metadata, auxiliarydata_set_metadata, auxiliarydata_native_scripts, auxiliarydata_set_native_scripts, auxiliarydata_plutus_scripts, auxiliarydata_set_plutus_scripts, encode_arbitrary_bytes_as_metadatum, decode_arbitrary_bytes_from_metadatum, encode_json_str_to_metadatum, decode_metadatum_to_json_str, encrypt_with_password, decrypt_with_password, __wbg_linearfee_free, linearfee_constant, linearfee_coefficient, linearfee_new, min_fee, __wbg_transactionunspentoutput_free, transactionunspentoutput_to_bytes, transactionunspentoutput_from_bytes, transactionunspentoutput_new, transactionunspentoutput_input, transactionunspentoutput_output, __wbg_bignum_free, bignum_to_bytes, bignum_from_bytes, bignum_from_str, bignum_to_str, bignum_zero, bignum_checked_mul, bignum_checked_add, bignum_checked_sub, bignum_clamped_sub, bignum_compare, __wbg_value_free, value_to_bytes, value_from_bytes, value_new, value_coin, value_set_coin, value_multiasset, value_set_multiasset, value_checked_add, value_checked_sub, value_clamped_sub, value_compare, __wbg_int_free, int_new, int_new_negative, int_new_i32, int_is_positive, int_as_positive, int_as_negative, int_as_i32, __wbg_bigint_free, bigint_to_bytes, bigint_from_bytes, bigint_as_u64, bigint_from_str, bigint_to_str, make_daedalus_bootstrap_witness, make_icarus_bootstrap_witness, make_vkey_witness, hash_auxiliary_data, hash_transaction, hash_plutus_data, hash_script_data, get_implicit_input, get_deposit, min_ada_required, __wbg_bip32privatekey_free, bip32privatekey_derive, bip32privatekey_from_128_xprv, bip32privatekey_to_128_xprv, bip32privatekey_generate_ed25519_bip32, bip32privatekey_to_raw_key, bip32privatekey_to_public, bip32privatekey_from_bytes, bip32privatekey_as_bytes, bip32privatekey_from_bech32, bip32privatekey_to_bech32, bip32privatekey_from_bip39_entropy, bip32privatekey_chaincode, __wbg_bip32publickey_free, bip32publickey_derive, bip32publickey_to_raw_key, bip32publickey_from_bytes, bip32publickey_as_bytes, bip32publickey_from_bech32, bip32publickey_to_bech32, bip32publickey_chaincode, __wbg_privatekey_free, privatekey_to_public, privatekey_generate_ed25519, privatekey_generate_ed25519extended, privatekey_to_bech32, privatekey_as_bytes, privatekey_from_extended_bytes, privatekey_from_normal_bytes, privatekey_sign, __wbg_publickey_free, publickey_from_bech32, publickey_to_bech32, publickey_as_bytes, publickey_from_bytes, publickey_verify, publickey_hash, __wbg_vkey_free, vkey_to_bytes, vkey_from_bytes, vkey_new, vkey_public_key, __wbg_vkeys_free, vkeys_new, vkeys_len, vkeys_get, vkeys_add, __wbg_vkeywitness_free, vkeywitness_to_bytes, vkeywitness_from_bytes, vkeywitness_new, vkeywitness_vkey, vkeywitness_signature, __wbg_vkeywitnesses_free, vkeywitnesses_new, vkeywitnesses_len, vkeywitnesses_get, vkeywitnesses_add, __wbg_bootstrapwitness_free, bootstrapwitness_to_bytes, bootstrapwitness_from_bytes, bootstrapwitness_vkey, bootstrapwitness_signature, bootstrapwitness_chain_code, bootstrapwitness_attributes, bootstrapwitness_new, __wbg_bootstrapwitnesses_free, bootstrapwitnesses_new, bootstrapwitnesses_len, bootstrapwitnesses_get, bootstrapwitnesses_add, __wbg_publickeys_free, publickeys_new, publickeys_size, publickeys_get, publickeys_add, __wbg_ed25519signature_free, ed25519signature_to_bytes, ed25519signature_to_bech32, ed25519signature_to_hex, ed25519signature_from_bech32, ed25519signature_from_hex, ed25519signature_from_bytes, __wbg_legacydaedalusprivatekey_free, legacydaedalusprivatekey_from_bytes, legacydaedalusprivatekey_as_bytes, legacydaedalusprivatekey_chaincode, __wbg_ed25519keyhash_free, ed25519keyhash_to_bytes, ed25519keyhash_to_bech32, ed25519keyhash_from_bech32, ed25519keyhash_from_bytes, __wbg_scripthash_free, scripthash_to_bytes, scripthash_to_bech32, scripthash_from_bech32, scripthash_from_bytes, __wbg_transactionhash_free, transactionhash_to_bytes, transactionhash_to_bech32, transactionhash_from_bech32, transactionhash_from_bytes, __wbg_genesisdelegatehash_free, genesisdelegatehash_to_bytes, genesisdelegatehash_to_bech32, genesisdelegatehash_from_bech32, genesisdelegatehash_from_bytes, __wbg_genesishash_free, genesishash_to_bytes, genesishash_to_bech32, genesishash_from_bech32, genesishash_from_bytes, __wbg_auxiliarydatahash_free, auxiliarydatahash_to_bytes, auxiliarydatahash_to_bech32, auxiliarydatahash_from_bech32, auxiliarydatahash_from_bytes, __wbg_poolmetadatahash_free, poolmetadatahash_to_bytes, poolmetadatahash_to_bech32, poolmetadatahash_from_bech32, poolmetadatahash_from_bytes, __wbg_vrfkeyhash_free, vrfkeyhash_to_bytes, vrfkeyhash_to_bech32, vrfkeyhash_from_bech32, vrfkeyhash_from_bytes, __wbg_blockhash_free, blockhash_to_bytes, blockhash_to_bech32, blockhash_from_bech32, blockhash_from_bytes, __wbg_datahash_free, datahash_to_bytes, datahash_to_bech32, datahash_from_bech32, datahash_from_bytes, __wbg_scriptdatahash_free, scriptdatahash_to_bytes, scriptdatahash_to_bech32, scriptdatahash_from_bech32, scriptdatahash_from_bytes, __wbg_vrfvkey_free, vrfvkey_to_bytes, vrfvkey_to_bech32, vrfvkey_from_bech32, vrfvkey_from_bytes, __wbg_kesvkey_free, kesvkey_to_bytes, kesvkey_to_bech32, kesvkey_from_bech32, kesvkey_from_bytes, __wbg_kessignature_free, kessignature_to_bytes, kessignature_from_bytes, __wbg_nonce_free, nonce_to_bytes, nonce_from_bytes, nonce_new_identity, nonce_new_from_hash, nonce_get_hash, __wbg_vrfcert_free, vrfcert_to_bytes, vrfcert_from_bytes, vrfcert_output, vrfcert_proof, vrfcert_new, __wbg_transactionbuilder_free, transactionbuilder_add_key_input, transactionbuilder_add_script_input, transactionbuilder_add_bootstrap_input, transactionbuilder_add_input, transactionbuilder_fee_for_input, transactionbuilder_add_output, transactionbuilder_fee_for_output, transactionbuilder_set_fee, transactionbuilder_set_ttl, transactionbuilder_set_validity_start_interval, transactionbuilder_set_certs, transactionbuilder_set_withdrawals, transactionbuilder_set_auxiliary_data, transactionbuilder_new, transactionbuilder_get_explicit_input, transactionbuilder_get_implicit_input, transactionbuilder_get_explicit_output, transactionbuilder_get_deposit, transactionbuilder_get_fee_if_set, transactionbuilder_add_change_if_needed, transactionbuilder_full_size, transactionbuilder_output_sizes, transactionbuilder_build, transactionbuilder_min_fee, __wbg_networkinfo_free, networkinfo_new, networkinfo_network_id, networkinfo_protocol_magic, networkinfo_testnet, networkinfo_mainnet, __wbg_stakecredential_free, stakecredential_from_keyhash, stakecredential_from_scripthash, stakecredential_to_keyhash, stakecredential_to_scripthash, stakecredential_kind, stakecredential_to_bytes, stakecredential_from_bytes, __wbg_byronaddress_free, byronaddress_to_base58, byronaddress_to_bytes, byronaddress_from_bytes, byronaddress_byron_protocol_magic, byronaddress_attributes, byronaddress_network_id, byronaddress_from_base58, byronaddress_icarus_from_key, byronaddress_is_valid, byronaddress_to_address, byronaddress_from_address, __wbg_address_free, address_from_bytes, address_to_bytes, address_to_bech32, address_from_bech32, address_network_id, __wbg_baseaddress_free, baseaddress_new, baseaddress_payment_cred, baseaddress_stake_cred, baseaddress_to_address, baseaddress_from_address, __wbg_enterpriseaddress_free, enterpriseaddress_new, enterpriseaddress_payment_cred, enterpriseaddress_to_address, enterpriseaddress_from_address, __wbg_rewardaddress_free, rewardaddress_new, rewardaddress_payment_cred, rewardaddress_to_address, rewardaddress_from_address, __wbg_pointer_free, pointer_new, pointer_slot, pointer_tx_index, pointer_cert_index, __wbg_pointeraddress_free, pointeraddress_new, pointeraddress_payment_cred, pointeraddress_stake_pointer, pointeraddress_to_address, pointeraddress_from_address, __wbg_plutusscript_free, plutusscript_to_bytes, plutusscript_from_bytes, plutusscript_new, plutusscript_bytes, __wbg_plutusscripts_free, plutusscripts_to_bytes, plutusscripts_from_bytes, plutusscripts_new, plutusscripts_len, plutusscripts_get, plutusscripts_add, __wbg_constrplutusdata_free, constrplutusdata_to_bytes, constrplutusdata_from_bytes, constrplutusdata_tag, constrplutusdata_data, constrplutusdata_new, __wbg_costmodel_free, costmodel_to_bytes, costmodel_from_bytes, costmodel_new, costmodel_set, costmodel_get, __wbg_costmdls_free, costmdls_to_bytes, costmdls_from_bytes, costmdls_new, costmdls_len, costmdls_insert, costmdls_get, costmdls_keys, __wbg_exunitprices_free, exunitprices_to_bytes, exunitprices_from_bytes, exunitprices_mem_price, exunitprices_step_price, exunitprices_new, __wbg_exunits_free, exunits_to_bytes, exunits_from_bytes, exunits_mem, exunits_steps, exunits_new, __wbg_language_free, language_to_bytes, language_from_bytes, language_new_plutus_v1, language_kind, __wbg_languages_free, languages_new, languages_len, languages_get, languages_add, __wbg_plutusmap_free, plutusmap_to_bytes, plutusmap_from_bytes, plutusmap_new, plutusmap_len, plutusmap_insert, plutusmap_get, plutusmap_keys, __wbg_plutusdata_free, plutusdata_to_bytes, plutusdata_from_bytes, plutusdata_new_constr_plutus_data, plutusdata_new_map, plutusdata_new_list, plutusdata_new_integer, plutusdata_new_bytes, plutusdata_kind, plutusdata_as_constr_plutus_data, plutusdata_as_map, plutusdata_as_list, plutusdata_as_integer, plutusdata_as_bytes, __wbg_plutuslist_free, plutuslist_to_bytes, plutuslist_from_bytes, plutuslist_new, plutuslist_len, plutuslist_get, plutuslist_add, __wbg_redeemer_free, redeemer_to_bytes, redeemer_from_bytes, redeemer_tag, redeemer_index, redeemer_data, redeemer_ex_units, redeemer_new, __wbg_redeemertag_free, redeemertag_to_bytes, redeemertag_from_bytes, redeemertag_new_spend, redeemertag_new_mint, redeemertag_new_cert, redeemertag_new_reward, redeemertag_kind, __wbg_redeemers_free, redeemers_to_bytes, redeemers_from_bytes, redeemers_new, redeemers_len, redeemers_get, redeemers_add, __wbg_strings_free, strings_new, strings_len, strings_get, strings_add, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_add_to_stack_pointer, __wbindgen_free;
var init_cardano_serialization_lib_bg2 = __esm({
  async "wasm-module:/home/gridlocker/dev/side/metaitems/assets/node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib_bg.wasm"() {
    init_cardano_serialization_lib_bg();
    await init_cardano_serialization_lib_bg3();
    imports = {
      ["./cardano_serialization_lib_bg.js"]: {
        __wbindgen_object_drop_ref,
        __wbindgen_string_new,
        __wbg_new_3a746f2619705add,
        __wbg_call_f54d3a6dadb199ca,
        __wbindgen_jsval_eq,
        __wbg_self_ac379e780a0d8b94,
        __wbg_crypto_1e4302b85d4f64a2,
        __wbindgen_is_undefined,
        __wbg_getRandomValues_1b4ba144162a5c9e,
        __wbg_require_6461b1e9a0d7c34a,
        __wbg_randomFillSync_1b52c8482374c55b,
        __wbg_getRandomValues_1ef11e888e5228e9,
        __wbindgen_string_get,
        __wbindgen_debug_string,
        __wbindgen_throw,
        __wbindgen_rethrow
      }
    };
    ({ instance, module } = await loadWasm(cardano_serialization_lib_bg_default, imports));
    memory = instance.exports.memory;
    __wbg_unitinterval_free = instance.exports.__wbg_unitinterval_free;
    unitinterval_to_bytes = instance.exports.unitinterval_to_bytes;
    unitinterval_from_bytes = instance.exports.unitinterval_from_bytes;
    unitinterval_numerator = instance.exports.unitinterval_numerator;
    unitinterval_denominator = instance.exports.unitinterval_denominator;
    unitinterval_new = instance.exports.unitinterval_new;
    __wbg_transaction_free = instance.exports.__wbg_transaction_free;
    transaction_to_bytes = instance.exports.transaction_to_bytes;
    transaction_from_bytes = instance.exports.transaction_from_bytes;
    transaction_body = instance.exports.transaction_body;
    transaction_witness_set = instance.exports.transaction_witness_set;
    transaction_is_valid = instance.exports.transaction_is_valid;
    transaction_auxiliary_data = instance.exports.transaction_auxiliary_data;
    transaction_set_is_valid = instance.exports.transaction_set_is_valid;
    transaction_new = instance.exports.transaction_new;
    __wbg_transactioninputs_free = instance.exports.__wbg_transactioninputs_free;
    transactioninputs_to_bytes = instance.exports.transactioninputs_to_bytes;
    transactioninputs_from_bytes = instance.exports.transactioninputs_from_bytes;
    transactioninputs_new = instance.exports.transactioninputs_new;
    transactioninputs_len = instance.exports.transactioninputs_len;
    transactioninputs_get = instance.exports.transactioninputs_get;
    transactioninputs_add = instance.exports.transactioninputs_add;
    __wbg_transactionoutputs_free = instance.exports.__wbg_transactionoutputs_free;
    transactionoutputs_to_bytes = instance.exports.transactionoutputs_to_bytes;
    transactionoutputs_from_bytes = instance.exports.transactionoutputs_from_bytes;
    transactionoutputs_new = instance.exports.transactionoutputs_new;
    transactionoutputs_len = instance.exports.transactionoutputs_len;
    transactionoutputs_get = instance.exports.transactionoutputs_get;
    transactionoutputs_add = instance.exports.transactionoutputs_add;
    __wbg_certificates_free = instance.exports.__wbg_certificates_free;
    certificates_to_bytes = instance.exports.certificates_to_bytes;
    certificates_from_bytes = instance.exports.certificates_from_bytes;
    certificates_new = instance.exports.certificates_new;
    certificates_len = instance.exports.certificates_len;
    certificates_get = instance.exports.certificates_get;
    certificates_add = instance.exports.certificates_add;
    __wbg_transactionbody_free = instance.exports.__wbg_transactionbody_free;
    transactionbody_to_bytes = instance.exports.transactionbody_to_bytes;
    transactionbody_from_bytes = instance.exports.transactionbody_from_bytes;
    transactionbody_inputs = instance.exports.transactionbody_inputs;
    transactionbody_outputs = instance.exports.transactionbody_outputs;
    transactionbody_fee = instance.exports.transactionbody_fee;
    transactionbody_ttl = instance.exports.transactionbody_ttl;
    transactionbody_set_certs = instance.exports.transactionbody_set_certs;
    transactionbody_certs = instance.exports.transactionbody_certs;
    transactionbody_set_withdrawals = instance.exports.transactionbody_set_withdrawals;
    transactionbody_withdrawals = instance.exports.transactionbody_withdrawals;
    transactionbody_set_update = instance.exports.transactionbody_set_update;
    transactionbody_update = instance.exports.transactionbody_update;
    transactionbody_set_auxiliary_data_hash = instance.exports.transactionbody_set_auxiliary_data_hash;
    transactionbody_auxiliary_data_hash = instance.exports.transactionbody_auxiliary_data_hash;
    transactionbody_set_validity_start_interval = instance.exports.transactionbody_set_validity_start_interval;
    transactionbody_validity_start_interval = instance.exports.transactionbody_validity_start_interval;
    transactionbody_set_mint = instance.exports.transactionbody_set_mint;
    transactionbody_multiassets = instance.exports.transactionbody_multiassets;
    transactionbody_set_script_data_hash = instance.exports.transactionbody_set_script_data_hash;
    transactionbody_script_data_hash = instance.exports.transactionbody_script_data_hash;
    transactionbody_set_collateral = instance.exports.transactionbody_set_collateral;
    transactionbody_collateral = instance.exports.transactionbody_collateral;
    transactionbody_set_required_signers = instance.exports.transactionbody_set_required_signers;
    transactionbody_required_signers = instance.exports.transactionbody_required_signers;
    transactionbody_set_network_id = instance.exports.transactionbody_set_network_id;
    transactionbody_network_id = instance.exports.transactionbody_network_id;
    transactionbody_new = instance.exports.transactionbody_new;
    __wbg_transactioninput_free = instance.exports.__wbg_transactioninput_free;
    transactioninput_to_bytes = instance.exports.transactioninput_to_bytes;
    transactioninput_from_bytes = instance.exports.transactioninput_from_bytes;
    transactioninput_transaction_id = instance.exports.transactioninput_transaction_id;
    transactioninput_index = instance.exports.transactioninput_index;
    transactioninput_new = instance.exports.transactioninput_new;
    __wbg_transactionoutput_free = instance.exports.__wbg_transactionoutput_free;
    transactionoutput_to_bytes = instance.exports.transactionoutput_to_bytes;
    transactionoutput_from_bytes = instance.exports.transactionoutput_from_bytes;
    transactionoutput_address = instance.exports.transactionoutput_address;
    transactionoutput_amount = instance.exports.transactionoutput_amount;
    transactionoutput_data_hash = instance.exports.transactionoutput_data_hash;
    transactionoutput_set_data_hash = instance.exports.transactionoutput_set_data_hash;
    transactionoutput_new = instance.exports.transactionoutput_new;
    __wbg_stakeregistration_free = instance.exports.__wbg_stakeregistration_free;
    stakeregistration_to_bytes = instance.exports.stakeregistration_to_bytes;
    stakeregistration_from_bytes = instance.exports.stakeregistration_from_bytes;
    stakeregistration_stake_credential = instance.exports.stakeregistration_stake_credential;
    stakeregistration_new = instance.exports.stakeregistration_new;
    __wbg_stakederegistration_free = instance.exports.__wbg_stakederegistration_free;
    stakederegistration_to_bytes = instance.exports.stakederegistration_to_bytes;
    stakederegistration_from_bytes = instance.exports.stakederegistration_from_bytes;
    stakederegistration_stake_credential = instance.exports.stakederegistration_stake_credential;
    stakederegistration_new = instance.exports.stakederegistration_new;
    __wbg_stakedelegation_free = instance.exports.__wbg_stakedelegation_free;
    stakedelegation_to_bytes = instance.exports.stakedelegation_to_bytes;
    stakedelegation_from_bytes = instance.exports.stakedelegation_from_bytes;
    stakedelegation_stake_credential = instance.exports.stakedelegation_stake_credential;
    stakedelegation_pool_keyhash = instance.exports.stakedelegation_pool_keyhash;
    stakedelegation_new = instance.exports.stakedelegation_new;
    __wbg_ed25519keyhashes_free = instance.exports.__wbg_ed25519keyhashes_free;
    ed25519keyhashes_to_bytes = instance.exports.ed25519keyhashes_to_bytes;
    ed25519keyhashes_from_bytes = instance.exports.ed25519keyhashes_from_bytes;
    ed25519keyhashes_new = instance.exports.ed25519keyhashes_new;
    ed25519keyhashes_len = instance.exports.ed25519keyhashes_len;
    ed25519keyhashes_get = instance.exports.ed25519keyhashes_get;
    ed25519keyhashes_add = instance.exports.ed25519keyhashes_add;
    __wbg_relays_free = instance.exports.__wbg_relays_free;
    relays_to_bytes = instance.exports.relays_to_bytes;
    relays_from_bytes = instance.exports.relays_from_bytes;
    relays_new = instance.exports.relays_new;
    relays_len = instance.exports.relays_len;
    relays_get = instance.exports.relays_get;
    relays_add = instance.exports.relays_add;
    __wbg_poolparams_free = instance.exports.__wbg_poolparams_free;
    poolparams_to_bytes = instance.exports.poolparams_to_bytes;
    poolparams_from_bytes = instance.exports.poolparams_from_bytes;
    poolparams_operator = instance.exports.poolparams_operator;
    poolparams_vrf_keyhash = instance.exports.poolparams_vrf_keyhash;
    poolparams_pledge = instance.exports.poolparams_pledge;
    poolparams_cost = instance.exports.poolparams_cost;
    poolparams_margin = instance.exports.poolparams_margin;
    poolparams_reward_account = instance.exports.poolparams_reward_account;
    poolparams_pool_owners = instance.exports.poolparams_pool_owners;
    poolparams_relays = instance.exports.poolparams_relays;
    poolparams_pool_metadata = instance.exports.poolparams_pool_metadata;
    poolparams_new = instance.exports.poolparams_new;
    __wbg_poolregistration_free = instance.exports.__wbg_poolregistration_free;
    poolregistration_to_bytes = instance.exports.poolregistration_to_bytes;
    poolregistration_from_bytes = instance.exports.poolregistration_from_bytes;
    poolregistration_pool_params = instance.exports.poolregistration_pool_params;
    poolregistration_new = instance.exports.poolregistration_new;
    __wbg_poolretirement_free = instance.exports.__wbg_poolretirement_free;
    poolretirement_to_bytes = instance.exports.poolretirement_to_bytes;
    poolretirement_from_bytes = instance.exports.poolretirement_from_bytes;
    poolretirement_pool_keyhash = instance.exports.poolretirement_pool_keyhash;
    poolretirement_epoch = instance.exports.poolretirement_epoch;
    poolretirement_new = instance.exports.poolretirement_new;
    __wbg_genesiskeydelegation_free = instance.exports.__wbg_genesiskeydelegation_free;
    genesiskeydelegation_to_bytes = instance.exports.genesiskeydelegation_to_bytes;
    genesiskeydelegation_from_bytes = instance.exports.genesiskeydelegation_from_bytes;
    genesiskeydelegation_genesishash = instance.exports.genesiskeydelegation_genesishash;
    genesiskeydelegation_genesis_delegate_hash = instance.exports.genesiskeydelegation_genesis_delegate_hash;
    genesiskeydelegation_vrf_keyhash = instance.exports.genesiskeydelegation_vrf_keyhash;
    genesiskeydelegation_new = instance.exports.genesiskeydelegation_new;
    __wbg_moveinstantaneousrewardscert_free = instance.exports.__wbg_moveinstantaneousrewardscert_free;
    moveinstantaneousrewardscert_to_bytes = instance.exports.moveinstantaneousrewardscert_to_bytes;
    moveinstantaneousrewardscert_from_bytes = instance.exports.moveinstantaneousrewardscert_from_bytes;
    moveinstantaneousrewardscert_move_instantaneous_reward = instance.exports.moveinstantaneousrewardscert_move_instantaneous_reward;
    moveinstantaneousrewardscert_new = instance.exports.moveinstantaneousrewardscert_new;
    __wbg_certificate_free = instance.exports.__wbg_certificate_free;
    certificate_to_bytes = instance.exports.certificate_to_bytes;
    certificate_from_bytes = instance.exports.certificate_from_bytes;
    certificate_new_stake_registration = instance.exports.certificate_new_stake_registration;
    certificate_new_stake_deregistration = instance.exports.certificate_new_stake_deregistration;
    certificate_new_stake_delegation = instance.exports.certificate_new_stake_delegation;
    certificate_new_pool_registration = instance.exports.certificate_new_pool_registration;
    certificate_new_pool_retirement = instance.exports.certificate_new_pool_retirement;
    certificate_new_genesis_key_delegation = instance.exports.certificate_new_genesis_key_delegation;
    certificate_new_move_instantaneous_rewards_cert = instance.exports.certificate_new_move_instantaneous_rewards_cert;
    certificate_kind = instance.exports.certificate_kind;
    certificate_as_stake_registration = instance.exports.certificate_as_stake_registration;
    certificate_as_stake_deregistration = instance.exports.certificate_as_stake_deregistration;
    certificate_as_stake_delegation = instance.exports.certificate_as_stake_delegation;
    certificate_as_pool_registration = instance.exports.certificate_as_pool_registration;
    certificate_as_pool_retirement = instance.exports.certificate_as_pool_retirement;
    certificate_as_genesis_key_delegation = instance.exports.certificate_as_genesis_key_delegation;
    certificate_as_move_instantaneous_rewards_cert = instance.exports.certificate_as_move_instantaneous_rewards_cert;
    __wbg_mirtostakecredentials_free = instance.exports.__wbg_mirtostakecredentials_free;
    mirtostakecredentials_to_bytes = instance.exports.mirtostakecredentials_to_bytes;
    mirtostakecredentials_from_bytes = instance.exports.mirtostakecredentials_from_bytes;
    mirtostakecredentials_new = instance.exports.mirtostakecredentials_new;
    mirtostakecredentials_len = instance.exports.mirtostakecredentials_len;
    mirtostakecredentials_insert = instance.exports.mirtostakecredentials_insert;
    mirtostakecredentials_get = instance.exports.mirtostakecredentials_get;
    mirtostakecredentials_keys = instance.exports.mirtostakecredentials_keys;
    __wbg_moveinstantaneousreward_free = instance.exports.__wbg_moveinstantaneousreward_free;
    moveinstantaneousreward_to_bytes = instance.exports.moveinstantaneousreward_to_bytes;
    moveinstantaneousreward_from_bytes = instance.exports.moveinstantaneousreward_from_bytes;
    moveinstantaneousreward_new_to_other_pot = instance.exports.moveinstantaneousreward_new_to_other_pot;
    moveinstantaneousreward_new_to_stake_creds = instance.exports.moveinstantaneousreward_new_to_stake_creds;
    moveinstantaneousreward_pot = instance.exports.moveinstantaneousreward_pot;
    moveinstantaneousreward_kind = instance.exports.moveinstantaneousreward_kind;
    moveinstantaneousreward_as_to_other_pot = instance.exports.moveinstantaneousreward_as_to_other_pot;
    moveinstantaneousreward_as_to_stake_creds = instance.exports.moveinstantaneousreward_as_to_stake_creds;
    __wbg_ipv4_free = instance.exports.__wbg_ipv4_free;
    ipv4_to_bytes = instance.exports.ipv4_to_bytes;
    ipv4_from_bytes = instance.exports.ipv4_from_bytes;
    ipv4_new = instance.exports.ipv4_new;
    ipv4_ip = instance.exports.ipv4_ip;
    __wbg_ipv6_free = instance.exports.__wbg_ipv6_free;
    ipv6_to_bytes = instance.exports.ipv6_to_bytes;
    ipv6_from_bytes = instance.exports.ipv6_from_bytes;
    ipv6_new = instance.exports.ipv6_new;
    ipv6_ip = instance.exports.ipv6_ip;
    __wbg_url_free = instance.exports.__wbg_url_free;
    url_to_bytes = instance.exports.url_to_bytes;
    url_from_bytes = instance.exports.url_from_bytes;
    url_new = instance.exports.url_new;
    url_url = instance.exports.url_url;
    __wbg_dnsrecordaoraaaa_free = instance.exports.__wbg_dnsrecordaoraaaa_free;
    dnsrecordaoraaaa_to_bytes = instance.exports.dnsrecordaoraaaa_to_bytes;
    dnsrecordaoraaaa_from_bytes = instance.exports.dnsrecordaoraaaa_from_bytes;
    dnsrecordaoraaaa_new = instance.exports.dnsrecordaoraaaa_new;
    dnsrecordaoraaaa_record = instance.exports.dnsrecordaoraaaa_record;
    __wbg_dnsrecordsrv_free = instance.exports.__wbg_dnsrecordsrv_free;
    dnsrecordsrv_to_bytes = instance.exports.dnsrecordsrv_to_bytes;
    dnsrecordsrv_from_bytes = instance.exports.dnsrecordsrv_from_bytes;
    dnsrecordsrv_new = instance.exports.dnsrecordsrv_new;
    dnsrecordsrv_record = instance.exports.dnsrecordsrv_record;
    __wbg_singlehostaddr_free = instance.exports.__wbg_singlehostaddr_free;
    singlehostaddr_to_bytes = instance.exports.singlehostaddr_to_bytes;
    singlehostaddr_from_bytes = instance.exports.singlehostaddr_from_bytes;
    singlehostaddr_port = instance.exports.singlehostaddr_port;
    singlehostaddr_ipv4 = instance.exports.singlehostaddr_ipv4;
    singlehostaddr_ipv6 = instance.exports.singlehostaddr_ipv6;
    singlehostaddr_new = instance.exports.singlehostaddr_new;
    __wbg_singlehostname_free = instance.exports.__wbg_singlehostname_free;
    singlehostname_to_bytes = instance.exports.singlehostname_to_bytes;
    singlehostname_from_bytes = instance.exports.singlehostname_from_bytes;
    singlehostname_port = instance.exports.singlehostname_port;
    singlehostname_dns_name = instance.exports.singlehostname_dns_name;
    singlehostname_new = instance.exports.singlehostname_new;
    __wbg_multihostname_free = instance.exports.__wbg_multihostname_free;
    multihostname_to_bytes = instance.exports.multihostname_to_bytes;
    multihostname_from_bytes = instance.exports.multihostname_from_bytes;
    multihostname_dns_name = instance.exports.multihostname_dns_name;
    multihostname_new = instance.exports.multihostname_new;
    __wbg_relay_free = instance.exports.__wbg_relay_free;
    relay_to_bytes = instance.exports.relay_to_bytes;
    relay_from_bytes = instance.exports.relay_from_bytes;
    relay_new_single_host_addr = instance.exports.relay_new_single_host_addr;
    relay_new_single_host_name = instance.exports.relay_new_single_host_name;
    relay_new_multi_host_name = instance.exports.relay_new_multi_host_name;
    relay_kind = instance.exports.relay_kind;
    relay_as_single_host_addr = instance.exports.relay_as_single_host_addr;
    relay_as_single_host_name = instance.exports.relay_as_single_host_name;
    relay_as_multi_host_name = instance.exports.relay_as_multi_host_name;
    __wbg_poolmetadata_free = instance.exports.__wbg_poolmetadata_free;
    poolmetadata_to_bytes = instance.exports.poolmetadata_to_bytes;
    poolmetadata_from_bytes = instance.exports.poolmetadata_from_bytes;
    poolmetadata_url = instance.exports.poolmetadata_url;
    poolmetadata_pool_metadata_hash = instance.exports.poolmetadata_pool_metadata_hash;
    poolmetadata_new = instance.exports.poolmetadata_new;
    __wbg_stakecredentials_free = instance.exports.__wbg_stakecredentials_free;
    stakecredentials_to_bytes = instance.exports.stakecredentials_to_bytes;
    stakecredentials_from_bytes = instance.exports.stakecredentials_from_bytes;
    stakecredentials_new = instance.exports.stakecredentials_new;
    stakecredentials_len = instance.exports.stakecredentials_len;
    stakecredentials_get = instance.exports.stakecredentials_get;
    stakecredentials_add = instance.exports.stakecredentials_add;
    __wbg_rewardaddresses_free = instance.exports.__wbg_rewardaddresses_free;
    rewardaddresses_to_bytes = instance.exports.rewardaddresses_to_bytes;
    rewardaddresses_from_bytes = instance.exports.rewardaddresses_from_bytes;
    rewardaddresses_new = instance.exports.rewardaddresses_new;
    rewardaddresses_len = instance.exports.rewardaddresses_len;
    rewardaddresses_get = instance.exports.rewardaddresses_get;
    rewardaddresses_add = instance.exports.rewardaddresses_add;
    __wbg_withdrawals_free = instance.exports.__wbg_withdrawals_free;
    withdrawals_to_bytes = instance.exports.withdrawals_to_bytes;
    withdrawals_from_bytes = instance.exports.withdrawals_from_bytes;
    withdrawals_new = instance.exports.withdrawals_new;
    withdrawals_len = instance.exports.withdrawals_len;
    withdrawals_insert = instance.exports.withdrawals_insert;
    withdrawals_get = instance.exports.withdrawals_get;
    withdrawals_keys = instance.exports.withdrawals_keys;
    __wbg_transactionwitnessset_free = instance.exports.__wbg_transactionwitnessset_free;
    transactionwitnessset_to_bytes = instance.exports.transactionwitnessset_to_bytes;
    transactionwitnessset_from_bytes = instance.exports.transactionwitnessset_from_bytes;
    transactionwitnessset_set_vkeys = instance.exports.transactionwitnessset_set_vkeys;
    transactionwitnessset_vkeys = instance.exports.transactionwitnessset_vkeys;
    transactionwitnessset_set_native_scripts = instance.exports.transactionwitnessset_set_native_scripts;
    transactionwitnessset_native_scripts = instance.exports.transactionwitnessset_native_scripts;
    transactionwitnessset_set_bootstraps = instance.exports.transactionwitnessset_set_bootstraps;
    transactionwitnessset_bootstraps = instance.exports.transactionwitnessset_bootstraps;
    transactionwitnessset_set_plutus_scripts = instance.exports.transactionwitnessset_set_plutus_scripts;
    transactionwitnessset_plutus_scripts = instance.exports.transactionwitnessset_plutus_scripts;
    transactionwitnessset_set_plutus_data = instance.exports.transactionwitnessset_set_plutus_data;
    transactionwitnessset_plutus_data = instance.exports.transactionwitnessset_plutus_data;
    transactionwitnessset_set_redeemers = instance.exports.transactionwitnessset_set_redeemers;
    transactionwitnessset_redeemers = instance.exports.transactionwitnessset_redeemers;
    transactionwitnessset_new = instance.exports.transactionwitnessset_new;
    __wbg_scriptpubkey_free = instance.exports.__wbg_scriptpubkey_free;
    scriptpubkey_to_bytes = instance.exports.scriptpubkey_to_bytes;
    scriptpubkey_from_bytes = instance.exports.scriptpubkey_from_bytes;
    scriptpubkey_addr_keyhash = instance.exports.scriptpubkey_addr_keyhash;
    scriptpubkey_new = instance.exports.scriptpubkey_new;
    __wbg_scriptall_free = instance.exports.__wbg_scriptall_free;
    scriptall_to_bytes = instance.exports.scriptall_to_bytes;
    scriptall_from_bytes = instance.exports.scriptall_from_bytes;
    scriptall_native_scripts = instance.exports.scriptall_native_scripts;
    scriptall_new = instance.exports.scriptall_new;
    __wbg_scriptany_free = instance.exports.__wbg_scriptany_free;
    scriptany_to_bytes = instance.exports.scriptany_to_bytes;
    scriptany_from_bytes = instance.exports.scriptany_from_bytes;
    scriptany_native_scripts = instance.exports.scriptany_native_scripts;
    scriptany_new = instance.exports.scriptany_new;
    __wbg_scriptnofk_free = instance.exports.__wbg_scriptnofk_free;
    scriptnofk_to_bytes = instance.exports.scriptnofk_to_bytes;
    scriptnofk_from_bytes = instance.exports.scriptnofk_from_bytes;
    scriptnofk_n = instance.exports.scriptnofk_n;
    scriptnofk_native_scripts = instance.exports.scriptnofk_native_scripts;
    scriptnofk_new = instance.exports.scriptnofk_new;
    __wbg_timelockstart_free = instance.exports.__wbg_timelockstart_free;
    timelockstart_to_bytes = instance.exports.timelockstart_to_bytes;
    timelockstart_from_bytes = instance.exports.timelockstart_from_bytes;
    timelockstart_slot = instance.exports.timelockstart_slot;
    timelockstart_new = instance.exports.timelockstart_new;
    __wbg_timelockexpiry_free = instance.exports.__wbg_timelockexpiry_free;
    timelockexpiry_to_bytes = instance.exports.timelockexpiry_to_bytes;
    timelockexpiry_from_bytes = instance.exports.timelockexpiry_from_bytes;
    timelockexpiry_slot = instance.exports.timelockexpiry_slot;
    timelockexpiry_new = instance.exports.timelockexpiry_new;
    __wbg_nativescript_free = instance.exports.__wbg_nativescript_free;
    nativescript_to_bytes = instance.exports.nativescript_to_bytes;
    nativescript_from_bytes = instance.exports.nativescript_from_bytes;
    nativescript_hash = instance.exports.nativescript_hash;
    nativescript_new_script_pubkey = instance.exports.nativescript_new_script_pubkey;
    nativescript_new_script_all = instance.exports.nativescript_new_script_all;
    nativescript_new_script_any = instance.exports.nativescript_new_script_any;
    nativescript_new_script_n_of_k = instance.exports.nativescript_new_script_n_of_k;
    nativescript_new_timelock_start = instance.exports.nativescript_new_timelock_start;
    nativescript_new_timelock_expiry = instance.exports.nativescript_new_timelock_expiry;
    nativescript_kind = instance.exports.nativescript_kind;
    nativescript_as_script_pubkey = instance.exports.nativescript_as_script_pubkey;
    nativescript_as_script_all = instance.exports.nativescript_as_script_all;
    nativescript_as_script_any = instance.exports.nativescript_as_script_any;
    nativescript_as_script_n_of_k = instance.exports.nativescript_as_script_n_of_k;
    nativescript_as_timelock_start = instance.exports.nativescript_as_timelock_start;
    nativescript_as_timelock_expiry = instance.exports.nativescript_as_timelock_expiry;
    __wbg_nativescripts_free = instance.exports.__wbg_nativescripts_free;
    nativescripts_new = instance.exports.nativescripts_new;
    nativescripts_len = instance.exports.nativescripts_len;
    nativescripts_get = instance.exports.nativescripts_get;
    nativescripts_add = instance.exports.nativescripts_add;
    __wbg_update_free = instance.exports.__wbg_update_free;
    update_to_bytes = instance.exports.update_to_bytes;
    update_from_bytes = instance.exports.update_from_bytes;
    update_proposed_protocol_parameter_updates = instance.exports.update_proposed_protocol_parameter_updates;
    update_epoch = instance.exports.update_epoch;
    update_new = instance.exports.update_new;
    __wbg_genesishashes_free = instance.exports.__wbg_genesishashes_free;
    genesishashes_to_bytes = instance.exports.genesishashes_to_bytes;
    genesishashes_from_bytes = instance.exports.genesishashes_from_bytes;
    genesishashes_new = instance.exports.genesishashes_new;
    genesishashes_len = instance.exports.genesishashes_len;
    genesishashes_get = instance.exports.genesishashes_get;
    genesishashes_add = instance.exports.genesishashes_add;
    __wbg_scripthashes_free = instance.exports.__wbg_scripthashes_free;
    scripthashes_to_bytes = instance.exports.scripthashes_to_bytes;
    scripthashes_from_bytes = instance.exports.scripthashes_from_bytes;
    scripthashes_new = instance.exports.scripthashes_new;
    scripthashes_len = instance.exports.scripthashes_len;
    scripthashes_get = instance.exports.scripthashes_get;
    scripthashes_add = instance.exports.scripthashes_add;
    __wbg_proposedprotocolparameterupdates_free = instance.exports.__wbg_proposedprotocolparameterupdates_free;
    proposedprotocolparameterupdates_to_bytes = instance.exports.proposedprotocolparameterupdates_to_bytes;
    proposedprotocolparameterupdates_from_bytes = instance.exports.proposedprotocolparameterupdates_from_bytes;
    proposedprotocolparameterupdates_new = instance.exports.proposedprotocolparameterupdates_new;
    proposedprotocolparameterupdates_len = instance.exports.proposedprotocolparameterupdates_len;
    proposedprotocolparameterupdates_insert = instance.exports.proposedprotocolparameterupdates_insert;
    proposedprotocolparameterupdates_get = instance.exports.proposedprotocolparameterupdates_get;
    proposedprotocolparameterupdates_keys = instance.exports.proposedprotocolparameterupdates_keys;
    __wbg_protocolversion_free = instance.exports.__wbg_protocolversion_free;
    protocolversion_to_bytes = instance.exports.protocolversion_to_bytes;
    protocolversion_from_bytes = instance.exports.protocolversion_from_bytes;
    protocolversion_major = instance.exports.protocolversion_major;
    protocolversion_minor = instance.exports.protocolversion_minor;
    protocolversion_new = instance.exports.protocolversion_new;
    __wbg_protocolversions_free = instance.exports.__wbg_protocolversions_free;
    protocolversions_to_bytes = instance.exports.protocolversions_to_bytes;
    protocolversions_from_bytes = instance.exports.protocolversions_from_bytes;
    protocolversions_new = instance.exports.protocolversions_new;
    protocolversions_len = instance.exports.protocolversions_len;
    protocolversions_get = instance.exports.protocolversions_get;
    protocolversions_add = instance.exports.protocolversions_add;
    __wbg_protocolparamupdate_free = instance.exports.__wbg_protocolparamupdate_free;
    protocolparamupdate_to_bytes = instance.exports.protocolparamupdate_to_bytes;
    protocolparamupdate_from_bytes = instance.exports.protocolparamupdate_from_bytes;
    protocolparamupdate_set_minfee_a = instance.exports.protocolparamupdate_set_minfee_a;
    protocolparamupdate_minfee_a = instance.exports.protocolparamupdate_minfee_a;
    protocolparamupdate_set_minfee_b = instance.exports.protocolparamupdate_set_minfee_b;
    protocolparamupdate_minfee_b = instance.exports.protocolparamupdate_minfee_b;
    protocolparamupdate_set_max_block_body_size = instance.exports.protocolparamupdate_set_max_block_body_size;
    protocolparamupdate_max_block_body_size = instance.exports.protocolparamupdate_max_block_body_size;
    protocolparamupdate_set_max_tx_size = instance.exports.protocolparamupdate_set_max_tx_size;
    protocolparamupdate_max_tx_size = instance.exports.protocolparamupdate_max_tx_size;
    protocolparamupdate_set_max_block_header_size = instance.exports.protocolparamupdate_set_max_block_header_size;
    protocolparamupdate_max_block_header_size = instance.exports.protocolparamupdate_max_block_header_size;
    protocolparamupdate_set_key_deposit = instance.exports.protocolparamupdate_set_key_deposit;
    protocolparamupdate_key_deposit = instance.exports.protocolparamupdate_key_deposit;
    protocolparamupdate_set_pool_deposit = instance.exports.protocolparamupdate_set_pool_deposit;
    protocolparamupdate_pool_deposit = instance.exports.protocolparamupdate_pool_deposit;
    protocolparamupdate_set_max_epoch = instance.exports.protocolparamupdate_set_max_epoch;
    protocolparamupdate_max_epoch = instance.exports.protocolparamupdate_max_epoch;
    protocolparamupdate_set_n_opt = instance.exports.protocolparamupdate_set_n_opt;
    protocolparamupdate_n_opt = instance.exports.protocolparamupdate_n_opt;
    protocolparamupdate_set_pool_pledge_influence = instance.exports.protocolparamupdate_set_pool_pledge_influence;
    protocolparamupdate_pool_pledge_influence = instance.exports.protocolparamupdate_pool_pledge_influence;
    protocolparamupdate_set_expansion_rate = instance.exports.protocolparamupdate_set_expansion_rate;
    protocolparamupdate_expansion_rate = instance.exports.protocolparamupdate_expansion_rate;
    protocolparamupdate_set_treasury_growth_rate = instance.exports.protocolparamupdate_set_treasury_growth_rate;
    protocolparamupdate_treasury_growth_rate = instance.exports.protocolparamupdate_treasury_growth_rate;
    protocolparamupdate_set_d = instance.exports.protocolparamupdate_set_d;
    protocolparamupdate_d = instance.exports.protocolparamupdate_d;
    protocolparamupdate_set_extra_entropy = instance.exports.protocolparamupdate_set_extra_entropy;
    protocolparamupdate_extra_entropy = instance.exports.protocolparamupdate_extra_entropy;
    protocolparamupdate_set_protocol_version = instance.exports.protocolparamupdate_set_protocol_version;
    protocolparamupdate_protocol_version = instance.exports.protocolparamupdate_protocol_version;
    protocolparamupdate_set_min_pool_cost = instance.exports.protocolparamupdate_set_min_pool_cost;
    protocolparamupdate_min_pool_cost = instance.exports.protocolparamupdate_min_pool_cost;
    protocolparamupdate_set_ada_per_utxo_byte = instance.exports.protocolparamupdate_set_ada_per_utxo_byte;
    protocolparamupdate_ada_per_utxo_byte = instance.exports.protocolparamupdate_ada_per_utxo_byte;
    protocolparamupdate_set_cost_models = instance.exports.protocolparamupdate_set_cost_models;
    protocolparamupdate_cost_models = instance.exports.protocolparamupdate_cost_models;
    protocolparamupdate_set_execution_costs = instance.exports.protocolparamupdate_set_execution_costs;
    protocolparamupdate_execution_costs = instance.exports.protocolparamupdate_execution_costs;
    protocolparamupdate_set_max_tx_ex_units = instance.exports.protocolparamupdate_set_max_tx_ex_units;
    protocolparamupdate_max_tx_ex_units = instance.exports.protocolparamupdate_max_tx_ex_units;
    protocolparamupdate_set_max_block_ex_units = instance.exports.protocolparamupdate_set_max_block_ex_units;
    protocolparamupdate_max_block_ex_units = instance.exports.protocolparamupdate_max_block_ex_units;
    protocolparamupdate_set_max_value_size = instance.exports.protocolparamupdate_set_max_value_size;
    protocolparamupdate_max_value_size = instance.exports.protocolparamupdate_max_value_size;
    protocolparamupdate_new = instance.exports.protocolparamupdate_new;
    __wbg_transactionbodies_free = instance.exports.__wbg_transactionbodies_free;
    transactionbodies_to_bytes = instance.exports.transactionbodies_to_bytes;
    transactionbodies_from_bytes = instance.exports.transactionbodies_from_bytes;
    transactionbodies_new = instance.exports.transactionbodies_new;
    transactionbodies_len = instance.exports.transactionbodies_len;
    transactionbodies_get = instance.exports.transactionbodies_get;
    transactionbodies_add = instance.exports.transactionbodies_add;
    __wbg_transactionwitnesssets_free = instance.exports.__wbg_transactionwitnesssets_free;
    transactionwitnesssets_to_bytes = instance.exports.transactionwitnesssets_to_bytes;
    transactionwitnesssets_from_bytes = instance.exports.transactionwitnesssets_from_bytes;
    transactionwitnesssets_new = instance.exports.transactionwitnesssets_new;
    transactionwitnesssets_len = instance.exports.transactionwitnesssets_len;
    transactionwitnesssets_get = instance.exports.transactionwitnesssets_get;
    transactionwitnesssets_add = instance.exports.transactionwitnesssets_add;
    __wbg_auxiliarydataset_free = instance.exports.__wbg_auxiliarydataset_free;
    auxiliarydataset_new = instance.exports.auxiliarydataset_new;
    auxiliarydataset_len = instance.exports.auxiliarydataset_len;
    auxiliarydataset_insert = instance.exports.auxiliarydataset_insert;
    auxiliarydataset_get = instance.exports.auxiliarydataset_get;
    auxiliarydataset_indices = instance.exports.auxiliarydataset_indices;
    __wbg_block_free = instance.exports.__wbg_block_free;
    block_to_bytes = instance.exports.block_to_bytes;
    block_from_bytes = instance.exports.block_from_bytes;
    block_header = instance.exports.block_header;
    block_transaction_bodies = instance.exports.block_transaction_bodies;
    block_transaction_witness_sets = instance.exports.block_transaction_witness_sets;
    block_auxiliary_data_set = instance.exports.block_auxiliary_data_set;
    block_invalid_transactions = instance.exports.block_invalid_transactions;
    block_new = instance.exports.block_new;
    __wbg_header_free = instance.exports.__wbg_header_free;
    header_to_bytes = instance.exports.header_to_bytes;
    header_from_bytes = instance.exports.header_from_bytes;
    header_header_body = instance.exports.header_header_body;
    header_body_signature = instance.exports.header_body_signature;
    header_new = instance.exports.header_new;
    __wbg_operationalcert_free = instance.exports.__wbg_operationalcert_free;
    operationalcert_to_bytes = instance.exports.operationalcert_to_bytes;
    operationalcert_from_bytes = instance.exports.operationalcert_from_bytes;
    operationalcert_hot_vkey = instance.exports.operationalcert_hot_vkey;
    operationalcert_sequence_number = instance.exports.operationalcert_sequence_number;
    operationalcert_kes_period = instance.exports.operationalcert_kes_period;
    operationalcert_sigma = instance.exports.operationalcert_sigma;
    operationalcert_new = instance.exports.operationalcert_new;
    __wbg_headerbody_free = instance.exports.__wbg_headerbody_free;
    headerbody_to_bytes = instance.exports.headerbody_to_bytes;
    headerbody_from_bytes = instance.exports.headerbody_from_bytes;
    headerbody_block_number = instance.exports.headerbody_block_number;
    headerbody_slot = instance.exports.headerbody_slot;
    headerbody_prev_hash = instance.exports.headerbody_prev_hash;
    headerbody_issuer_vkey = instance.exports.headerbody_issuer_vkey;
    headerbody_vrf_vkey = instance.exports.headerbody_vrf_vkey;
    headerbody_nonce_vrf = instance.exports.headerbody_nonce_vrf;
    headerbody_leader_vrf = instance.exports.headerbody_leader_vrf;
    headerbody_block_body_size = instance.exports.headerbody_block_body_size;
    headerbody_block_body_hash = instance.exports.headerbody_block_body_hash;
    headerbody_operational_cert = instance.exports.headerbody_operational_cert;
    headerbody_protocol_version = instance.exports.headerbody_protocol_version;
    headerbody_new = instance.exports.headerbody_new;
    __wbg_assetname_free = instance.exports.__wbg_assetname_free;
    assetname_to_bytes = instance.exports.assetname_to_bytes;
    assetname_from_bytes = instance.exports.assetname_from_bytes;
    assetname_new = instance.exports.assetname_new;
    assetname_name = instance.exports.assetname_name;
    __wbg_assetnames_free = instance.exports.__wbg_assetnames_free;
    assetnames_to_bytes = instance.exports.assetnames_to_bytes;
    assetnames_from_bytes = instance.exports.assetnames_from_bytes;
    assetnames_new = instance.exports.assetnames_new;
    assetnames_len = instance.exports.assetnames_len;
    assetnames_get = instance.exports.assetnames_get;
    assetnames_add = instance.exports.assetnames_add;
    __wbg_assets_free = instance.exports.__wbg_assets_free;
    assets_to_bytes = instance.exports.assets_to_bytes;
    assets_from_bytes = instance.exports.assets_from_bytes;
    assets_new = instance.exports.assets_new;
    assets_len = instance.exports.assets_len;
    assets_insert = instance.exports.assets_insert;
    assets_get = instance.exports.assets_get;
    assets_keys = instance.exports.assets_keys;
    __wbg_multiasset_free = instance.exports.__wbg_multiasset_free;
    multiasset_to_bytes = instance.exports.multiasset_to_bytes;
    multiasset_from_bytes = instance.exports.multiasset_from_bytes;
    multiasset_new = instance.exports.multiasset_new;
    multiasset_len = instance.exports.multiasset_len;
    multiasset_insert = instance.exports.multiasset_insert;
    multiasset_get = instance.exports.multiasset_get;
    multiasset_keys = instance.exports.multiasset_keys;
    multiasset_sub = instance.exports.multiasset_sub;
    __wbg_mintassets_free = instance.exports.__wbg_mintassets_free;
    mintassets_new = instance.exports.mintassets_new;
    mintassets_len = instance.exports.mintassets_len;
    mintassets_insert = instance.exports.mintassets_insert;
    mintassets_get = instance.exports.mintassets_get;
    mintassets_keys = instance.exports.mintassets_keys;
    __wbg_mint_free = instance.exports.__wbg_mint_free;
    mint_to_bytes = instance.exports.mint_to_bytes;
    mint_from_bytes = instance.exports.mint_from_bytes;
    mint_new = instance.exports.mint_new;
    mint_len = instance.exports.mint_len;
    mint_insert = instance.exports.mint_insert;
    mint_get = instance.exports.mint_get;
    mint_keys = instance.exports.mint_keys;
    __wbg_networkid_free = instance.exports.__wbg_networkid_free;
    networkid_to_bytes = instance.exports.networkid_to_bytes;
    networkid_from_bytes = instance.exports.networkid_from_bytes;
    networkid_testnet = instance.exports.networkid_testnet;
    networkid_mainnet = instance.exports.networkid_mainnet;
    networkid_kind = instance.exports.networkid_kind;
    __wbg_metadatamap_free = instance.exports.__wbg_metadatamap_free;
    metadatamap_to_bytes = instance.exports.metadatamap_to_bytes;
    metadatamap_from_bytes = instance.exports.metadatamap_from_bytes;
    metadatamap_new = instance.exports.metadatamap_new;
    metadatamap_len = instance.exports.metadatamap_len;
    metadatamap_insert = instance.exports.metadatamap_insert;
    metadatamap_insert_str = instance.exports.metadatamap_insert_str;
    metadatamap_insert_i32 = instance.exports.metadatamap_insert_i32;
    metadatamap_get = instance.exports.metadatamap_get;
    metadatamap_get_str = instance.exports.metadatamap_get_str;
    metadatamap_get_i32 = instance.exports.metadatamap_get_i32;
    metadatamap_has = instance.exports.metadatamap_has;
    metadatamap_keys = instance.exports.metadatamap_keys;
    __wbg_metadatalist_free = instance.exports.__wbg_metadatalist_free;
    metadatalist_to_bytes = instance.exports.metadatalist_to_bytes;
    metadatalist_from_bytes = instance.exports.metadatalist_from_bytes;
    metadatalist_new = instance.exports.metadatalist_new;
    metadatalist_len = instance.exports.metadatalist_len;
    metadatalist_get = instance.exports.metadatalist_get;
    metadatalist_add = instance.exports.metadatalist_add;
    __wbg_transactionmetadatum_free = instance.exports.__wbg_transactionmetadatum_free;
    transactionmetadatum_to_bytes = instance.exports.transactionmetadatum_to_bytes;
    transactionmetadatum_from_bytes = instance.exports.transactionmetadatum_from_bytes;
    transactionmetadatum_new_map = instance.exports.transactionmetadatum_new_map;
    transactionmetadatum_new_list = instance.exports.transactionmetadatum_new_list;
    transactionmetadatum_new_int = instance.exports.transactionmetadatum_new_int;
    transactionmetadatum_new_bytes = instance.exports.transactionmetadatum_new_bytes;
    transactionmetadatum_new_text = instance.exports.transactionmetadatum_new_text;
    transactionmetadatum_kind = instance.exports.transactionmetadatum_kind;
    transactionmetadatum_as_map = instance.exports.transactionmetadatum_as_map;
    transactionmetadatum_as_list = instance.exports.transactionmetadatum_as_list;
    transactionmetadatum_as_int = instance.exports.transactionmetadatum_as_int;
    transactionmetadatum_as_bytes = instance.exports.transactionmetadatum_as_bytes;
    transactionmetadatum_as_text = instance.exports.transactionmetadatum_as_text;
    __wbg_transactionmetadatumlabels_free = instance.exports.__wbg_transactionmetadatumlabels_free;
    transactionmetadatumlabels_to_bytes = instance.exports.transactionmetadatumlabels_to_bytes;
    transactionmetadatumlabels_from_bytes = instance.exports.transactionmetadatumlabels_from_bytes;
    transactionmetadatumlabels_new = instance.exports.transactionmetadatumlabels_new;
    transactionmetadatumlabels_len = instance.exports.transactionmetadatumlabels_len;
    transactionmetadatumlabels_get = instance.exports.transactionmetadatumlabels_get;
    transactionmetadatumlabels_add = instance.exports.transactionmetadatumlabels_add;
    __wbg_generaltransactionmetadata_free = instance.exports.__wbg_generaltransactionmetadata_free;
    generaltransactionmetadata_to_bytes = instance.exports.generaltransactionmetadata_to_bytes;
    generaltransactionmetadata_from_bytes = instance.exports.generaltransactionmetadata_from_bytes;
    generaltransactionmetadata_new = instance.exports.generaltransactionmetadata_new;
    generaltransactionmetadata_len = instance.exports.generaltransactionmetadata_len;
    generaltransactionmetadata_insert = instance.exports.generaltransactionmetadata_insert;
    generaltransactionmetadata_get = instance.exports.generaltransactionmetadata_get;
    generaltransactionmetadata_keys = instance.exports.generaltransactionmetadata_keys;
    __wbg_auxiliarydata_free = instance.exports.__wbg_auxiliarydata_free;
    auxiliarydata_to_bytes = instance.exports.auxiliarydata_to_bytes;
    auxiliarydata_from_bytes = instance.exports.auxiliarydata_from_bytes;
    auxiliarydata_new = instance.exports.auxiliarydata_new;
    auxiliarydata_metadata = instance.exports.auxiliarydata_metadata;
    auxiliarydata_set_metadata = instance.exports.auxiliarydata_set_metadata;
    auxiliarydata_native_scripts = instance.exports.auxiliarydata_native_scripts;
    auxiliarydata_set_native_scripts = instance.exports.auxiliarydata_set_native_scripts;
    auxiliarydata_plutus_scripts = instance.exports.auxiliarydata_plutus_scripts;
    auxiliarydata_set_plutus_scripts = instance.exports.auxiliarydata_set_plutus_scripts;
    encode_arbitrary_bytes_as_metadatum = instance.exports.encode_arbitrary_bytes_as_metadatum;
    decode_arbitrary_bytes_from_metadatum = instance.exports.decode_arbitrary_bytes_from_metadatum;
    encode_json_str_to_metadatum = instance.exports.encode_json_str_to_metadatum;
    decode_metadatum_to_json_str = instance.exports.decode_metadatum_to_json_str;
    encrypt_with_password = instance.exports.encrypt_with_password;
    decrypt_with_password = instance.exports.decrypt_with_password;
    __wbg_linearfee_free = instance.exports.__wbg_linearfee_free;
    linearfee_constant = instance.exports.linearfee_constant;
    linearfee_coefficient = instance.exports.linearfee_coefficient;
    linearfee_new = instance.exports.linearfee_new;
    min_fee = instance.exports.min_fee;
    __wbg_transactionunspentoutput_free = instance.exports.__wbg_transactionunspentoutput_free;
    transactionunspentoutput_to_bytes = instance.exports.transactionunspentoutput_to_bytes;
    transactionunspentoutput_from_bytes = instance.exports.transactionunspentoutput_from_bytes;
    transactionunspentoutput_new = instance.exports.transactionunspentoutput_new;
    transactionunspentoutput_input = instance.exports.transactionunspentoutput_input;
    transactionunspentoutput_output = instance.exports.transactionunspentoutput_output;
    __wbg_bignum_free = instance.exports.__wbg_bignum_free;
    bignum_to_bytes = instance.exports.bignum_to_bytes;
    bignum_from_bytes = instance.exports.bignum_from_bytes;
    bignum_from_str = instance.exports.bignum_from_str;
    bignum_to_str = instance.exports.bignum_to_str;
    bignum_zero = instance.exports.bignum_zero;
    bignum_checked_mul = instance.exports.bignum_checked_mul;
    bignum_checked_add = instance.exports.bignum_checked_add;
    bignum_checked_sub = instance.exports.bignum_checked_sub;
    bignum_clamped_sub = instance.exports.bignum_clamped_sub;
    bignum_compare = instance.exports.bignum_compare;
    __wbg_value_free = instance.exports.__wbg_value_free;
    value_to_bytes = instance.exports.value_to_bytes;
    value_from_bytes = instance.exports.value_from_bytes;
    value_new = instance.exports.value_new;
    value_coin = instance.exports.value_coin;
    value_set_coin = instance.exports.value_set_coin;
    value_multiasset = instance.exports.value_multiasset;
    value_set_multiasset = instance.exports.value_set_multiasset;
    value_checked_add = instance.exports.value_checked_add;
    value_checked_sub = instance.exports.value_checked_sub;
    value_clamped_sub = instance.exports.value_clamped_sub;
    value_compare = instance.exports.value_compare;
    __wbg_int_free = instance.exports.__wbg_int_free;
    int_new = instance.exports.int_new;
    int_new_negative = instance.exports.int_new_negative;
    int_new_i32 = instance.exports.int_new_i32;
    int_is_positive = instance.exports.int_is_positive;
    int_as_positive = instance.exports.int_as_positive;
    int_as_negative = instance.exports.int_as_negative;
    int_as_i32 = instance.exports.int_as_i32;
    __wbg_bigint_free = instance.exports.__wbg_bigint_free;
    bigint_to_bytes = instance.exports.bigint_to_bytes;
    bigint_from_bytes = instance.exports.bigint_from_bytes;
    bigint_as_u64 = instance.exports.bigint_as_u64;
    bigint_from_str = instance.exports.bigint_from_str;
    bigint_to_str = instance.exports.bigint_to_str;
    make_daedalus_bootstrap_witness = instance.exports.make_daedalus_bootstrap_witness;
    make_icarus_bootstrap_witness = instance.exports.make_icarus_bootstrap_witness;
    make_vkey_witness = instance.exports.make_vkey_witness;
    hash_auxiliary_data = instance.exports.hash_auxiliary_data;
    hash_transaction = instance.exports.hash_transaction;
    hash_plutus_data = instance.exports.hash_plutus_data;
    hash_script_data = instance.exports.hash_script_data;
    get_implicit_input = instance.exports.get_implicit_input;
    get_deposit = instance.exports.get_deposit;
    min_ada_required = instance.exports.min_ada_required;
    __wbg_bip32privatekey_free = instance.exports.__wbg_bip32privatekey_free;
    bip32privatekey_derive = instance.exports.bip32privatekey_derive;
    bip32privatekey_from_128_xprv = instance.exports.bip32privatekey_from_128_xprv;
    bip32privatekey_to_128_xprv = instance.exports.bip32privatekey_to_128_xprv;
    bip32privatekey_generate_ed25519_bip32 = instance.exports.bip32privatekey_generate_ed25519_bip32;
    bip32privatekey_to_raw_key = instance.exports.bip32privatekey_to_raw_key;
    bip32privatekey_to_public = instance.exports.bip32privatekey_to_public;
    bip32privatekey_from_bytes = instance.exports.bip32privatekey_from_bytes;
    bip32privatekey_as_bytes = instance.exports.bip32privatekey_as_bytes;
    bip32privatekey_from_bech32 = instance.exports.bip32privatekey_from_bech32;
    bip32privatekey_to_bech32 = instance.exports.bip32privatekey_to_bech32;
    bip32privatekey_from_bip39_entropy = instance.exports.bip32privatekey_from_bip39_entropy;
    bip32privatekey_chaincode = instance.exports.bip32privatekey_chaincode;
    __wbg_bip32publickey_free = instance.exports.__wbg_bip32publickey_free;
    bip32publickey_derive = instance.exports.bip32publickey_derive;
    bip32publickey_to_raw_key = instance.exports.bip32publickey_to_raw_key;
    bip32publickey_from_bytes = instance.exports.bip32publickey_from_bytes;
    bip32publickey_as_bytes = instance.exports.bip32publickey_as_bytes;
    bip32publickey_from_bech32 = instance.exports.bip32publickey_from_bech32;
    bip32publickey_to_bech32 = instance.exports.bip32publickey_to_bech32;
    bip32publickey_chaincode = instance.exports.bip32publickey_chaincode;
    __wbg_privatekey_free = instance.exports.__wbg_privatekey_free;
    privatekey_to_public = instance.exports.privatekey_to_public;
    privatekey_generate_ed25519 = instance.exports.privatekey_generate_ed25519;
    privatekey_generate_ed25519extended = instance.exports.privatekey_generate_ed25519extended;
    privatekey_to_bech32 = instance.exports.privatekey_to_bech32;
    privatekey_as_bytes = instance.exports.privatekey_as_bytes;
    privatekey_from_extended_bytes = instance.exports.privatekey_from_extended_bytes;
    privatekey_from_normal_bytes = instance.exports.privatekey_from_normal_bytes;
    privatekey_sign = instance.exports.privatekey_sign;
    __wbg_publickey_free = instance.exports.__wbg_publickey_free;
    publickey_from_bech32 = instance.exports.publickey_from_bech32;
    publickey_to_bech32 = instance.exports.publickey_to_bech32;
    publickey_as_bytes = instance.exports.publickey_as_bytes;
    publickey_from_bytes = instance.exports.publickey_from_bytes;
    publickey_verify = instance.exports.publickey_verify;
    publickey_hash = instance.exports.publickey_hash;
    __wbg_vkey_free = instance.exports.__wbg_vkey_free;
    vkey_to_bytes = instance.exports.vkey_to_bytes;
    vkey_from_bytes = instance.exports.vkey_from_bytes;
    vkey_new = instance.exports.vkey_new;
    vkey_public_key = instance.exports.vkey_public_key;
    __wbg_vkeys_free = instance.exports.__wbg_vkeys_free;
    vkeys_new = instance.exports.vkeys_new;
    vkeys_len = instance.exports.vkeys_len;
    vkeys_get = instance.exports.vkeys_get;
    vkeys_add = instance.exports.vkeys_add;
    __wbg_vkeywitness_free = instance.exports.__wbg_vkeywitness_free;
    vkeywitness_to_bytes = instance.exports.vkeywitness_to_bytes;
    vkeywitness_from_bytes = instance.exports.vkeywitness_from_bytes;
    vkeywitness_new = instance.exports.vkeywitness_new;
    vkeywitness_vkey = instance.exports.vkeywitness_vkey;
    vkeywitness_signature = instance.exports.vkeywitness_signature;
    __wbg_vkeywitnesses_free = instance.exports.__wbg_vkeywitnesses_free;
    vkeywitnesses_new = instance.exports.vkeywitnesses_new;
    vkeywitnesses_len = instance.exports.vkeywitnesses_len;
    vkeywitnesses_get = instance.exports.vkeywitnesses_get;
    vkeywitnesses_add = instance.exports.vkeywitnesses_add;
    __wbg_bootstrapwitness_free = instance.exports.__wbg_bootstrapwitness_free;
    bootstrapwitness_to_bytes = instance.exports.bootstrapwitness_to_bytes;
    bootstrapwitness_from_bytes = instance.exports.bootstrapwitness_from_bytes;
    bootstrapwitness_vkey = instance.exports.bootstrapwitness_vkey;
    bootstrapwitness_signature = instance.exports.bootstrapwitness_signature;
    bootstrapwitness_chain_code = instance.exports.bootstrapwitness_chain_code;
    bootstrapwitness_attributes = instance.exports.bootstrapwitness_attributes;
    bootstrapwitness_new = instance.exports.bootstrapwitness_new;
    __wbg_bootstrapwitnesses_free = instance.exports.__wbg_bootstrapwitnesses_free;
    bootstrapwitnesses_new = instance.exports.bootstrapwitnesses_new;
    bootstrapwitnesses_len = instance.exports.bootstrapwitnesses_len;
    bootstrapwitnesses_get = instance.exports.bootstrapwitnesses_get;
    bootstrapwitnesses_add = instance.exports.bootstrapwitnesses_add;
    __wbg_publickeys_free = instance.exports.__wbg_publickeys_free;
    publickeys_new = instance.exports.publickeys_new;
    publickeys_size = instance.exports.publickeys_size;
    publickeys_get = instance.exports.publickeys_get;
    publickeys_add = instance.exports.publickeys_add;
    __wbg_ed25519signature_free = instance.exports.__wbg_ed25519signature_free;
    ed25519signature_to_bytes = instance.exports.ed25519signature_to_bytes;
    ed25519signature_to_bech32 = instance.exports.ed25519signature_to_bech32;
    ed25519signature_to_hex = instance.exports.ed25519signature_to_hex;
    ed25519signature_from_bech32 = instance.exports.ed25519signature_from_bech32;
    ed25519signature_from_hex = instance.exports.ed25519signature_from_hex;
    ed25519signature_from_bytes = instance.exports.ed25519signature_from_bytes;
    __wbg_legacydaedalusprivatekey_free = instance.exports.__wbg_legacydaedalusprivatekey_free;
    legacydaedalusprivatekey_from_bytes = instance.exports.legacydaedalusprivatekey_from_bytes;
    legacydaedalusprivatekey_as_bytes = instance.exports.legacydaedalusprivatekey_as_bytes;
    legacydaedalusprivatekey_chaincode = instance.exports.legacydaedalusprivatekey_chaincode;
    __wbg_ed25519keyhash_free = instance.exports.__wbg_ed25519keyhash_free;
    ed25519keyhash_to_bytes = instance.exports.ed25519keyhash_to_bytes;
    ed25519keyhash_to_bech32 = instance.exports.ed25519keyhash_to_bech32;
    ed25519keyhash_from_bech32 = instance.exports.ed25519keyhash_from_bech32;
    ed25519keyhash_from_bytes = instance.exports.ed25519keyhash_from_bytes;
    __wbg_scripthash_free = instance.exports.__wbg_scripthash_free;
    scripthash_to_bytes = instance.exports.scripthash_to_bytes;
    scripthash_to_bech32 = instance.exports.scripthash_to_bech32;
    scripthash_from_bech32 = instance.exports.scripthash_from_bech32;
    scripthash_from_bytes = instance.exports.scripthash_from_bytes;
    __wbg_transactionhash_free = instance.exports.__wbg_transactionhash_free;
    transactionhash_to_bytes = instance.exports.transactionhash_to_bytes;
    transactionhash_to_bech32 = instance.exports.transactionhash_to_bech32;
    transactionhash_from_bech32 = instance.exports.transactionhash_from_bech32;
    transactionhash_from_bytes = instance.exports.transactionhash_from_bytes;
    __wbg_genesisdelegatehash_free = instance.exports.__wbg_genesisdelegatehash_free;
    genesisdelegatehash_to_bytes = instance.exports.genesisdelegatehash_to_bytes;
    genesisdelegatehash_to_bech32 = instance.exports.genesisdelegatehash_to_bech32;
    genesisdelegatehash_from_bech32 = instance.exports.genesisdelegatehash_from_bech32;
    genesisdelegatehash_from_bytes = instance.exports.genesisdelegatehash_from_bytes;
    __wbg_genesishash_free = instance.exports.__wbg_genesishash_free;
    genesishash_to_bytes = instance.exports.genesishash_to_bytes;
    genesishash_to_bech32 = instance.exports.genesishash_to_bech32;
    genesishash_from_bech32 = instance.exports.genesishash_from_bech32;
    genesishash_from_bytes = instance.exports.genesishash_from_bytes;
    __wbg_auxiliarydatahash_free = instance.exports.__wbg_auxiliarydatahash_free;
    auxiliarydatahash_to_bytes = instance.exports.auxiliarydatahash_to_bytes;
    auxiliarydatahash_to_bech32 = instance.exports.auxiliarydatahash_to_bech32;
    auxiliarydatahash_from_bech32 = instance.exports.auxiliarydatahash_from_bech32;
    auxiliarydatahash_from_bytes = instance.exports.auxiliarydatahash_from_bytes;
    __wbg_poolmetadatahash_free = instance.exports.__wbg_poolmetadatahash_free;
    poolmetadatahash_to_bytes = instance.exports.poolmetadatahash_to_bytes;
    poolmetadatahash_to_bech32 = instance.exports.poolmetadatahash_to_bech32;
    poolmetadatahash_from_bech32 = instance.exports.poolmetadatahash_from_bech32;
    poolmetadatahash_from_bytes = instance.exports.poolmetadatahash_from_bytes;
    __wbg_vrfkeyhash_free = instance.exports.__wbg_vrfkeyhash_free;
    vrfkeyhash_to_bytes = instance.exports.vrfkeyhash_to_bytes;
    vrfkeyhash_to_bech32 = instance.exports.vrfkeyhash_to_bech32;
    vrfkeyhash_from_bech32 = instance.exports.vrfkeyhash_from_bech32;
    vrfkeyhash_from_bytes = instance.exports.vrfkeyhash_from_bytes;
    __wbg_blockhash_free = instance.exports.__wbg_blockhash_free;
    blockhash_to_bytes = instance.exports.blockhash_to_bytes;
    blockhash_to_bech32 = instance.exports.blockhash_to_bech32;
    blockhash_from_bech32 = instance.exports.blockhash_from_bech32;
    blockhash_from_bytes = instance.exports.blockhash_from_bytes;
    __wbg_datahash_free = instance.exports.__wbg_datahash_free;
    datahash_to_bytes = instance.exports.datahash_to_bytes;
    datahash_to_bech32 = instance.exports.datahash_to_bech32;
    datahash_from_bech32 = instance.exports.datahash_from_bech32;
    datahash_from_bytes = instance.exports.datahash_from_bytes;
    __wbg_scriptdatahash_free = instance.exports.__wbg_scriptdatahash_free;
    scriptdatahash_to_bytes = instance.exports.scriptdatahash_to_bytes;
    scriptdatahash_to_bech32 = instance.exports.scriptdatahash_to_bech32;
    scriptdatahash_from_bech32 = instance.exports.scriptdatahash_from_bech32;
    scriptdatahash_from_bytes = instance.exports.scriptdatahash_from_bytes;
    __wbg_vrfvkey_free = instance.exports.__wbg_vrfvkey_free;
    vrfvkey_to_bytes = instance.exports.vrfvkey_to_bytes;
    vrfvkey_to_bech32 = instance.exports.vrfvkey_to_bech32;
    vrfvkey_from_bech32 = instance.exports.vrfvkey_from_bech32;
    vrfvkey_from_bytes = instance.exports.vrfvkey_from_bytes;
    __wbg_kesvkey_free = instance.exports.__wbg_kesvkey_free;
    kesvkey_to_bytes = instance.exports.kesvkey_to_bytes;
    kesvkey_to_bech32 = instance.exports.kesvkey_to_bech32;
    kesvkey_from_bech32 = instance.exports.kesvkey_from_bech32;
    kesvkey_from_bytes = instance.exports.kesvkey_from_bytes;
    __wbg_kessignature_free = instance.exports.__wbg_kessignature_free;
    kessignature_to_bytes = instance.exports.kessignature_to_bytes;
    kessignature_from_bytes = instance.exports.kessignature_from_bytes;
    __wbg_nonce_free = instance.exports.__wbg_nonce_free;
    nonce_to_bytes = instance.exports.nonce_to_bytes;
    nonce_from_bytes = instance.exports.nonce_from_bytes;
    nonce_new_identity = instance.exports.nonce_new_identity;
    nonce_new_from_hash = instance.exports.nonce_new_from_hash;
    nonce_get_hash = instance.exports.nonce_get_hash;
    __wbg_vrfcert_free = instance.exports.__wbg_vrfcert_free;
    vrfcert_to_bytes = instance.exports.vrfcert_to_bytes;
    vrfcert_from_bytes = instance.exports.vrfcert_from_bytes;
    vrfcert_output = instance.exports.vrfcert_output;
    vrfcert_proof = instance.exports.vrfcert_proof;
    vrfcert_new = instance.exports.vrfcert_new;
    __wbg_transactionbuilder_free = instance.exports.__wbg_transactionbuilder_free;
    transactionbuilder_add_key_input = instance.exports.transactionbuilder_add_key_input;
    transactionbuilder_add_script_input = instance.exports.transactionbuilder_add_script_input;
    transactionbuilder_add_bootstrap_input = instance.exports.transactionbuilder_add_bootstrap_input;
    transactionbuilder_add_input = instance.exports.transactionbuilder_add_input;
    transactionbuilder_fee_for_input = instance.exports.transactionbuilder_fee_for_input;
    transactionbuilder_add_output = instance.exports.transactionbuilder_add_output;
    transactionbuilder_fee_for_output = instance.exports.transactionbuilder_fee_for_output;
    transactionbuilder_set_fee = instance.exports.transactionbuilder_set_fee;
    transactionbuilder_set_ttl = instance.exports.transactionbuilder_set_ttl;
    transactionbuilder_set_validity_start_interval = instance.exports.transactionbuilder_set_validity_start_interval;
    transactionbuilder_set_certs = instance.exports.transactionbuilder_set_certs;
    transactionbuilder_set_withdrawals = instance.exports.transactionbuilder_set_withdrawals;
    transactionbuilder_set_auxiliary_data = instance.exports.transactionbuilder_set_auxiliary_data;
    transactionbuilder_new = instance.exports.transactionbuilder_new;
    transactionbuilder_get_explicit_input = instance.exports.transactionbuilder_get_explicit_input;
    transactionbuilder_get_implicit_input = instance.exports.transactionbuilder_get_implicit_input;
    transactionbuilder_get_explicit_output = instance.exports.transactionbuilder_get_explicit_output;
    transactionbuilder_get_deposit = instance.exports.transactionbuilder_get_deposit;
    transactionbuilder_get_fee_if_set = instance.exports.transactionbuilder_get_fee_if_set;
    transactionbuilder_add_change_if_needed = instance.exports.transactionbuilder_add_change_if_needed;
    transactionbuilder_full_size = instance.exports.transactionbuilder_full_size;
    transactionbuilder_output_sizes = instance.exports.transactionbuilder_output_sizes;
    transactionbuilder_build = instance.exports.transactionbuilder_build;
    transactionbuilder_min_fee = instance.exports.transactionbuilder_min_fee;
    __wbg_networkinfo_free = instance.exports.__wbg_networkinfo_free;
    networkinfo_new = instance.exports.networkinfo_new;
    networkinfo_network_id = instance.exports.networkinfo_network_id;
    networkinfo_protocol_magic = instance.exports.networkinfo_protocol_magic;
    networkinfo_testnet = instance.exports.networkinfo_testnet;
    networkinfo_mainnet = instance.exports.networkinfo_mainnet;
    __wbg_stakecredential_free = instance.exports.__wbg_stakecredential_free;
    stakecredential_from_keyhash = instance.exports.stakecredential_from_keyhash;
    stakecredential_from_scripthash = instance.exports.stakecredential_from_scripthash;
    stakecredential_to_keyhash = instance.exports.stakecredential_to_keyhash;
    stakecredential_to_scripthash = instance.exports.stakecredential_to_scripthash;
    stakecredential_kind = instance.exports.stakecredential_kind;
    stakecredential_to_bytes = instance.exports.stakecredential_to_bytes;
    stakecredential_from_bytes = instance.exports.stakecredential_from_bytes;
    __wbg_byronaddress_free = instance.exports.__wbg_byronaddress_free;
    byronaddress_to_base58 = instance.exports.byronaddress_to_base58;
    byronaddress_to_bytes = instance.exports.byronaddress_to_bytes;
    byronaddress_from_bytes = instance.exports.byronaddress_from_bytes;
    byronaddress_byron_protocol_magic = instance.exports.byronaddress_byron_protocol_magic;
    byronaddress_attributes = instance.exports.byronaddress_attributes;
    byronaddress_network_id = instance.exports.byronaddress_network_id;
    byronaddress_from_base58 = instance.exports.byronaddress_from_base58;
    byronaddress_icarus_from_key = instance.exports.byronaddress_icarus_from_key;
    byronaddress_is_valid = instance.exports.byronaddress_is_valid;
    byronaddress_to_address = instance.exports.byronaddress_to_address;
    byronaddress_from_address = instance.exports.byronaddress_from_address;
    __wbg_address_free = instance.exports.__wbg_address_free;
    address_from_bytes = instance.exports.address_from_bytes;
    address_to_bytes = instance.exports.address_to_bytes;
    address_to_bech32 = instance.exports.address_to_bech32;
    address_from_bech32 = instance.exports.address_from_bech32;
    address_network_id = instance.exports.address_network_id;
    __wbg_baseaddress_free = instance.exports.__wbg_baseaddress_free;
    baseaddress_new = instance.exports.baseaddress_new;
    baseaddress_payment_cred = instance.exports.baseaddress_payment_cred;
    baseaddress_stake_cred = instance.exports.baseaddress_stake_cred;
    baseaddress_to_address = instance.exports.baseaddress_to_address;
    baseaddress_from_address = instance.exports.baseaddress_from_address;
    __wbg_enterpriseaddress_free = instance.exports.__wbg_enterpriseaddress_free;
    enterpriseaddress_new = instance.exports.enterpriseaddress_new;
    enterpriseaddress_payment_cred = instance.exports.enterpriseaddress_payment_cred;
    enterpriseaddress_to_address = instance.exports.enterpriseaddress_to_address;
    enterpriseaddress_from_address = instance.exports.enterpriseaddress_from_address;
    __wbg_rewardaddress_free = instance.exports.__wbg_rewardaddress_free;
    rewardaddress_new = instance.exports.rewardaddress_new;
    rewardaddress_payment_cred = instance.exports.rewardaddress_payment_cred;
    rewardaddress_to_address = instance.exports.rewardaddress_to_address;
    rewardaddress_from_address = instance.exports.rewardaddress_from_address;
    __wbg_pointer_free = instance.exports.__wbg_pointer_free;
    pointer_new = instance.exports.pointer_new;
    pointer_slot = instance.exports.pointer_slot;
    pointer_tx_index = instance.exports.pointer_tx_index;
    pointer_cert_index = instance.exports.pointer_cert_index;
    __wbg_pointeraddress_free = instance.exports.__wbg_pointeraddress_free;
    pointeraddress_new = instance.exports.pointeraddress_new;
    pointeraddress_payment_cred = instance.exports.pointeraddress_payment_cred;
    pointeraddress_stake_pointer = instance.exports.pointeraddress_stake_pointer;
    pointeraddress_to_address = instance.exports.pointeraddress_to_address;
    pointeraddress_from_address = instance.exports.pointeraddress_from_address;
    __wbg_plutusscript_free = instance.exports.__wbg_plutusscript_free;
    plutusscript_to_bytes = instance.exports.plutusscript_to_bytes;
    plutusscript_from_bytes = instance.exports.plutusscript_from_bytes;
    plutusscript_new = instance.exports.plutusscript_new;
    plutusscript_bytes = instance.exports.plutusscript_bytes;
    __wbg_plutusscripts_free = instance.exports.__wbg_plutusscripts_free;
    plutusscripts_to_bytes = instance.exports.plutusscripts_to_bytes;
    plutusscripts_from_bytes = instance.exports.plutusscripts_from_bytes;
    plutusscripts_new = instance.exports.plutusscripts_new;
    plutusscripts_len = instance.exports.plutusscripts_len;
    plutusscripts_get = instance.exports.plutusscripts_get;
    plutusscripts_add = instance.exports.plutusscripts_add;
    __wbg_constrplutusdata_free = instance.exports.__wbg_constrplutusdata_free;
    constrplutusdata_to_bytes = instance.exports.constrplutusdata_to_bytes;
    constrplutusdata_from_bytes = instance.exports.constrplutusdata_from_bytes;
    constrplutusdata_tag = instance.exports.constrplutusdata_tag;
    constrplutusdata_data = instance.exports.constrplutusdata_data;
    constrplutusdata_new = instance.exports.constrplutusdata_new;
    __wbg_costmodel_free = instance.exports.__wbg_costmodel_free;
    costmodel_to_bytes = instance.exports.costmodel_to_bytes;
    costmodel_from_bytes = instance.exports.costmodel_from_bytes;
    costmodel_new = instance.exports.costmodel_new;
    costmodel_set = instance.exports.costmodel_set;
    costmodel_get = instance.exports.costmodel_get;
    __wbg_costmdls_free = instance.exports.__wbg_costmdls_free;
    costmdls_to_bytes = instance.exports.costmdls_to_bytes;
    costmdls_from_bytes = instance.exports.costmdls_from_bytes;
    costmdls_new = instance.exports.costmdls_new;
    costmdls_len = instance.exports.costmdls_len;
    costmdls_insert = instance.exports.costmdls_insert;
    costmdls_get = instance.exports.costmdls_get;
    costmdls_keys = instance.exports.costmdls_keys;
    __wbg_exunitprices_free = instance.exports.__wbg_exunitprices_free;
    exunitprices_to_bytes = instance.exports.exunitprices_to_bytes;
    exunitprices_from_bytes = instance.exports.exunitprices_from_bytes;
    exunitprices_mem_price = instance.exports.exunitprices_mem_price;
    exunitprices_step_price = instance.exports.exunitprices_step_price;
    exunitprices_new = instance.exports.exunitprices_new;
    __wbg_exunits_free = instance.exports.__wbg_exunits_free;
    exunits_to_bytes = instance.exports.exunits_to_bytes;
    exunits_from_bytes = instance.exports.exunits_from_bytes;
    exunits_mem = instance.exports.exunits_mem;
    exunits_steps = instance.exports.exunits_steps;
    exunits_new = instance.exports.exunits_new;
    __wbg_language_free = instance.exports.__wbg_language_free;
    language_to_bytes = instance.exports.language_to_bytes;
    language_from_bytes = instance.exports.language_from_bytes;
    language_new_plutus_v1 = instance.exports.language_new_plutus_v1;
    language_kind = instance.exports.language_kind;
    __wbg_languages_free = instance.exports.__wbg_languages_free;
    languages_new = instance.exports.languages_new;
    languages_len = instance.exports.languages_len;
    languages_get = instance.exports.languages_get;
    languages_add = instance.exports.languages_add;
    __wbg_plutusmap_free = instance.exports.__wbg_plutusmap_free;
    plutusmap_to_bytes = instance.exports.plutusmap_to_bytes;
    plutusmap_from_bytes = instance.exports.plutusmap_from_bytes;
    plutusmap_new = instance.exports.plutusmap_new;
    plutusmap_len = instance.exports.plutusmap_len;
    plutusmap_insert = instance.exports.plutusmap_insert;
    plutusmap_get = instance.exports.plutusmap_get;
    plutusmap_keys = instance.exports.plutusmap_keys;
    __wbg_plutusdata_free = instance.exports.__wbg_plutusdata_free;
    plutusdata_to_bytes = instance.exports.plutusdata_to_bytes;
    plutusdata_from_bytes = instance.exports.plutusdata_from_bytes;
    plutusdata_new_constr_plutus_data = instance.exports.plutusdata_new_constr_plutus_data;
    plutusdata_new_map = instance.exports.plutusdata_new_map;
    plutusdata_new_list = instance.exports.plutusdata_new_list;
    plutusdata_new_integer = instance.exports.plutusdata_new_integer;
    plutusdata_new_bytes = instance.exports.plutusdata_new_bytes;
    plutusdata_kind = instance.exports.plutusdata_kind;
    plutusdata_as_constr_plutus_data = instance.exports.plutusdata_as_constr_plutus_data;
    plutusdata_as_map = instance.exports.plutusdata_as_map;
    plutusdata_as_list = instance.exports.plutusdata_as_list;
    plutusdata_as_integer = instance.exports.plutusdata_as_integer;
    plutusdata_as_bytes = instance.exports.plutusdata_as_bytes;
    __wbg_plutuslist_free = instance.exports.__wbg_plutuslist_free;
    plutuslist_to_bytes = instance.exports.plutuslist_to_bytes;
    plutuslist_from_bytes = instance.exports.plutuslist_from_bytes;
    plutuslist_new = instance.exports.plutuslist_new;
    plutuslist_len = instance.exports.plutuslist_len;
    plutuslist_get = instance.exports.plutuslist_get;
    plutuslist_add = instance.exports.plutuslist_add;
    __wbg_redeemer_free = instance.exports.__wbg_redeemer_free;
    redeemer_to_bytes = instance.exports.redeemer_to_bytes;
    redeemer_from_bytes = instance.exports.redeemer_from_bytes;
    redeemer_tag = instance.exports.redeemer_tag;
    redeemer_index = instance.exports.redeemer_index;
    redeemer_data = instance.exports.redeemer_data;
    redeemer_ex_units = instance.exports.redeemer_ex_units;
    redeemer_new = instance.exports.redeemer_new;
    __wbg_redeemertag_free = instance.exports.__wbg_redeemertag_free;
    redeemertag_to_bytes = instance.exports.redeemertag_to_bytes;
    redeemertag_from_bytes = instance.exports.redeemertag_from_bytes;
    redeemertag_new_spend = instance.exports.redeemertag_new_spend;
    redeemertag_new_mint = instance.exports.redeemertag_new_mint;
    redeemertag_new_cert = instance.exports.redeemertag_new_cert;
    redeemertag_new_reward = instance.exports.redeemertag_new_reward;
    redeemertag_kind = instance.exports.redeemertag_kind;
    __wbg_redeemers_free = instance.exports.__wbg_redeemers_free;
    redeemers_to_bytes = instance.exports.redeemers_to_bytes;
    redeemers_from_bytes = instance.exports.redeemers_from_bytes;
    redeemers_new = instance.exports.redeemers_new;
    redeemers_len = instance.exports.redeemers_len;
    redeemers_get = instance.exports.redeemers_get;
    redeemers_add = instance.exports.redeemers_add;
    __wbg_strings_free = instance.exports.__wbg_strings_free;
    strings_new = instance.exports.strings_new;
    strings_len = instance.exports.strings_len;
    strings_get = instance.exports.strings_get;
    strings_add = instance.exports.strings_add;
    __wbindgen_malloc = instance.exports.__wbindgen_malloc;
    __wbindgen_realloc = instance.exports.__wbindgen_realloc;
    __wbindgen_add_to_stack_pointer = instance.exports.__wbindgen_add_to_stack_pointer;
    __wbindgen_free = instance.exports.__wbindgen_free;
  }
});

// node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib_bg.js
var cardano_serialization_lib_bg_exports = {};
__export(cardano_serialization_lib_bg_exports, {
  Address: () => Address,
  AssetName: () => AssetName,
  AssetNames: () => AssetNames,
  Assets: () => Assets,
  AuxiliaryData: () => AuxiliaryData,
  AuxiliaryDataHash: () => AuxiliaryDataHash,
  AuxiliaryDataSet: () => AuxiliaryDataSet,
  BaseAddress: () => BaseAddress,
  BigInt: () => BigInt2,
  BigNum: () => BigNum,
  Bip32PrivateKey: () => Bip32PrivateKey,
  Bip32PublicKey: () => Bip32PublicKey,
  Block: () => Block,
  BlockHash: () => BlockHash,
  BootstrapWitness: () => BootstrapWitness,
  BootstrapWitnesses: () => BootstrapWitnesses,
  ByronAddress: () => ByronAddress,
  Certificate: () => Certificate,
  CertificateKind: () => CertificateKind,
  Certificates: () => Certificates,
  ConstrPlutusData: () => ConstrPlutusData,
  CostModel: () => CostModel,
  Costmdls: () => Costmdls,
  DNSRecordAorAAAA: () => DNSRecordAorAAAA,
  DNSRecordSRV: () => DNSRecordSRV,
  DataHash: () => DataHash,
  Ed25519KeyHash: () => Ed25519KeyHash,
  Ed25519KeyHashes: () => Ed25519KeyHashes,
  Ed25519Signature: () => Ed25519Signature,
  EnterpriseAddress: () => EnterpriseAddress,
  ExUnitPrices: () => ExUnitPrices,
  ExUnits: () => ExUnits,
  GeneralTransactionMetadata: () => GeneralTransactionMetadata,
  GenesisDelegateHash: () => GenesisDelegateHash,
  GenesisHash: () => GenesisHash,
  GenesisHashes: () => GenesisHashes,
  GenesisKeyDelegation: () => GenesisKeyDelegation,
  Header: () => Header,
  HeaderBody: () => HeaderBody,
  Int: () => Int,
  Ipv4: () => Ipv4,
  Ipv6: () => Ipv6,
  KESSignature: () => KESSignature,
  KESVKey: () => KESVKey,
  Language: () => Language,
  LanguageKind: () => LanguageKind,
  Languages: () => Languages,
  LegacyDaedalusPrivateKey: () => LegacyDaedalusPrivateKey,
  LinearFee: () => LinearFee,
  MIRKind: () => MIRKind,
  MIRPot: () => MIRPot,
  MIRToStakeCredentials: () => MIRToStakeCredentials,
  MetadataJsonSchema: () => MetadataJsonSchema,
  MetadataList: () => MetadataList,
  MetadataMap: () => MetadataMap,
  Mint: () => Mint,
  MintAssets: () => MintAssets,
  MoveInstantaneousReward: () => MoveInstantaneousReward,
  MoveInstantaneousRewardsCert: () => MoveInstantaneousRewardsCert,
  MultiAsset: () => MultiAsset,
  MultiHostName: () => MultiHostName,
  NativeScript: () => NativeScript,
  NativeScriptKind: () => NativeScriptKind,
  NativeScripts: () => NativeScripts,
  NetworkId: () => NetworkId,
  NetworkIdKind: () => NetworkIdKind,
  NetworkInfo: () => NetworkInfo,
  Nonce: () => Nonce,
  OperationalCert: () => OperationalCert,
  PlutusData: () => PlutusData,
  PlutusDataKind: () => PlutusDataKind,
  PlutusList: () => PlutusList,
  PlutusMap: () => PlutusMap,
  PlutusScript: () => PlutusScript,
  PlutusScripts: () => PlutusScripts,
  Pointer: () => Pointer,
  PointerAddress: () => PointerAddress,
  PoolMetadata: () => PoolMetadata,
  PoolMetadataHash: () => PoolMetadataHash,
  PoolParams: () => PoolParams,
  PoolRegistration: () => PoolRegistration,
  PoolRetirement: () => PoolRetirement,
  PrivateKey: () => PrivateKey,
  ProposedProtocolParameterUpdates: () => ProposedProtocolParameterUpdates,
  ProtocolParamUpdate: () => ProtocolParamUpdate,
  ProtocolVersion: () => ProtocolVersion,
  ProtocolVersions: () => ProtocolVersions,
  PublicKey: () => PublicKey,
  PublicKeys: () => PublicKeys,
  Redeemer: () => Redeemer,
  RedeemerTag: () => RedeemerTag,
  RedeemerTagKind: () => RedeemerTagKind,
  Redeemers: () => Redeemers,
  Relay: () => Relay,
  RelayKind: () => RelayKind,
  Relays: () => Relays,
  RewardAddress: () => RewardAddress,
  RewardAddresses: () => RewardAddresses,
  ScriptAll: () => ScriptAll,
  ScriptAny: () => ScriptAny,
  ScriptDataHash: () => ScriptDataHash,
  ScriptHash: () => ScriptHash,
  ScriptHashNamespace: () => ScriptHashNamespace,
  ScriptHashes: () => ScriptHashes,
  ScriptNOfK: () => ScriptNOfK,
  ScriptPubkey: () => ScriptPubkey,
  SingleHostAddr: () => SingleHostAddr,
  SingleHostName: () => SingleHostName,
  StakeCredential: () => StakeCredential,
  StakeCredentials: () => StakeCredentials,
  StakeDelegation: () => StakeDelegation,
  StakeDeregistration: () => StakeDeregistration,
  StakeRegistration: () => StakeRegistration,
  Strings: () => Strings,
  TimelockExpiry: () => TimelockExpiry,
  TimelockStart: () => TimelockStart,
  Transaction: () => Transaction,
  TransactionBodies: () => TransactionBodies,
  TransactionBody: () => TransactionBody,
  TransactionBuilder: () => TransactionBuilder,
  TransactionHash: () => TransactionHash,
  TransactionInput: () => TransactionInput,
  TransactionInputs: () => TransactionInputs,
  TransactionMetadatum: () => TransactionMetadatum,
  TransactionMetadatumKind: () => TransactionMetadatumKind,
  TransactionMetadatumLabels: () => TransactionMetadatumLabels,
  TransactionOutput: () => TransactionOutput,
  TransactionOutputs: () => TransactionOutputs,
  TransactionUnspentOutput: () => TransactionUnspentOutput,
  TransactionWitnessSet: () => TransactionWitnessSet,
  TransactionWitnessSets: () => TransactionWitnessSets,
  URL: () => URL2,
  UnitInterval: () => UnitInterval,
  Update: () => Update,
  VRFCert: () => VRFCert,
  VRFKeyHash: () => VRFKeyHash,
  VRFVKey: () => VRFVKey,
  Value: () => Value,
  Vkey: () => Vkey,
  Vkeys: () => Vkeys,
  Vkeywitness: () => Vkeywitness,
  Vkeywitnesses: () => Vkeywitnesses,
  Withdrawals: () => Withdrawals,
  __wbg_call_f54d3a6dadb199ca: () => __wbg_call_f54d3a6dadb199ca,
  __wbg_crypto_1e4302b85d4f64a2: () => __wbg_crypto_1e4302b85d4f64a2,
  __wbg_getRandomValues_1b4ba144162a5c9e: () => __wbg_getRandomValues_1b4ba144162a5c9e,
  __wbg_getRandomValues_1ef11e888e5228e9: () => __wbg_getRandomValues_1ef11e888e5228e9,
  __wbg_new_3a746f2619705add: () => __wbg_new_3a746f2619705add,
  __wbg_randomFillSync_1b52c8482374c55b: () => __wbg_randomFillSync_1b52c8482374c55b,
  __wbg_require_6461b1e9a0d7c34a: () => __wbg_require_6461b1e9a0d7c34a,
  __wbg_self_ac379e780a0d8b94: () => __wbg_self_ac379e780a0d8b94,
  __wbindgen_debug_string: () => __wbindgen_debug_string,
  __wbindgen_is_undefined: () => __wbindgen_is_undefined,
  __wbindgen_jsval_eq: () => __wbindgen_jsval_eq,
  __wbindgen_object_drop_ref: () => __wbindgen_object_drop_ref,
  __wbindgen_rethrow: () => __wbindgen_rethrow,
  __wbindgen_string_get: () => __wbindgen_string_get,
  __wbindgen_string_new: () => __wbindgen_string_new,
  __wbindgen_throw: () => __wbindgen_throw,
  decode_arbitrary_bytes_from_metadatum: () => decode_arbitrary_bytes_from_metadatum2,
  decode_metadatum_to_json_str: () => decode_metadatum_to_json_str2,
  decrypt_with_password: () => decrypt_with_password2,
  encode_arbitrary_bytes_as_metadatum: () => encode_arbitrary_bytes_as_metadatum2,
  encode_json_str_to_metadatum: () => encode_json_str_to_metadatum2,
  encrypt_with_password: () => encrypt_with_password2,
  get_deposit: () => get_deposit2,
  get_implicit_input: () => get_implicit_input2,
  hash_auxiliary_data: () => hash_auxiliary_data2,
  hash_plutus_data: () => hash_plutus_data2,
  hash_script_data: () => hash_script_data2,
  hash_transaction: () => hash_transaction2,
  make_daedalus_bootstrap_witness: () => make_daedalus_bootstrap_witness2,
  make_icarus_bootstrap_witness: () => make_icarus_bootstrap_witness2,
  make_vkey_witness: () => make_vkey_witness2,
  min_ada_required: () => min_ada_required2,
  min_fee: () => min_fee2
});
function getObject(idx) {
  return heap[idx];
}
function dropObject(idx) {
  if (idx < 36)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(memory.buffer);
  }
  return cachegetUint8Memory0;
}
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function addHeapObject(obj) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length);
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code = arg.charCodeAt(offset);
    if (code > 127)
      break;
    mem[ptr + offset] = code;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(memory.buffer);
  }
  return cachegetInt32Memory0;
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description = val.description;
    if (description == null) {
      return "Symbol";
    } else {
      return `Symbol(${description})`;
    }
  }
  if (type == "function") {
    const name = val.name;
    if (typeof name == "string" && name.length > 0) {
      return `Function(${name})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length = val.length;
    let debug2 = "[";
    if (length > 0) {
      debug2 += debugString(val[0]);
    }
    for (let i = 1; i < length; i++) {
      debug2 += ", " + debugString(val[i]);
    }
    debug2 += "]";
    return debug2;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1);
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function _assertClass(instance2, klass) {
  if (!(instance2 instanceof klass)) {
    throw new Error(`expected instance of ${klass.name}`);
  }
  return instance2.ptr;
}
function getUint32Memory0() {
  if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== memory.buffer) {
    cachegetUint32Memory0 = new Uint32Array(memory.buffer);
  }
  return cachegetUint32Memory0;
}
function getArrayU32FromWasm0(ptr, len) {
  return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
function passArray32ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 4);
  getUint32Memory0().set(arg, ptr / 4);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function encode_arbitrary_bytes_as_metadatum2(bytes) {
  var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = encode_arbitrary_bytes_as_metadatum(ptr0, len0);
  return TransactionMetadatum.__wrap(ret);
}
function decode_arbitrary_bytes_from_metadatum2(metadata) {
  try {
    const retptr = __wbindgen_add_to_stack_pointer(-16);
    _assertClass(metadata, TransactionMetadatum);
    decode_arbitrary_bytes_from_metadatum(retptr, metadata.ptr);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v0 = getArrayU8FromWasm0(r0, r1).slice();
    __wbindgen_free(r0, r1 * 1);
    return v0;
  } finally {
    __wbindgen_add_to_stack_pointer(16);
  }
}
function encode_json_str_to_metadatum2(json, schema) {
  var ptr0 = passStringToWasm0(json, __wbindgen_malloc, __wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  var ret = encode_json_str_to_metadatum(ptr0, len0, schema);
  return TransactionMetadatum.__wrap(ret);
}
function decode_metadatum_to_json_str2(metadatum, schema) {
  try {
    const retptr = __wbindgen_add_to_stack_pointer(-16);
    _assertClass(metadatum, TransactionMetadatum);
    decode_metadatum_to_json_str(retptr, metadatum.ptr, schema);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    __wbindgen_add_to_stack_pointer(16);
    __wbindgen_free(r0, r1);
  }
}
function encrypt_with_password2(password, salt, nonce, data2) {
  try {
    const retptr = __wbindgen_add_to_stack_pointer(-16);
    var ptr0 = passStringToWasm0(password, __wbindgen_malloc, __wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(salt, __wbindgen_malloc, __wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    var ptr2 = passStringToWasm0(nonce, __wbindgen_malloc, __wbindgen_realloc);
    var len2 = WASM_VECTOR_LEN;
    var ptr3 = passStringToWasm0(data2, __wbindgen_malloc, __wbindgen_realloc);
    var len3 = WASM_VECTOR_LEN;
    encrypt_with_password(retptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    __wbindgen_add_to_stack_pointer(16);
    __wbindgen_free(r0, r1);
  }
}
function decrypt_with_password2(password, data2) {
  try {
    const retptr = __wbindgen_add_to_stack_pointer(-16);
    var ptr0 = passStringToWasm0(password, __wbindgen_malloc, __wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(data2, __wbindgen_malloc, __wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    decrypt_with_password(retptr, ptr0, len0, ptr1, len1);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    return getStringFromWasm0(r0, r1);
  } finally {
    __wbindgen_add_to_stack_pointer(16);
    __wbindgen_free(r0, r1);
  }
}
function min_fee2(tx, linear_fee) {
  _assertClass(tx, Transaction);
  _assertClass(linear_fee, LinearFee);
  var ret = min_fee(tx.ptr, linear_fee.ptr);
  return BigNum.__wrap(ret);
}
function make_daedalus_bootstrap_witness2(tx_body_hash, addr, key) {
  _assertClass(tx_body_hash, TransactionHash);
  _assertClass(addr, ByronAddress);
  _assertClass(key, LegacyDaedalusPrivateKey);
  var ret = make_daedalus_bootstrap_witness(tx_body_hash.ptr, addr.ptr, key.ptr);
  return BootstrapWitness.__wrap(ret);
}
function make_icarus_bootstrap_witness2(tx_body_hash, addr, key) {
  _assertClass(tx_body_hash, TransactionHash);
  _assertClass(addr, ByronAddress);
  _assertClass(key, Bip32PrivateKey);
  var ret = make_icarus_bootstrap_witness(tx_body_hash.ptr, addr.ptr, key.ptr);
  return BootstrapWitness.__wrap(ret);
}
function make_vkey_witness2(tx_body_hash, sk) {
  _assertClass(tx_body_hash, TransactionHash);
  _assertClass(sk, PrivateKey);
  var ret = make_vkey_witness(tx_body_hash.ptr, sk.ptr);
  return Vkeywitness.__wrap(ret);
}
function hash_auxiliary_data2(auxiliary_data) {
  _assertClass(auxiliary_data, AuxiliaryData);
  var ret = hash_auxiliary_data(auxiliary_data.ptr);
  return AuxiliaryDataHash.__wrap(ret);
}
function hash_transaction2(tx_body) {
  _assertClass(tx_body, TransactionBody);
  var ret = hash_transaction(tx_body.ptr);
  return TransactionHash.__wrap(ret);
}
function hash_plutus_data2(plutus_data) {
  _assertClass(plutus_data, PlutusData);
  var ret = hash_plutus_data(plutus_data.ptr);
  return DataHash.__wrap(ret);
}
function hash_script_data2(redeemers, cost_models, datums) {
  _assertClass(redeemers, Redeemers);
  _assertClass(cost_models, Costmdls);
  let ptr0 = 0;
  if (!isLikeNone(datums)) {
    _assertClass(datums, PlutusList);
    ptr0 = datums.ptr;
    datums.ptr = 0;
  }
  var ret = hash_script_data(redeemers.ptr, cost_models.ptr, ptr0);
  return ScriptDataHash.__wrap(ret);
}
function get_implicit_input2(txbody, pool_deposit, key_deposit) {
  _assertClass(txbody, TransactionBody);
  _assertClass(pool_deposit, BigNum);
  _assertClass(key_deposit, BigNum);
  var ret = get_implicit_input(txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
  return Value.__wrap(ret);
}
function get_deposit2(txbody, pool_deposit, key_deposit) {
  _assertClass(txbody, TransactionBody);
  _assertClass(pool_deposit, BigNum);
  _assertClass(key_deposit, BigNum);
  var ret = get_deposit(txbody.ptr, pool_deposit.ptr, key_deposit.ptr);
  return BigNum.__wrap(ret);
}
function min_ada_required2(assets, minimum_utxo_val) {
  _assertClass(assets, Value);
  _assertClass(minimum_utxo_val, BigNum);
  var ret = min_ada_required(assets.ptr, minimum_utxo_val.ptr);
  return BigNum.__wrap(ret);
}
function __wbindgen_object_drop_ref(arg0) {
  takeObject(arg0);
}
function __wbindgen_string_new(arg0, arg1) {
  var ret = getStringFromWasm0(arg0, arg1);
  return addHeapObject(ret);
}
function __wbg_new_3a746f2619705add(arg0, arg1) {
  var ret = new Function(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
function __wbg_call_f54d3a6dadb199ca(arg0, arg1) {
  var ret = getObject(arg0).call(getObject(arg1));
  return addHeapObject(ret);
}
function __wbindgen_jsval_eq(arg0, arg1) {
  var ret = getObject(arg0) === getObject(arg1);
  return ret;
}
function __wbg_self_ac379e780a0d8b94(arg0) {
  var ret = getObject(arg0).self;
  return addHeapObject(ret);
}
function __wbg_crypto_1e4302b85d4f64a2(arg0) {
  var ret = getObject(arg0).crypto;
  return addHeapObject(ret);
}
function __wbindgen_is_undefined(arg0) {
  var ret = getObject(arg0) === void 0;
  return ret;
}
function __wbg_getRandomValues_1b4ba144162a5c9e(arg0) {
  var ret = getObject(arg0).getRandomValues;
  return addHeapObject(ret);
}
function __wbg_require_6461b1e9a0d7c34a(arg0, arg1) {
  var ret = __require(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
function __wbg_randomFillSync_1b52c8482374c55b(arg0, arg1, arg2) {
  getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
}
function __wbg_getRandomValues_1ef11e888e5228e9(arg0, arg1, arg2) {
  getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
}
function __wbindgen_string_get(arg0, arg1) {
  const obj = getObject(arg1);
  var ret = typeof obj === "string" ? obj : void 0;
  var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, __wbindgen_malloc, __wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
function __wbindgen_debug_string(arg0, arg1) {
  var ret = debugString(getObject(arg1));
  var ptr0 = passStringToWasm0(ret, __wbindgen_malloc, __wbindgen_realloc);
  var len0 = WASM_VECTOR_LEN;
  getInt32Memory0()[arg0 / 4 + 1] = len0;
  getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
function __wbindgen_rethrow(arg0) {
  throw takeObject(arg0);
}
var heap, heap_next, cachedTextDecoder, cachegetUint8Memory0, WASM_VECTOR_LEN, cachedTextEncoder, encodeString, cachegetInt32Memory0, cachegetUint32Memory0, CertificateKind, MIRPot, MIRKind, RelayKind, NativeScriptKind, ScriptHashNamespace, NetworkIdKind, TransactionMetadatumKind, MetadataJsonSchema, LanguageKind, PlutusDataKind, RedeemerTagKind, Address, AssetName, AssetNames, Assets, AuxiliaryData, AuxiliaryDataHash, AuxiliaryDataSet, BaseAddress, BigInt2, BigNum, Bip32PrivateKey, Bip32PublicKey, Block, BlockHash, BootstrapWitness, BootstrapWitnesses, ByronAddress, Certificate, Certificates, ConstrPlutusData, CostModel, Costmdls, DNSRecordAorAAAA, DNSRecordSRV, DataHash, Ed25519KeyHash, Ed25519KeyHashes, Ed25519Signature, EnterpriseAddress, ExUnitPrices, ExUnits, GeneralTransactionMetadata, GenesisDelegateHash, GenesisHash, GenesisHashes, GenesisKeyDelegation, Header, HeaderBody, Int, Ipv4, Ipv6, KESSignature, KESVKey, Language, Languages, LegacyDaedalusPrivateKey, LinearFee, MIRToStakeCredentials, MetadataList, MetadataMap, Mint, MintAssets, MoveInstantaneousReward, MoveInstantaneousRewardsCert, MultiAsset, MultiHostName, NativeScript, NativeScripts, NetworkId, NetworkInfo, Nonce, OperationalCert, PlutusData, PlutusList, PlutusMap, PlutusScript, PlutusScripts, Pointer, PointerAddress, PoolMetadata, PoolMetadataHash, PoolParams, PoolRegistration, PoolRetirement, PrivateKey, ProposedProtocolParameterUpdates, ProtocolParamUpdate, ProtocolVersion, ProtocolVersions, PublicKey, PublicKeys, Redeemer, RedeemerTag, Redeemers, Relay, Relays, RewardAddress, RewardAddresses, ScriptAll, ScriptAny, ScriptDataHash, ScriptHash, ScriptHashes, ScriptNOfK, ScriptPubkey, SingleHostAddr, SingleHostName, StakeCredential, StakeCredentials, StakeDelegation, StakeDeregistration, StakeRegistration, Strings, TimelockExpiry, TimelockStart, Transaction, TransactionBodies, TransactionBody, TransactionBuilder, TransactionHash, TransactionInput, TransactionInputs, TransactionMetadatum, TransactionMetadatumLabels, TransactionOutput, TransactionOutputs, TransactionUnspentOutput, TransactionWitnessSet, TransactionWitnessSets, URL2, UnitInterval, Update, VRFCert, VRFKeyHash, VRFVKey, Value, Vkey, Vkeys, Vkeywitness, Vkeywitnesses, Withdrawals;
var init_cardano_serialization_lib_bg3 = __esm({
  async "node_modules/@emurgo/cardano-serialization-lib-browser/cardano_serialization_lib_bg.js"() {
    await init_cardano_serialization_lib_bg2();
    heap = new Array(32).fill(void 0);
    heap.push(void 0, null, true, false);
    heap_next = heap.length;
    cachedTextDecoder = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true });
    cachedTextDecoder.decode();
    cachegetUint8Memory0 = null;
    WASM_VECTOR_LEN = 0;
    cachedTextEncoder = new TextEncoder("utf-8");
    encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
      return cachedTextEncoder.encodeInto(arg, view);
    } : function(arg, view) {
      const buf = cachedTextEncoder.encode(arg);
      view.set(buf);
      return {
        read: arg.length,
        written: buf.length
      };
    };
    cachegetInt32Memory0 = null;
    cachegetUint32Memory0 = null;
    CertificateKind = Object.freeze({ StakeRegistration: 0, "0": "StakeRegistration", StakeDeregistration: 1, "1": "StakeDeregistration", StakeDelegation: 2, "2": "StakeDelegation", PoolRegistration: 3, "3": "PoolRegistration", PoolRetirement: 4, "4": "PoolRetirement", GenesisKeyDelegation: 5, "5": "GenesisKeyDelegation", MoveInstantaneousRewardsCert: 6, "6": "MoveInstantaneousRewardsCert" });
    MIRPot = Object.freeze({ Reserves: 0, "0": "Reserves", Treasury: 1, "1": "Treasury" });
    MIRKind = Object.freeze({ ToOtherPot: 0, "0": "ToOtherPot", ToStakeCredentials: 1, "1": "ToStakeCredentials" });
    RelayKind = Object.freeze({ SingleHostAddr: 0, "0": "SingleHostAddr", SingleHostName: 1, "1": "SingleHostName", MultiHostName: 2, "2": "MultiHostName" });
    NativeScriptKind = Object.freeze({ ScriptPubkey: 0, "0": "ScriptPubkey", ScriptAll: 1, "1": "ScriptAll", ScriptAny: 2, "2": "ScriptAny", ScriptNOfK: 3, "3": "ScriptNOfK", TimelockStart: 4, "4": "TimelockStart", TimelockExpiry: 5, "5": "TimelockExpiry" });
    ScriptHashNamespace = Object.freeze({ NativeScript: 0, "0": "NativeScript" });
    NetworkIdKind = Object.freeze({ Testnet: 0, "0": "Testnet", Mainnet: 1, "1": "Mainnet" });
    TransactionMetadatumKind = Object.freeze({ MetadataMap: 0, "0": "MetadataMap", MetadataList: 1, "1": "MetadataList", Int: 2, "2": "Int", Bytes: 3, "3": "Bytes", Text: 4, "4": "Text" });
    MetadataJsonSchema = Object.freeze({ NoConversions: 0, "0": "NoConversions", BasicConversions: 1, "1": "BasicConversions", DetailedSchema: 2, "2": "DetailedSchema" });
    LanguageKind = Object.freeze({ PlutusV1: 0, "0": "PlutusV1" });
    PlutusDataKind = Object.freeze({ ConstrPlutusData: 0, "0": "ConstrPlutusData", Map: 1, "1": "Map", List: 2, "2": "List", Integer: 3, "3": "Integer", Bytes: 4, "4": "Bytes" });
    RedeemerTagKind = Object.freeze({ Spend: 0, "0": "Spend", Mint: 1, "1": "Mint", Cert: 2, "2": "Cert", Reward: 3, "3": "Reward" });
    Address = class {
      static __wrap(ptr) {
        const obj = Object.create(Address.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_address_free(ptr);
      }
      static from_bytes(data2) {
        var ptr0 = passArray8ToWasm0(data2, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = address_from_bytes(ptr0, len0);
        return Address.__wrap(ret);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          address_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = isLikeNone(prefix2) ? 0 : passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          address_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = address_from_bech32(ptr0, len0);
        return Address.__wrap(ret);
      }
      network_id() {
        var ret = address_network_id(this.ptr);
        return ret;
      }
    };
    AssetName = class {
      static __wrap(ptr) {
        const obj = Object.create(AssetName.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_assetname_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          assetname_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = assetname_from_bytes(ptr0, len0);
        return AssetName.__wrap(ret);
      }
      static new(name) {
        var ptr0 = passArray8ToWasm0(name, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = assetname_new(ptr0, len0);
        return AssetName.__wrap(ret);
      }
      name() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          assetname_name(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    AssetNames = class {
      static __wrap(ptr) {
        const obj = Object.create(AssetNames.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_assetnames_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          assetnames_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = assetnames_from_bytes(ptr0, len0);
        return AssetNames.__wrap(ret);
      }
      static new() {
        var ret = assetnames_new();
        return AssetNames.__wrap(ret);
      }
      len() {
        var ret = assetnames_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = assetnames_get(this.ptr, index);
        return AssetName.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, AssetName);
        assetnames_add(this.ptr, elem.ptr);
      }
    };
    Assets = class {
      static __wrap(ptr) {
        const obj = Object.create(Assets.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_assets_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          assets_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = assets_from_bytes(ptr0, len0);
        return Assets.__wrap(ret);
      }
      static new() {
        var ret = assets_new();
        return Assets.__wrap(ret);
      }
      len() {
        var ret = assets_len(this.ptr);
        return ret >>> 0;
      }
      insert(key, value) {
        _assertClass(key, AssetName);
        _assertClass(value, BigNum);
        var ret = assets_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      get(key) {
        _assertClass(key, AssetName);
        var ret = assets_get(this.ptr, key.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      keys() {
        var ret = assets_keys(this.ptr);
        return AssetNames.__wrap(ret);
      }
    };
    AuxiliaryData = class {
      static __wrap(ptr) {
        const obj = Object.create(AuxiliaryData.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_auxiliarydata_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          auxiliarydata_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = auxiliarydata_from_bytes(ptr0, len0);
        return AuxiliaryData.__wrap(ret);
      }
      static new() {
        var ret = auxiliarydata_new();
        return AuxiliaryData.__wrap(ret);
      }
      metadata() {
        var ret = auxiliarydata_metadata(this.ptr);
        return ret === 0 ? void 0 : GeneralTransactionMetadata.__wrap(ret);
      }
      set_metadata(metadata) {
        _assertClass(metadata, GeneralTransactionMetadata);
        auxiliarydata_set_metadata(this.ptr, metadata.ptr);
      }
      native_scripts() {
        var ret = auxiliarydata_native_scripts(this.ptr);
        return ret === 0 ? void 0 : NativeScripts.__wrap(ret);
      }
      set_native_scripts(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        auxiliarydata_set_native_scripts(this.ptr, native_scripts.ptr);
      }
      plutus_scripts() {
        var ret = auxiliarydata_plutus_scripts(this.ptr);
        return ret === 0 ? void 0 : PlutusScripts.__wrap(ret);
      }
      set_plutus_scripts(plutus_scripts) {
        _assertClass(plutus_scripts, PlutusScripts);
        auxiliarydata_set_plutus_scripts(this.ptr, plutus_scripts.ptr);
      }
    };
    AuxiliaryDataHash = class {
      static __wrap(ptr) {
        const obj = Object.create(AuxiliaryDataHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_auxiliarydatahash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          auxiliarydatahash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          auxiliarydatahash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = auxiliarydatahash_from_bech32(ptr0, len0);
        return AuxiliaryDataHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = auxiliarydatahash_from_bytes(ptr0, len0);
        return AuxiliaryDataHash.__wrap(ret);
      }
    };
    AuxiliaryDataSet = class {
      static __wrap(ptr) {
        const obj = Object.create(AuxiliaryDataSet.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_auxiliarydataset_free(ptr);
      }
      static new() {
        var ret = auxiliarydataset_new();
        return AuxiliaryDataSet.__wrap(ret);
      }
      len() {
        var ret = auxiliarydataset_len(this.ptr);
        return ret >>> 0;
      }
      insert(tx_index, data2) {
        _assertClass(data2, AuxiliaryData);
        var ret = auxiliarydataset_insert(this.ptr, tx_index, data2.ptr);
        return ret === 0 ? void 0 : AuxiliaryData.__wrap(ret);
      }
      get(tx_index) {
        var ret = auxiliarydataset_get(this.ptr, tx_index);
        return ret === 0 ? void 0 : AuxiliaryData.__wrap(ret);
      }
      indices() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          auxiliarydataset_indices(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU32FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 4);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    BaseAddress = class {
      static __wrap(ptr) {
        const obj = Object.create(BaseAddress.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_baseaddress_free(ptr);
      }
      static new(network, payment, stake) {
        _assertClass(payment, StakeCredential);
        _assertClass(stake, StakeCredential);
        var ret = baseaddress_new(network, payment.ptr, stake.ptr);
        return BaseAddress.__wrap(ret);
      }
      payment_cred() {
        var ret = baseaddress_payment_cred(this.ptr);
        return StakeCredential.__wrap(ret);
      }
      stake_cred() {
        var ret = baseaddress_stake_cred(this.ptr);
        return StakeCredential.__wrap(ret);
      }
      to_address() {
        var ret = baseaddress_to_address(this.ptr);
        return Address.__wrap(ret);
      }
      static from_address(addr) {
        _assertClass(addr, Address);
        var ret = baseaddress_from_address(addr.ptr);
        return ret === 0 ? void 0 : BaseAddress.__wrap(ret);
      }
    };
    BigInt2 = class {
      static __wrap(ptr) {
        const obj = Object.create(BigInt2.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_bigint_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bigint_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = bigint_from_bytes(ptr0, len0);
        return BigInt2.__wrap(ret);
      }
      as_u64() {
        var ret = bigint_as_u64(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      static from_str(text) {
        var ptr0 = passStringToWasm0(text, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = bigint_from_str(ptr0, len0);
        return BigInt2.__wrap(ret);
      }
      to_str() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bigint_to_str(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
    };
    BigNum = class {
      static __wrap(ptr) {
        const obj = Object.create(BigNum.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_bignum_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bignum_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = bignum_from_bytes(ptr0, len0);
        return BigNum.__wrap(ret);
      }
      static from_str(string) {
        var ptr0 = passStringToWasm0(string, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = bignum_from_str(ptr0, len0);
        return BigNum.__wrap(ret);
      }
      to_str() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bignum_to_str(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static zero() {
        var ret = bignum_zero();
        return BigNum.__wrap(ret);
      }
      checked_mul(other) {
        _assertClass(other, BigNum);
        var ret = bignum_checked_mul(this.ptr, other.ptr);
        return BigNum.__wrap(ret);
      }
      checked_add(other) {
        _assertClass(other, BigNum);
        var ret = bignum_checked_add(this.ptr, other.ptr);
        return BigNum.__wrap(ret);
      }
      checked_sub(other) {
        _assertClass(other, BigNum);
        var ret = bignum_checked_sub(this.ptr, other.ptr);
        return BigNum.__wrap(ret);
      }
      clamped_sub(other) {
        _assertClass(other, BigNum);
        var ret = bignum_clamped_sub(this.ptr, other.ptr);
        return BigNum.__wrap(ret);
      }
      compare(rhs_value) {
        _assertClass(rhs_value, BigNum);
        var ret = bignum_compare(this.ptr, rhs_value.ptr);
        return ret;
      }
    };
    Bip32PrivateKey = class {
      static __wrap(ptr) {
        const obj = Object.create(Bip32PrivateKey.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_bip32privatekey_free(ptr);
      }
      derive(index) {
        var ret = bip32privatekey_derive(this.ptr, index);
        return Bip32PrivateKey.__wrap(ret);
      }
      static from_128_xprv(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = bip32privatekey_from_128_xprv(ptr0, len0);
        return Bip32PrivateKey.__wrap(ret);
      }
      to_128_xprv() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bip32privatekey_to_128_xprv(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static generate_ed25519_bip32() {
        var ret = bip32privatekey_generate_ed25519_bip32();
        return Bip32PrivateKey.__wrap(ret);
      }
      to_raw_key() {
        var ret = bip32privatekey_to_raw_key(this.ptr);
        return PrivateKey.__wrap(ret);
      }
      to_public() {
        var ret = bip32privatekey_to_public(this.ptr);
        return Bip32PublicKey.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = bip32privatekey_from_bytes(ptr0, len0);
        return Bip32PrivateKey.__wrap(ret);
      }
      as_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bip32privatekey_as_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = bip32privatekey_from_bech32(ptr0, len0);
        return Bip32PrivateKey.__wrap(ret);
      }
      to_bech32() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bip32privatekey_to_bech32(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bip39_entropy(entropy, password) {
        var ptr0 = passArray8ToWasm0(entropy, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(password, __wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = bip32privatekey_from_bip39_entropy(ptr0, len0, ptr1, len1);
        return Bip32PrivateKey.__wrap(ret);
      }
      chaincode() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bip32privatekey_chaincode(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    Bip32PublicKey = class {
      static __wrap(ptr) {
        const obj = Object.create(Bip32PublicKey.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_bip32publickey_free(ptr);
      }
      derive(index) {
        var ret = bip32publickey_derive(this.ptr, index);
        return Bip32PublicKey.__wrap(ret);
      }
      to_raw_key() {
        var ret = bip32publickey_to_raw_key(this.ptr);
        return PublicKey.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = bip32publickey_from_bytes(ptr0, len0);
        return Bip32PublicKey.__wrap(ret);
      }
      as_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bip32publickey_as_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = bip32publickey_from_bech32(ptr0, len0);
        return Bip32PublicKey.__wrap(ret);
      }
      to_bech32() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bip32publickey_to_bech32(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      chaincode() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bip32publickey_chaincode(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    Block = class {
      static __wrap(ptr) {
        const obj = Object.create(Block.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_block_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          block_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = block_from_bytes(ptr0, len0);
        return Block.__wrap(ret);
      }
      header() {
        var ret = block_header(this.ptr);
        return Header.__wrap(ret);
      }
      transaction_bodies() {
        var ret = block_transaction_bodies(this.ptr);
        return TransactionBodies.__wrap(ret);
      }
      transaction_witness_sets() {
        var ret = block_transaction_witness_sets(this.ptr);
        return TransactionWitnessSets.__wrap(ret);
      }
      auxiliary_data_set() {
        var ret = block_auxiliary_data_set(this.ptr);
        return AuxiliaryDataSet.__wrap(ret);
      }
      invalid_transactions() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          block_invalid_transactions(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU32FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 4);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static new(header, transaction_bodies, transaction_witness_sets, auxiliary_data_set, invalid_transactions) {
        _assertClass(header, Header);
        _assertClass(transaction_bodies, TransactionBodies);
        _assertClass(transaction_witness_sets, TransactionWitnessSets);
        _assertClass(auxiliary_data_set, AuxiliaryDataSet);
        var ptr0 = passArray32ToWasm0(invalid_transactions, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = block_new(header.ptr, transaction_bodies.ptr, transaction_witness_sets.ptr, auxiliary_data_set.ptr, ptr0, len0);
        return Block.__wrap(ret);
      }
    };
    BlockHash = class {
      static __wrap(ptr) {
        const obj = Object.create(BlockHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_blockhash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          blockhash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          blockhash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = blockhash_from_bech32(ptr0, len0);
        return BlockHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = blockhash_from_bytes(ptr0, len0);
        return BlockHash.__wrap(ret);
      }
    };
    BootstrapWitness = class {
      static __wrap(ptr) {
        const obj = Object.create(BootstrapWitness.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_bootstrapwitness_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bootstrapwitness_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = bootstrapwitness_from_bytes(ptr0, len0);
        return BootstrapWitness.__wrap(ret);
      }
      vkey() {
        var ret = bootstrapwitness_vkey(this.ptr);
        return Vkey.__wrap(ret);
      }
      signature() {
        var ret = bootstrapwitness_signature(this.ptr);
        return Ed25519Signature.__wrap(ret);
      }
      chain_code() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bootstrapwitness_chain_code(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      attributes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          bootstrapwitness_attributes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static new(vkey, signature, chain_code, attributes) {
        _assertClass(vkey, Vkey);
        _assertClass(signature, Ed25519Signature);
        var ptr0 = passArray8ToWasm0(chain_code, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(attributes, __wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = bootstrapwitness_new(vkey.ptr, signature.ptr, ptr0, len0, ptr1, len1);
        return BootstrapWitness.__wrap(ret);
      }
    };
    BootstrapWitnesses = class {
      static __wrap(ptr) {
        const obj = Object.create(BootstrapWitnesses.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_bootstrapwitnesses_free(ptr);
      }
      static new() {
        var ret = bootstrapwitnesses_new();
        return BootstrapWitnesses.__wrap(ret);
      }
      len() {
        var ret = bootstrapwitnesses_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = bootstrapwitnesses_get(this.ptr, index);
        return BootstrapWitness.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, BootstrapWitness);
        bootstrapwitnesses_add(this.ptr, elem.ptr);
      }
    };
    ByronAddress = class {
      static __wrap(ptr) {
        const obj = Object.create(ByronAddress.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_byronaddress_free(ptr);
      }
      to_base58() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          byronaddress_to_base58(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          byronaddress_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = byronaddress_from_bytes(ptr0, len0);
        return ByronAddress.__wrap(ret);
      }
      byron_protocol_magic() {
        var ret = byronaddress_byron_protocol_magic(this.ptr);
        return ret >>> 0;
      }
      attributes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          byronaddress_attributes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      network_id() {
        var ret = byronaddress_network_id(this.ptr);
        return ret;
      }
      static from_base58(s) {
        var ptr0 = passStringToWasm0(s, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = byronaddress_from_base58(ptr0, len0);
        return ByronAddress.__wrap(ret);
      }
      static icarus_from_key(key, protocol_magic) {
        _assertClass(key, Bip32PublicKey);
        var ret = byronaddress_icarus_from_key(key.ptr, protocol_magic);
        return ByronAddress.__wrap(ret);
      }
      static is_valid(s) {
        var ptr0 = passStringToWasm0(s, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = byronaddress_is_valid(ptr0, len0);
        return ret !== 0;
      }
      to_address() {
        var ret = byronaddress_to_address(this.ptr);
        return Address.__wrap(ret);
      }
      static from_address(addr) {
        _assertClass(addr, Address);
        var ret = byronaddress_from_address(addr.ptr);
        return ret === 0 ? void 0 : ByronAddress.__wrap(ret);
      }
    };
    Certificate = class {
      static __wrap(ptr) {
        const obj = Object.create(Certificate.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_certificate_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          certificate_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = certificate_from_bytes(ptr0, len0);
        return Certificate.__wrap(ret);
      }
      static new_stake_registration(stake_registration) {
        _assertClass(stake_registration, StakeRegistration);
        var ret = certificate_new_stake_registration(stake_registration.ptr);
        return Certificate.__wrap(ret);
      }
      static new_stake_deregistration(stake_deregistration) {
        _assertClass(stake_deregistration, StakeDeregistration);
        var ret = certificate_new_stake_deregistration(stake_deregistration.ptr);
        return Certificate.__wrap(ret);
      }
      static new_stake_delegation(stake_delegation) {
        _assertClass(stake_delegation, StakeDelegation);
        var ret = certificate_new_stake_delegation(stake_delegation.ptr);
        return Certificate.__wrap(ret);
      }
      static new_pool_registration(pool_registration) {
        _assertClass(pool_registration, PoolRegistration);
        var ret = certificate_new_pool_registration(pool_registration.ptr);
        return Certificate.__wrap(ret);
      }
      static new_pool_retirement(pool_retirement) {
        _assertClass(pool_retirement, PoolRetirement);
        var ret = certificate_new_pool_retirement(pool_retirement.ptr);
        return Certificate.__wrap(ret);
      }
      static new_genesis_key_delegation(genesis_key_delegation) {
        _assertClass(genesis_key_delegation, GenesisKeyDelegation);
        var ret = certificate_new_genesis_key_delegation(genesis_key_delegation.ptr);
        return Certificate.__wrap(ret);
      }
      static new_move_instantaneous_rewards_cert(move_instantaneous_rewards_cert) {
        _assertClass(move_instantaneous_rewards_cert, MoveInstantaneousRewardsCert);
        var ret = certificate_new_move_instantaneous_rewards_cert(move_instantaneous_rewards_cert.ptr);
        return Certificate.__wrap(ret);
      }
      kind() {
        var ret = certificate_kind(this.ptr);
        return ret >>> 0;
      }
      as_stake_registration() {
        var ret = certificate_as_stake_registration(this.ptr);
        return ret === 0 ? void 0 : StakeRegistration.__wrap(ret);
      }
      as_stake_deregistration() {
        var ret = certificate_as_stake_deregistration(this.ptr);
        return ret === 0 ? void 0 : StakeDeregistration.__wrap(ret);
      }
      as_stake_delegation() {
        var ret = certificate_as_stake_delegation(this.ptr);
        return ret === 0 ? void 0 : StakeDelegation.__wrap(ret);
      }
      as_pool_registration() {
        var ret = certificate_as_pool_registration(this.ptr);
        return ret === 0 ? void 0 : PoolRegistration.__wrap(ret);
      }
      as_pool_retirement() {
        var ret = certificate_as_pool_retirement(this.ptr);
        return ret === 0 ? void 0 : PoolRetirement.__wrap(ret);
      }
      as_genesis_key_delegation() {
        var ret = certificate_as_genesis_key_delegation(this.ptr);
        return ret === 0 ? void 0 : GenesisKeyDelegation.__wrap(ret);
      }
      as_move_instantaneous_rewards_cert() {
        var ret = certificate_as_move_instantaneous_rewards_cert(this.ptr);
        return ret === 0 ? void 0 : MoveInstantaneousRewardsCert.__wrap(ret);
      }
    };
    Certificates = class {
      static __wrap(ptr) {
        const obj = Object.create(Certificates.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_certificates_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          certificates_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = certificates_from_bytes(ptr0, len0);
        return Certificates.__wrap(ret);
      }
      static new() {
        var ret = certificates_new();
        return Certificates.__wrap(ret);
      }
      len() {
        var ret = certificates_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = certificates_get(this.ptr, index);
        return Certificate.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, Certificate);
        certificates_add(this.ptr, elem.ptr);
      }
    };
    ConstrPlutusData = class {
      static __wrap(ptr) {
        const obj = Object.create(ConstrPlutusData.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_constrplutusdata_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          constrplutusdata_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = constrplutusdata_from_bytes(ptr0, len0);
        return ConstrPlutusData.__wrap(ret);
      }
      tag() {
        var ret = constrplutusdata_tag(this.ptr);
        return Int.__wrap(ret);
      }
      data() {
        var ret = constrplutusdata_data(this.ptr);
        return PlutusList.__wrap(ret);
      }
      static new(tag, data2) {
        _assertClass(tag, Int);
        var ptr0 = tag.ptr;
        tag.ptr = 0;
        _assertClass(data2, PlutusList);
        var ret = constrplutusdata_new(ptr0, data2.ptr);
        return ConstrPlutusData.__wrap(ret);
      }
    };
    CostModel = class {
      static __wrap(ptr) {
        const obj = Object.create(CostModel.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_costmodel_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          costmodel_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = costmodel_from_bytes(ptr0, len0);
        return CostModel.__wrap(ret);
      }
      static new() {
        var ret = costmodel_new();
        return CostModel.__wrap(ret);
      }
      set(operation, cost) {
        _assertClass(cost, Int);
        var ret = costmodel_set(this.ptr, operation, cost.ptr);
        return Int.__wrap(ret);
      }
      get(operation) {
        var ret = costmodel_get(this.ptr, operation);
        return Int.__wrap(ret);
      }
    };
    Costmdls = class {
      static __wrap(ptr) {
        const obj = Object.create(Costmdls.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_costmdls_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          costmdls_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = costmdls_from_bytes(ptr0, len0);
        return Costmdls.__wrap(ret);
      }
      static new() {
        var ret = costmdls_new();
        return Costmdls.__wrap(ret);
      }
      len() {
        var ret = costmdls_len(this.ptr);
        return ret >>> 0;
      }
      insert(key, value) {
        _assertClass(key, Language);
        _assertClass(value, CostModel);
        var ret = costmdls_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? void 0 : CostModel.__wrap(ret);
      }
      get(key) {
        _assertClass(key, Language);
        var ret = costmdls_get(this.ptr, key.ptr);
        return ret === 0 ? void 0 : CostModel.__wrap(ret);
      }
      keys() {
        var ret = costmdls_keys(this.ptr);
        return Languages.__wrap(ret);
      }
    };
    DNSRecordAorAAAA = class {
      static __wrap(ptr) {
        const obj = Object.create(DNSRecordAorAAAA.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_dnsrecordaoraaaa_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          dnsrecordaoraaaa_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = dnsrecordaoraaaa_from_bytes(ptr0, len0);
        return DNSRecordAorAAAA.__wrap(ret);
      }
      static new(dns_name) {
        var ptr0 = passStringToWasm0(dns_name, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = dnsrecordaoraaaa_new(ptr0, len0);
        return DNSRecordAorAAAA.__wrap(ret);
      }
      record() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          dnsrecordaoraaaa_record(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
    };
    DNSRecordSRV = class {
      static __wrap(ptr) {
        const obj = Object.create(DNSRecordSRV.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_dnsrecordsrv_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          dnsrecordsrv_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = dnsrecordsrv_from_bytes(ptr0, len0);
        return DNSRecordSRV.__wrap(ret);
      }
      static new(dns_name) {
        var ptr0 = passStringToWasm0(dns_name, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = dnsrecordsrv_new(ptr0, len0);
        return DNSRecordSRV.__wrap(ret);
      }
      record() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          dnsrecordsrv_record(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
    };
    DataHash = class {
      static __wrap(ptr) {
        const obj = Object.create(DataHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_datahash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          datahash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          datahash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = datahash_from_bech32(ptr0, len0);
        return DataHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = datahash_from_bytes(ptr0, len0);
        return DataHash.__wrap(ret);
      }
    };
    Ed25519KeyHash = class {
      static __wrap(ptr) {
        const obj = Object.create(Ed25519KeyHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_ed25519keyhash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          ed25519keyhash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          ed25519keyhash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = ed25519keyhash_from_bech32(ptr0, len0);
        return Ed25519KeyHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = ed25519keyhash_from_bytes(ptr0, len0);
        return Ed25519KeyHash.__wrap(ret);
      }
    };
    Ed25519KeyHashes = class {
      static __wrap(ptr) {
        const obj = Object.create(Ed25519KeyHashes.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_ed25519keyhashes_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          ed25519keyhashes_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = ed25519keyhashes_from_bytes(ptr0, len0);
        return Ed25519KeyHashes.__wrap(ret);
      }
      static new() {
        var ret = ed25519keyhashes_new();
        return Ed25519KeyHashes.__wrap(ret);
      }
      len() {
        var ret = ed25519keyhashes_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = ed25519keyhashes_get(this.ptr, index);
        return Ed25519KeyHash.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, Ed25519KeyHash);
        ed25519keyhashes_add(this.ptr, elem.ptr);
      }
    };
    Ed25519Signature = class {
      static __wrap(ptr) {
        const obj = Object.create(Ed25519Signature.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_ed25519signature_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          ed25519signature_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          ed25519signature_to_bech32(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      to_hex() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          ed25519signature_to_hex(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = ed25519signature_from_bech32(ptr0, len0);
        return Ed25519Signature.__wrap(ret);
      }
      static from_hex(input) {
        var ptr0 = passStringToWasm0(input, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = ed25519signature_from_hex(ptr0, len0);
        return Ed25519Signature.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = ed25519signature_from_bytes(ptr0, len0);
        return Ed25519Signature.__wrap(ret);
      }
    };
    EnterpriseAddress = class {
      static __wrap(ptr) {
        const obj = Object.create(EnterpriseAddress.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_enterpriseaddress_free(ptr);
      }
      static new(network, payment) {
        _assertClass(payment, StakeCredential);
        var ret = enterpriseaddress_new(network, payment.ptr);
        return EnterpriseAddress.__wrap(ret);
      }
      payment_cred() {
        var ret = enterpriseaddress_payment_cred(this.ptr);
        return StakeCredential.__wrap(ret);
      }
      to_address() {
        var ret = enterpriseaddress_to_address(this.ptr);
        return Address.__wrap(ret);
      }
      static from_address(addr) {
        _assertClass(addr, Address);
        var ret = enterpriseaddress_from_address(addr.ptr);
        return ret === 0 ? void 0 : EnterpriseAddress.__wrap(ret);
      }
    };
    ExUnitPrices = class {
      static __wrap(ptr) {
        const obj = Object.create(ExUnitPrices.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_exunitprices_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          exunitprices_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = exunitprices_from_bytes(ptr0, len0);
        return ExUnitPrices.__wrap(ret);
      }
      mem_price() {
        var ret = exunitprices_mem_price(this.ptr);
        return UnitInterval.__wrap(ret);
      }
      step_price() {
        var ret = exunitprices_step_price(this.ptr);
        return UnitInterval.__wrap(ret);
      }
      static new(mem_price, step_price) {
        _assertClass(mem_price, UnitInterval);
        _assertClass(step_price, UnitInterval);
        var ret = exunitprices_new(mem_price.ptr, step_price.ptr);
        return ExUnitPrices.__wrap(ret);
      }
    };
    ExUnits = class {
      static __wrap(ptr) {
        const obj = Object.create(ExUnits.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_exunits_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          exunits_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = exunits_from_bytes(ptr0, len0);
        return ExUnits.__wrap(ret);
      }
      mem() {
        var ret = exunits_mem(this.ptr);
        return BigNum.__wrap(ret);
      }
      steps() {
        var ret = exunits_steps(this.ptr);
        return BigNum.__wrap(ret);
      }
      static new(mem, steps) {
        _assertClass(mem, BigNum);
        _assertClass(steps, BigNum);
        var ret = exunits_new(mem.ptr, steps.ptr);
        return ExUnits.__wrap(ret);
      }
    };
    GeneralTransactionMetadata = class {
      static __wrap(ptr) {
        const obj = Object.create(GeneralTransactionMetadata.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_generaltransactionmetadata_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          generaltransactionmetadata_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = generaltransactionmetadata_from_bytes(ptr0, len0);
        return GeneralTransactionMetadata.__wrap(ret);
      }
      static new() {
        var ret = generaltransactionmetadata_new();
        return GeneralTransactionMetadata.__wrap(ret);
      }
      len() {
        var ret = generaltransactionmetadata_len(this.ptr);
        return ret >>> 0;
      }
      insert(key, value) {
        _assertClass(key, BigNum);
        _assertClass(value, TransactionMetadatum);
        var ret = generaltransactionmetadata_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? void 0 : TransactionMetadatum.__wrap(ret);
      }
      get(key) {
        _assertClass(key, BigNum);
        var ret = generaltransactionmetadata_get(this.ptr, key.ptr);
        return ret === 0 ? void 0 : TransactionMetadatum.__wrap(ret);
      }
      keys() {
        var ret = generaltransactionmetadata_keys(this.ptr);
        return TransactionMetadatumLabels.__wrap(ret);
      }
    };
    GenesisDelegateHash = class {
      static __wrap(ptr) {
        const obj = Object.create(GenesisDelegateHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_genesisdelegatehash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          genesisdelegatehash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          genesisdelegatehash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = genesisdelegatehash_from_bech32(ptr0, len0);
        return GenesisDelegateHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = genesisdelegatehash_from_bytes(ptr0, len0);
        return GenesisDelegateHash.__wrap(ret);
      }
    };
    GenesisHash = class {
      static __wrap(ptr) {
        const obj = Object.create(GenesisHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_genesishash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          genesishash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          genesishash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = genesishash_from_bech32(ptr0, len0);
        return GenesisHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = genesishash_from_bytes(ptr0, len0);
        return GenesisHash.__wrap(ret);
      }
    };
    GenesisHashes = class {
      static __wrap(ptr) {
        const obj = Object.create(GenesisHashes.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_genesishashes_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          genesishashes_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = genesishashes_from_bytes(ptr0, len0);
        return GenesisHashes.__wrap(ret);
      }
      static new() {
        var ret = genesishashes_new();
        return GenesisHashes.__wrap(ret);
      }
      len() {
        var ret = genesishashes_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = genesishashes_get(this.ptr, index);
        return GenesisHash.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, GenesisHash);
        genesishashes_add(this.ptr, elem.ptr);
      }
    };
    GenesisKeyDelegation = class {
      static __wrap(ptr) {
        const obj = Object.create(GenesisKeyDelegation.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_genesiskeydelegation_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          genesiskeydelegation_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = genesiskeydelegation_from_bytes(ptr0, len0);
        return GenesisKeyDelegation.__wrap(ret);
      }
      genesishash() {
        var ret = genesiskeydelegation_genesishash(this.ptr);
        return GenesisHash.__wrap(ret);
      }
      genesis_delegate_hash() {
        var ret = genesiskeydelegation_genesis_delegate_hash(this.ptr);
        return GenesisDelegateHash.__wrap(ret);
      }
      vrf_keyhash() {
        var ret = genesiskeydelegation_vrf_keyhash(this.ptr);
        return VRFKeyHash.__wrap(ret);
      }
      static new(genesishash, genesis_delegate_hash, vrf_keyhash) {
        _assertClass(genesishash, GenesisHash);
        _assertClass(genesis_delegate_hash, GenesisDelegateHash);
        _assertClass(vrf_keyhash, VRFKeyHash);
        var ret = genesiskeydelegation_new(genesishash.ptr, genesis_delegate_hash.ptr, vrf_keyhash.ptr);
        return GenesisKeyDelegation.__wrap(ret);
      }
    };
    Header = class {
      static __wrap(ptr) {
        const obj = Object.create(Header.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_header_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          header_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = header_from_bytes(ptr0, len0);
        return Header.__wrap(ret);
      }
      header_body() {
        var ret = header_header_body(this.ptr);
        return HeaderBody.__wrap(ret);
      }
      body_signature() {
        var ret = header_body_signature(this.ptr);
        return KESSignature.__wrap(ret);
      }
      static new(header_body, body_signature) {
        _assertClass(header_body, HeaderBody);
        _assertClass(body_signature, KESSignature);
        var ret = header_new(header_body.ptr, body_signature.ptr);
        return Header.__wrap(ret);
      }
    };
    HeaderBody = class {
      static __wrap(ptr) {
        const obj = Object.create(HeaderBody.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_headerbody_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          headerbody_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = headerbody_from_bytes(ptr0, len0);
        return HeaderBody.__wrap(ret);
      }
      block_number() {
        var ret = headerbody_block_number(this.ptr);
        return ret >>> 0;
      }
      slot() {
        var ret = headerbody_slot(this.ptr);
        return ret >>> 0;
      }
      prev_hash() {
        var ret = headerbody_prev_hash(this.ptr);
        return ret === 0 ? void 0 : BlockHash.__wrap(ret);
      }
      issuer_vkey() {
        var ret = headerbody_issuer_vkey(this.ptr);
        return Vkey.__wrap(ret);
      }
      vrf_vkey() {
        var ret = headerbody_vrf_vkey(this.ptr);
        return VRFVKey.__wrap(ret);
      }
      nonce_vrf() {
        var ret = headerbody_nonce_vrf(this.ptr);
        return VRFCert.__wrap(ret);
      }
      leader_vrf() {
        var ret = headerbody_leader_vrf(this.ptr);
        return VRFCert.__wrap(ret);
      }
      block_body_size() {
        var ret = headerbody_block_body_size(this.ptr);
        return ret >>> 0;
      }
      block_body_hash() {
        var ret = headerbody_block_body_hash(this.ptr);
        return BlockHash.__wrap(ret);
      }
      operational_cert() {
        var ret = headerbody_operational_cert(this.ptr);
        return OperationalCert.__wrap(ret);
      }
      protocol_version() {
        var ret = headerbody_protocol_version(this.ptr);
        return ProtocolVersion.__wrap(ret);
      }
      static new(block_number, slot, prev_hash, issuer_vkey, vrf_vkey, nonce_vrf, leader_vrf, block_body_size, block_body_hash, operational_cert, protocol_version) {
        let ptr0 = 0;
        if (!isLikeNone(prev_hash)) {
          _assertClass(prev_hash, BlockHash);
          ptr0 = prev_hash.ptr;
          prev_hash.ptr = 0;
        }
        _assertClass(issuer_vkey, Vkey);
        _assertClass(vrf_vkey, VRFVKey);
        _assertClass(nonce_vrf, VRFCert);
        _assertClass(leader_vrf, VRFCert);
        _assertClass(block_body_hash, BlockHash);
        _assertClass(operational_cert, OperationalCert);
        _assertClass(protocol_version, ProtocolVersion);
        var ret = headerbody_new(block_number, slot, ptr0, issuer_vkey.ptr, vrf_vkey.ptr, nonce_vrf.ptr, leader_vrf.ptr, block_body_size, block_body_hash.ptr, operational_cert.ptr, protocol_version.ptr);
        return HeaderBody.__wrap(ret);
      }
    };
    Int = class {
      static __wrap(ptr) {
        const obj = Object.create(Int.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_int_free(ptr);
      }
      static new(x) {
        _assertClass(x, BigNum);
        var ret = int_new(x.ptr);
        return Int.__wrap(ret);
      }
      static new_negative(x) {
        _assertClass(x, BigNum);
        var ret = int_new_negative(x.ptr);
        return Int.__wrap(ret);
      }
      static new_i32(x) {
        var ret = int_new_i32(x);
        return Int.__wrap(ret);
      }
      is_positive() {
        var ret = int_is_positive(this.ptr);
        return ret !== 0;
      }
      as_positive() {
        var ret = int_as_positive(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      as_negative() {
        var ret = int_as_negative(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      as_i32() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          int_as_i32(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return r0 === 0 ? void 0 : r1;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    Ipv4 = class {
      static __wrap(ptr) {
        const obj = Object.create(Ipv4.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_ipv4_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          ipv4_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = ipv4_from_bytes(ptr0, len0);
        return Ipv4.__wrap(ret);
      }
      static new(data2) {
        var ptr0 = passArray8ToWasm0(data2, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = ipv4_new(ptr0, len0);
        return Ipv4.__wrap(ret);
      }
      ip() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          ipv4_ip(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    Ipv6 = class {
      static __wrap(ptr) {
        const obj = Object.create(Ipv6.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_ipv6_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          ipv6_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = ipv6_from_bytes(ptr0, len0);
        return Ipv6.__wrap(ret);
      }
      static new(data2) {
        var ptr0 = passArray8ToWasm0(data2, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = ipv6_new(ptr0, len0);
        return Ipv6.__wrap(ret);
      }
      ip() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          ipv6_ip(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    KESSignature = class {
      static __wrap(ptr) {
        const obj = Object.create(KESSignature.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_kessignature_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          kessignature_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = kessignature_from_bytes(ptr0, len0);
        return KESSignature.__wrap(ret);
      }
    };
    KESVKey = class {
      static __wrap(ptr) {
        const obj = Object.create(KESVKey.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_kesvkey_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          kesvkey_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          kesvkey_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = kesvkey_from_bech32(ptr0, len0);
        return KESVKey.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = kesvkey_from_bytes(ptr0, len0);
        return KESVKey.__wrap(ret);
      }
    };
    Language = class {
      static __wrap(ptr) {
        const obj = Object.create(Language.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_language_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          language_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = language_from_bytes(ptr0, len0);
        return Language.__wrap(ret);
      }
      static new_plutus_v1() {
        var ret = language_new_plutus_v1();
        return Language.__wrap(ret);
      }
      kind() {
        var ret = language_kind(this.ptr);
        return ret >>> 0;
      }
    };
    Languages = class {
      static __wrap(ptr) {
        const obj = Object.create(Languages.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_languages_free(ptr);
      }
      static new() {
        var ret = languages_new();
        return Languages.__wrap(ret);
      }
      len() {
        var ret = languages_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = languages_get(this.ptr, index);
        return Language.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, Language);
        var ptr0 = elem.ptr;
        elem.ptr = 0;
        languages_add(this.ptr, ptr0);
      }
    };
    LegacyDaedalusPrivateKey = class {
      static __wrap(ptr) {
        const obj = Object.create(LegacyDaedalusPrivateKey.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_legacydaedalusprivatekey_free(ptr);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = legacydaedalusprivatekey_from_bytes(ptr0, len0);
        return LegacyDaedalusPrivateKey.__wrap(ret);
      }
      as_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          legacydaedalusprivatekey_as_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      chaincode() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          legacydaedalusprivatekey_chaincode(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    LinearFee = class {
      static __wrap(ptr) {
        const obj = Object.create(LinearFee.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_linearfee_free(ptr);
      }
      constant() {
        var ret = linearfee_constant(this.ptr);
        return BigNum.__wrap(ret);
      }
      coefficient() {
        var ret = linearfee_coefficient(this.ptr);
        return BigNum.__wrap(ret);
      }
      static new(coefficient, constant) {
        _assertClass(coefficient, BigNum);
        _assertClass(constant, BigNum);
        var ret = linearfee_new(coefficient.ptr, constant.ptr);
        return LinearFee.__wrap(ret);
      }
    };
    MIRToStakeCredentials = class {
      static __wrap(ptr) {
        const obj = Object.create(MIRToStakeCredentials.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_mirtostakecredentials_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          mirtostakecredentials_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = mirtostakecredentials_from_bytes(ptr0, len0);
        return MIRToStakeCredentials.__wrap(ret);
      }
      static new() {
        var ret = mirtostakecredentials_new();
        return MIRToStakeCredentials.__wrap(ret);
      }
      len() {
        var ret = mirtostakecredentials_len(this.ptr);
        return ret >>> 0;
      }
      insert(cred, delta) {
        _assertClass(cred, StakeCredential);
        _assertClass(delta, Int);
        var ret = mirtostakecredentials_insert(this.ptr, cred.ptr, delta.ptr);
        return ret === 0 ? void 0 : Int.__wrap(ret);
      }
      get(cred) {
        _assertClass(cred, StakeCredential);
        var ret = mirtostakecredentials_get(this.ptr, cred.ptr);
        return ret === 0 ? void 0 : Int.__wrap(ret);
      }
      keys() {
        var ret = mirtostakecredentials_keys(this.ptr);
        return StakeCredentials.__wrap(ret);
      }
    };
    MetadataList = class {
      static __wrap(ptr) {
        const obj = Object.create(MetadataList.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_metadatalist_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          metadatalist_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = metadatalist_from_bytes(ptr0, len0);
        return MetadataList.__wrap(ret);
      }
      static new() {
        var ret = metadatalist_new();
        return MetadataList.__wrap(ret);
      }
      len() {
        var ret = metadatalist_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = metadatalist_get(this.ptr, index);
        return TransactionMetadatum.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, TransactionMetadatum);
        metadatalist_add(this.ptr, elem.ptr);
      }
    };
    MetadataMap = class {
      static __wrap(ptr) {
        const obj = Object.create(MetadataMap.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_metadatamap_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          metadatamap_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = metadatamap_from_bytes(ptr0, len0);
        return MetadataMap.__wrap(ret);
      }
      static new() {
        var ret = metadatamap_new();
        return MetadataMap.__wrap(ret);
      }
      len() {
        var ret = metadatamap_len(this.ptr);
        return ret >>> 0;
      }
      insert(key, value) {
        _assertClass(key, TransactionMetadatum);
        _assertClass(value, TransactionMetadatum);
        var ret = metadatamap_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? void 0 : TransactionMetadatum.__wrap(ret);
      }
      insert_str(key, value) {
        var ptr0 = passStringToWasm0(key, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(value, TransactionMetadatum);
        var ret = metadatamap_insert_str(this.ptr, ptr0, len0, value.ptr);
        return ret === 0 ? void 0 : TransactionMetadatum.__wrap(ret);
      }
      insert_i32(key, value) {
        _assertClass(value, TransactionMetadatum);
        var ret = metadatamap_insert_i32(this.ptr, key, value.ptr);
        return ret === 0 ? void 0 : TransactionMetadatum.__wrap(ret);
      }
      get(key) {
        _assertClass(key, TransactionMetadatum);
        var ret = metadatamap_get(this.ptr, key.ptr);
        return TransactionMetadatum.__wrap(ret);
      }
      get_str(key) {
        var ptr0 = passStringToWasm0(key, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = metadatamap_get_str(this.ptr, ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
      }
      get_i32(key) {
        var ret = metadatamap_get_i32(this.ptr, key);
        return TransactionMetadatum.__wrap(ret);
      }
      has(key) {
        _assertClass(key, TransactionMetadatum);
        var ret = metadatamap_has(this.ptr, key.ptr);
        return ret !== 0;
      }
      keys() {
        var ret = metadatamap_keys(this.ptr);
        return MetadataList.__wrap(ret);
      }
    };
    Mint = class {
      static __wrap(ptr) {
        const obj = Object.create(Mint.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_mint_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          mint_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = mint_from_bytes(ptr0, len0);
        return Mint.__wrap(ret);
      }
      static new() {
        var ret = mint_new();
        return Mint.__wrap(ret);
      }
      len() {
        var ret = mint_len(this.ptr);
        return ret >>> 0;
      }
      insert(key, value) {
        _assertClass(key, ScriptHash);
        _assertClass(value, MintAssets);
        var ret = mint_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? void 0 : MintAssets.__wrap(ret);
      }
      get(key) {
        _assertClass(key, ScriptHash);
        var ret = mint_get(this.ptr, key.ptr);
        return ret === 0 ? void 0 : MintAssets.__wrap(ret);
      }
      keys() {
        var ret = mint_keys(this.ptr);
        return ScriptHashes.__wrap(ret);
      }
    };
    MintAssets = class {
      static __wrap(ptr) {
        const obj = Object.create(MintAssets.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_mintassets_free(ptr);
      }
      static new() {
        var ret = mintassets_new();
        return MintAssets.__wrap(ret);
      }
      len() {
        var ret = mintassets_len(this.ptr);
        return ret >>> 0;
      }
      insert(key, value) {
        _assertClass(key, AssetName);
        _assertClass(value, Int);
        var ptr0 = value.ptr;
        value.ptr = 0;
        var ret = mintassets_insert(this.ptr, key.ptr, ptr0);
        return ret === 0 ? void 0 : Int.__wrap(ret);
      }
      get(key) {
        _assertClass(key, AssetName);
        var ret = mintassets_get(this.ptr, key.ptr);
        return ret === 0 ? void 0 : Int.__wrap(ret);
      }
      keys() {
        var ret = mintassets_keys(this.ptr);
        return AssetNames.__wrap(ret);
      }
    };
    MoveInstantaneousReward = class {
      static __wrap(ptr) {
        const obj = Object.create(MoveInstantaneousReward.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_moveinstantaneousreward_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          moveinstantaneousreward_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = moveinstantaneousreward_from_bytes(ptr0, len0);
        return MoveInstantaneousReward.__wrap(ret);
      }
      static new_to_other_pot(pot, amount) {
        _assertClass(amount, BigNum);
        var ret = moveinstantaneousreward_new_to_other_pot(pot, amount.ptr);
        return MoveInstantaneousReward.__wrap(ret);
      }
      static new_to_stake_creds(pot, amounts) {
        _assertClass(amounts, MIRToStakeCredentials);
        var ret = moveinstantaneousreward_new_to_stake_creds(pot, amounts.ptr);
        return MoveInstantaneousReward.__wrap(ret);
      }
      pot() {
        var ret = moveinstantaneousreward_pot(this.ptr);
        return ret >>> 0;
      }
      kind() {
        var ret = moveinstantaneousreward_kind(this.ptr);
        return ret >>> 0;
      }
      as_to_other_pot() {
        var ret = moveinstantaneousreward_as_to_other_pot(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      as_to_stake_creds() {
        var ret = moveinstantaneousreward_as_to_stake_creds(this.ptr);
        return ret === 0 ? void 0 : MIRToStakeCredentials.__wrap(ret);
      }
    };
    MoveInstantaneousRewardsCert = class {
      static __wrap(ptr) {
        const obj = Object.create(MoveInstantaneousRewardsCert.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_moveinstantaneousrewardscert_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          moveinstantaneousrewardscert_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = moveinstantaneousrewardscert_from_bytes(ptr0, len0);
        return MoveInstantaneousRewardsCert.__wrap(ret);
      }
      move_instantaneous_reward() {
        var ret = moveinstantaneousrewardscert_move_instantaneous_reward(this.ptr);
        return MoveInstantaneousReward.__wrap(ret);
      }
      static new(move_instantaneous_reward) {
        _assertClass(move_instantaneous_reward, MoveInstantaneousReward);
        var ret = moveinstantaneousrewardscert_new(move_instantaneous_reward.ptr);
        return MoveInstantaneousRewardsCert.__wrap(ret);
      }
    };
    MultiAsset = class {
      static __wrap(ptr) {
        const obj = Object.create(MultiAsset.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_multiasset_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          multiasset_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = multiasset_from_bytes(ptr0, len0);
        return MultiAsset.__wrap(ret);
      }
      static new() {
        var ret = multiasset_new();
        return MultiAsset.__wrap(ret);
      }
      len() {
        var ret = multiasset_len(this.ptr);
        return ret >>> 0;
      }
      insert(key, value) {
        _assertClass(key, ScriptHash);
        _assertClass(value, Assets);
        var ret = multiasset_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? void 0 : Assets.__wrap(ret);
      }
      get(key) {
        _assertClass(key, ScriptHash);
        var ret = multiasset_get(this.ptr, key.ptr);
        return ret === 0 ? void 0 : Assets.__wrap(ret);
      }
      keys() {
        var ret = multiasset_keys(this.ptr);
        return ScriptHashes.__wrap(ret);
      }
      sub(rhs_ma) {
        _assertClass(rhs_ma, MultiAsset);
        var ret = multiasset_sub(this.ptr, rhs_ma.ptr);
        return MultiAsset.__wrap(ret);
      }
    };
    MultiHostName = class {
      static __wrap(ptr) {
        const obj = Object.create(MultiHostName.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_multihostname_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          multihostname_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = multihostname_from_bytes(ptr0, len0);
        return MultiHostName.__wrap(ret);
      }
      dns_name() {
        var ret = multihostname_dns_name(this.ptr);
        return DNSRecordSRV.__wrap(ret);
      }
      static new(dns_name) {
        _assertClass(dns_name, DNSRecordSRV);
        var ret = multihostname_new(dns_name.ptr);
        return MultiHostName.__wrap(ret);
      }
    };
    NativeScript = class {
      static __wrap(ptr) {
        const obj = Object.create(NativeScript.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_nativescript_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          nativescript_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = nativescript_from_bytes(ptr0, len0);
        return NativeScript.__wrap(ret);
      }
      hash(namespace) {
        var ret = nativescript_hash(this.ptr, namespace);
        return Ed25519KeyHash.__wrap(ret);
      }
      static new_script_pubkey(script_pubkey) {
        _assertClass(script_pubkey, ScriptPubkey);
        var ret = nativescript_new_script_pubkey(script_pubkey.ptr);
        return NativeScript.__wrap(ret);
      }
      static new_script_all(script_all) {
        _assertClass(script_all, ScriptAll);
        var ret = nativescript_new_script_all(script_all.ptr);
        return NativeScript.__wrap(ret);
      }
      static new_script_any(script_any) {
        _assertClass(script_any, ScriptAny);
        var ret = nativescript_new_script_any(script_any.ptr);
        return NativeScript.__wrap(ret);
      }
      static new_script_n_of_k(script_n_of_k) {
        _assertClass(script_n_of_k, ScriptNOfK);
        var ret = nativescript_new_script_n_of_k(script_n_of_k.ptr);
        return NativeScript.__wrap(ret);
      }
      static new_timelock_start(timelock_start) {
        _assertClass(timelock_start, TimelockStart);
        var ret = nativescript_new_timelock_start(timelock_start.ptr);
        return NativeScript.__wrap(ret);
      }
      static new_timelock_expiry(timelock_expiry) {
        _assertClass(timelock_expiry, TimelockExpiry);
        var ret = nativescript_new_timelock_expiry(timelock_expiry.ptr);
        return NativeScript.__wrap(ret);
      }
      kind() {
        var ret = nativescript_kind(this.ptr);
        return ret >>> 0;
      }
      as_script_pubkey() {
        var ret = nativescript_as_script_pubkey(this.ptr);
        return ret === 0 ? void 0 : ScriptPubkey.__wrap(ret);
      }
      as_script_all() {
        var ret = nativescript_as_script_all(this.ptr);
        return ret === 0 ? void 0 : ScriptAll.__wrap(ret);
      }
      as_script_any() {
        var ret = nativescript_as_script_any(this.ptr);
        return ret === 0 ? void 0 : ScriptAny.__wrap(ret);
      }
      as_script_n_of_k() {
        var ret = nativescript_as_script_n_of_k(this.ptr);
        return ret === 0 ? void 0 : ScriptNOfK.__wrap(ret);
      }
      as_timelock_start() {
        var ret = nativescript_as_timelock_start(this.ptr);
        return ret === 0 ? void 0 : TimelockStart.__wrap(ret);
      }
      as_timelock_expiry() {
        var ret = nativescript_as_timelock_expiry(this.ptr);
        return ret === 0 ? void 0 : TimelockExpiry.__wrap(ret);
      }
    };
    NativeScripts = class {
      static __wrap(ptr) {
        const obj = Object.create(NativeScripts.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_nativescripts_free(ptr);
      }
      static new() {
        var ret = nativescripts_new();
        return NativeScripts.__wrap(ret);
      }
      len() {
        var ret = nativescripts_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = nativescripts_get(this.ptr, index);
        return NativeScript.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, NativeScript);
        nativescripts_add(this.ptr, elem.ptr);
      }
    };
    NetworkId = class {
      static __wrap(ptr) {
        const obj = Object.create(NetworkId.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_networkid_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          networkid_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = networkid_from_bytes(ptr0, len0);
        return NetworkId.__wrap(ret);
      }
      static testnet() {
        var ret = networkid_testnet();
        return NetworkId.__wrap(ret);
      }
      static mainnet() {
        var ret = networkid_mainnet();
        return NetworkId.__wrap(ret);
      }
      kind() {
        var ret = networkid_kind(this.ptr);
        return ret >>> 0;
      }
    };
    NetworkInfo = class {
      static __wrap(ptr) {
        const obj = Object.create(NetworkInfo.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_networkinfo_free(ptr);
      }
      static new(network_id, protocol_magic) {
        var ret = networkinfo_new(network_id, protocol_magic);
        return NetworkInfo.__wrap(ret);
      }
      network_id() {
        var ret = networkinfo_network_id(this.ptr);
        return ret;
      }
      protocol_magic() {
        var ret = networkinfo_protocol_magic(this.ptr);
        return ret >>> 0;
      }
      static testnet() {
        var ret = networkinfo_testnet();
        return NetworkInfo.__wrap(ret);
      }
      static mainnet() {
        var ret = networkinfo_mainnet();
        return NetworkInfo.__wrap(ret);
      }
    };
    Nonce = class {
      static __wrap(ptr) {
        const obj = Object.create(Nonce.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_nonce_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          nonce_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = nonce_from_bytes(ptr0, len0);
        return Nonce.__wrap(ret);
      }
      static new_identity() {
        var ret = nonce_new_identity();
        return Nonce.__wrap(ret);
      }
      static new_from_hash(hash) {
        var ptr0 = passArray8ToWasm0(hash, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = nonce_new_from_hash(ptr0, len0);
        return Nonce.__wrap(ret);
      }
      get_hash() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          nonce_get_hash(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          let v0;
          if (r0 !== 0) {
            v0 = getArrayU8FromWasm0(r0, r1).slice();
            __wbindgen_free(r0, r1 * 1);
          }
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    OperationalCert = class {
      static __wrap(ptr) {
        const obj = Object.create(OperationalCert.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_operationalcert_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          operationalcert_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = operationalcert_from_bytes(ptr0, len0);
        return OperationalCert.__wrap(ret);
      }
      hot_vkey() {
        var ret = operationalcert_hot_vkey(this.ptr);
        return KESVKey.__wrap(ret);
      }
      sequence_number() {
        var ret = operationalcert_sequence_number(this.ptr);
        return ret >>> 0;
      }
      kes_period() {
        var ret = operationalcert_kes_period(this.ptr);
        return ret >>> 0;
      }
      sigma() {
        var ret = operationalcert_sigma(this.ptr);
        return Ed25519Signature.__wrap(ret);
      }
      static new(hot_vkey, sequence_number, kes_period, sigma) {
        _assertClass(hot_vkey, KESVKey);
        _assertClass(sigma, Ed25519Signature);
        var ret = operationalcert_new(hot_vkey.ptr, sequence_number, kes_period, sigma.ptr);
        return OperationalCert.__wrap(ret);
      }
    };
    PlutusData = class {
      static __wrap(ptr) {
        const obj = Object.create(PlutusData.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_plutusdata_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          plutusdata_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = plutusdata_from_bytes(ptr0, len0);
        return PlutusData.__wrap(ret);
      }
      static new_constr_plutus_data(constr_plutus_data) {
        _assertClass(constr_plutus_data, ConstrPlutusData);
        var ret = plutusdata_new_constr_plutus_data(constr_plutus_data.ptr);
        return PlutusData.__wrap(ret);
      }
      static new_map(map) {
        _assertClass(map, PlutusMap);
        var ret = plutusdata_new_map(map.ptr);
        return PlutusData.__wrap(ret);
      }
      static new_list(list) {
        _assertClass(list, PlutusList);
        var ret = plutusdata_new_list(list.ptr);
        return PlutusData.__wrap(ret);
      }
      static new_integer(integer) {
        _assertClass(integer, BigInt2);
        var ret = plutusdata_new_integer(integer.ptr);
        return PlutusData.__wrap(ret);
      }
      static new_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = plutusdata_new_bytes(ptr0, len0);
        return PlutusData.__wrap(ret);
      }
      kind() {
        var ret = plutusdata_kind(this.ptr);
        return ret >>> 0;
      }
      as_constr_plutus_data() {
        var ret = plutusdata_as_constr_plutus_data(this.ptr);
        return ret === 0 ? void 0 : ConstrPlutusData.__wrap(ret);
      }
      as_map() {
        var ret = plutusdata_as_map(this.ptr);
        return ret === 0 ? void 0 : PlutusMap.__wrap(ret);
      }
      as_list() {
        var ret = plutusdata_as_list(this.ptr);
        return ret === 0 ? void 0 : PlutusList.__wrap(ret);
      }
      as_integer() {
        var ret = plutusdata_as_integer(this.ptr);
        return ret === 0 ? void 0 : BigInt2.__wrap(ret);
      }
      as_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          plutusdata_as_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          let v0;
          if (r0 !== 0) {
            v0 = getArrayU8FromWasm0(r0, r1).slice();
            __wbindgen_free(r0, r1 * 1);
          }
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    PlutusList = class {
      static __wrap(ptr) {
        const obj = Object.create(PlutusList.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_plutuslist_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          plutuslist_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = plutuslist_from_bytes(ptr0, len0);
        return PlutusList.__wrap(ret);
      }
      static new() {
        var ret = plutuslist_new();
        return PlutusList.__wrap(ret);
      }
      len() {
        var ret = plutuslist_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = plutuslist_get(this.ptr, index);
        return PlutusData.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, PlutusData);
        plutuslist_add(this.ptr, elem.ptr);
      }
    };
    PlutusMap = class {
      static __wrap(ptr) {
        const obj = Object.create(PlutusMap.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_plutusmap_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          plutusmap_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = plutusmap_from_bytes(ptr0, len0);
        return PlutusMap.__wrap(ret);
      }
      static new() {
        var ret = plutusmap_new();
        return PlutusMap.__wrap(ret);
      }
      len() {
        var ret = plutusmap_len(this.ptr);
        return ret >>> 0;
      }
      insert(key, value) {
        _assertClass(key, PlutusData);
        _assertClass(value, PlutusData);
        var ret = plutusmap_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? void 0 : PlutusData.__wrap(ret);
      }
      get(key) {
        _assertClass(key, PlutusData);
        var ret = plutusmap_get(this.ptr, key.ptr);
        return ret === 0 ? void 0 : PlutusData.__wrap(ret);
      }
      keys() {
        var ret = plutusmap_keys(this.ptr);
        return PlutusList.__wrap(ret);
      }
    };
    PlutusScript = class {
      static __wrap(ptr) {
        const obj = Object.create(PlutusScript.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_plutusscript_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          plutusscript_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = plutusscript_from_bytes(ptr0, len0);
        return PlutusScript.__wrap(ret);
      }
      static new(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = plutusscript_new(ptr0, len0);
        return PlutusScript.__wrap(ret);
      }
      bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          plutusscript_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
    };
    PlutusScripts = class {
      static __wrap(ptr) {
        const obj = Object.create(PlutusScripts.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_plutusscripts_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          plutusscripts_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = plutusscripts_from_bytes(ptr0, len0);
        return PlutusScripts.__wrap(ret);
      }
      static new() {
        var ret = plutusscripts_new();
        return PlutusScripts.__wrap(ret);
      }
      len() {
        var ret = plutusscripts_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = plutusscripts_get(this.ptr, index);
        return PlutusScript.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, PlutusScript);
        plutusscripts_add(this.ptr, elem.ptr);
      }
    };
    Pointer = class {
      static __wrap(ptr) {
        const obj = Object.create(Pointer.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_pointer_free(ptr);
      }
      static new(slot, tx_index, cert_index) {
        var ret = pointer_new(slot, tx_index, cert_index);
        return Pointer.__wrap(ret);
      }
      slot() {
        var ret = pointer_slot(this.ptr);
        return ret >>> 0;
      }
      tx_index() {
        var ret = pointer_tx_index(this.ptr);
        return ret >>> 0;
      }
      cert_index() {
        var ret = pointer_cert_index(this.ptr);
        return ret >>> 0;
      }
    };
    PointerAddress = class {
      static __wrap(ptr) {
        const obj = Object.create(PointerAddress.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_pointeraddress_free(ptr);
      }
      static new(network, payment, stake) {
        _assertClass(payment, StakeCredential);
        _assertClass(stake, Pointer);
        var ret = pointeraddress_new(network, payment.ptr, stake.ptr);
        return PointerAddress.__wrap(ret);
      }
      payment_cred() {
        var ret = pointeraddress_payment_cred(this.ptr);
        return StakeCredential.__wrap(ret);
      }
      stake_pointer() {
        var ret = pointeraddress_stake_pointer(this.ptr);
        return Pointer.__wrap(ret);
      }
      to_address() {
        var ret = pointeraddress_to_address(this.ptr);
        return Address.__wrap(ret);
      }
      static from_address(addr) {
        _assertClass(addr, Address);
        var ret = pointeraddress_from_address(addr.ptr);
        return ret === 0 ? void 0 : PointerAddress.__wrap(ret);
      }
    };
    PoolMetadata = class {
      static __wrap(ptr) {
        const obj = Object.create(PoolMetadata.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_poolmetadata_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          poolmetadata_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = poolmetadata_from_bytes(ptr0, len0);
        return PoolMetadata.__wrap(ret);
      }
      url() {
        var ret = poolmetadata_url(this.ptr);
        return URL2.__wrap(ret);
      }
      pool_metadata_hash() {
        var ret = poolmetadata_pool_metadata_hash(this.ptr);
        return PoolMetadataHash.__wrap(ret);
      }
      static new(url, pool_metadata_hash) {
        _assertClass(url, URL2);
        _assertClass(pool_metadata_hash, PoolMetadataHash);
        var ret = poolmetadata_new(url.ptr, pool_metadata_hash.ptr);
        return PoolMetadata.__wrap(ret);
      }
    };
    PoolMetadataHash = class {
      static __wrap(ptr) {
        const obj = Object.create(PoolMetadataHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_poolmetadatahash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          poolmetadatahash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          poolmetadatahash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = poolmetadatahash_from_bech32(ptr0, len0);
        return PoolMetadataHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = poolmetadatahash_from_bytes(ptr0, len0);
        return PoolMetadataHash.__wrap(ret);
      }
    };
    PoolParams = class {
      static __wrap(ptr) {
        const obj = Object.create(PoolParams.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_poolparams_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          poolparams_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = poolparams_from_bytes(ptr0, len0);
        return PoolParams.__wrap(ret);
      }
      operator() {
        var ret = poolparams_operator(this.ptr);
        return Ed25519KeyHash.__wrap(ret);
      }
      vrf_keyhash() {
        var ret = poolparams_vrf_keyhash(this.ptr);
        return VRFKeyHash.__wrap(ret);
      }
      pledge() {
        var ret = poolparams_pledge(this.ptr);
        return BigNum.__wrap(ret);
      }
      cost() {
        var ret = poolparams_cost(this.ptr);
        return BigNum.__wrap(ret);
      }
      margin() {
        var ret = poolparams_margin(this.ptr);
        return UnitInterval.__wrap(ret);
      }
      reward_account() {
        var ret = poolparams_reward_account(this.ptr);
        return RewardAddress.__wrap(ret);
      }
      pool_owners() {
        var ret = poolparams_pool_owners(this.ptr);
        return Ed25519KeyHashes.__wrap(ret);
      }
      relays() {
        var ret = poolparams_relays(this.ptr);
        return Relays.__wrap(ret);
      }
      pool_metadata() {
        var ret = poolparams_pool_metadata(this.ptr);
        return ret === 0 ? void 0 : PoolMetadata.__wrap(ret);
      }
      static new(operator, vrf_keyhash, pledge, cost, margin, reward_account, pool_owners, relays, pool_metadata) {
        _assertClass(operator, Ed25519KeyHash);
        _assertClass(vrf_keyhash, VRFKeyHash);
        _assertClass(pledge, BigNum);
        _assertClass(cost, BigNum);
        _assertClass(margin, UnitInterval);
        _assertClass(reward_account, RewardAddress);
        _assertClass(pool_owners, Ed25519KeyHashes);
        _assertClass(relays, Relays);
        let ptr0 = 0;
        if (!isLikeNone(pool_metadata)) {
          _assertClass(pool_metadata, PoolMetadata);
          ptr0 = pool_metadata.ptr;
          pool_metadata.ptr = 0;
        }
        var ret = poolparams_new(operator.ptr, vrf_keyhash.ptr, pledge.ptr, cost.ptr, margin.ptr, reward_account.ptr, pool_owners.ptr, relays.ptr, ptr0);
        return PoolParams.__wrap(ret);
      }
    };
    PoolRegistration = class {
      static __wrap(ptr) {
        const obj = Object.create(PoolRegistration.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_poolregistration_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          poolregistration_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = poolregistration_from_bytes(ptr0, len0);
        return PoolRegistration.__wrap(ret);
      }
      pool_params() {
        var ret = poolregistration_pool_params(this.ptr);
        return PoolParams.__wrap(ret);
      }
      static new(pool_params) {
        _assertClass(pool_params, PoolParams);
        var ret = poolregistration_new(pool_params.ptr);
        return PoolRegistration.__wrap(ret);
      }
    };
    PoolRetirement = class {
      static __wrap(ptr) {
        const obj = Object.create(PoolRetirement.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_poolretirement_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          poolretirement_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = poolretirement_from_bytes(ptr0, len0);
        return PoolRetirement.__wrap(ret);
      }
      pool_keyhash() {
        var ret = poolretirement_pool_keyhash(this.ptr);
        return Ed25519KeyHash.__wrap(ret);
      }
      epoch() {
        var ret = poolretirement_epoch(this.ptr);
        return ret >>> 0;
      }
      static new(pool_keyhash, epoch) {
        _assertClass(pool_keyhash, Ed25519KeyHash);
        var ret = poolretirement_new(pool_keyhash.ptr, epoch);
        return PoolRetirement.__wrap(ret);
      }
    };
    PrivateKey = class {
      static __wrap(ptr) {
        const obj = Object.create(PrivateKey.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_privatekey_free(ptr);
      }
      to_public() {
        var ret = privatekey_to_public(this.ptr);
        return PublicKey.__wrap(ret);
      }
      static generate_ed25519() {
        var ret = privatekey_generate_ed25519();
        return PrivateKey.__wrap(ret);
      }
      static generate_ed25519extended() {
        var ret = privatekey_generate_ed25519extended();
        return PrivateKey.__wrap(ret);
      }
      to_bech32() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          privatekey_to_bech32(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      as_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          privatekey_as_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_extended_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = privatekey_from_extended_bytes(ptr0, len0);
        return PrivateKey.__wrap(ret);
      }
      static from_normal_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = privatekey_from_normal_bytes(ptr0, len0);
        return PrivateKey.__wrap(ret);
      }
      sign(message) {
        var ptr0 = passArray8ToWasm0(message, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = privatekey_sign(this.ptr, ptr0, len0);
        return Ed25519Signature.__wrap(ret);
      }
    };
    ProposedProtocolParameterUpdates = class {
      static __wrap(ptr) {
        const obj = Object.create(ProposedProtocolParameterUpdates.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_proposedprotocolparameterupdates_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          proposedprotocolparameterupdates_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = proposedprotocolparameterupdates_from_bytes(ptr0, len0);
        return ProposedProtocolParameterUpdates.__wrap(ret);
      }
      static new() {
        var ret = proposedprotocolparameterupdates_new();
        return ProposedProtocolParameterUpdates.__wrap(ret);
      }
      len() {
        var ret = proposedprotocolparameterupdates_len(this.ptr);
        return ret >>> 0;
      }
      insert(key, value) {
        _assertClass(key, GenesisHash);
        _assertClass(value, ProtocolParamUpdate);
        var ret = proposedprotocolparameterupdates_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? void 0 : ProtocolParamUpdate.__wrap(ret);
      }
      get(key) {
        _assertClass(key, GenesisHash);
        var ret = proposedprotocolparameterupdates_get(this.ptr, key.ptr);
        return ret === 0 ? void 0 : ProtocolParamUpdate.__wrap(ret);
      }
      keys() {
        var ret = proposedprotocolparameterupdates_keys(this.ptr);
        return GenesisHashes.__wrap(ret);
      }
    };
    ProtocolParamUpdate = class {
      static __wrap(ptr) {
        const obj = Object.create(ProtocolParamUpdate.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_protocolparamupdate_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          protocolparamupdate_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = protocolparamupdate_from_bytes(ptr0, len0);
        return ProtocolParamUpdate.__wrap(ret);
      }
      set_minfee_a(minfee_a) {
        _assertClass(minfee_a, BigNum);
        protocolparamupdate_set_minfee_a(this.ptr, minfee_a.ptr);
      }
      minfee_a() {
        var ret = protocolparamupdate_minfee_a(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      set_minfee_b(minfee_b) {
        _assertClass(minfee_b, BigNum);
        protocolparamupdate_set_minfee_b(this.ptr, minfee_b.ptr);
      }
      minfee_b() {
        var ret = protocolparamupdate_minfee_b(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      set_max_block_body_size(max_block_body_size) {
        protocolparamupdate_set_max_block_body_size(this.ptr, max_block_body_size);
      }
      max_block_body_size() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          protocolparamupdate_max_block_body_size(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return r0 === 0 ? void 0 : r1 >>> 0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      set_max_tx_size(max_tx_size) {
        protocolparamupdate_set_max_tx_size(this.ptr, max_tx_size);
      }
      max_tx_size() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          protocolparamupdate_max_tx_size(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return r0 === 0 ? void 0 : r1 >>> 0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      set_max_block_header_size(max_block_header_size) {
        protocolparamupdate_set_max_block_header_size(this.ptr, max_block_header_size);
      }
      max_block_header_size() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          protocolparamupdate_max_block_header_size(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return r0 === 0 ? void 0 : r1 >>> 0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      set_key_deposit(key_deposit) {
        _assertClass(key_deposit, BigNum);
        protocolparamupdate_set_key_deposit(this.ptr, key_deposit.ptr);
      }
      key_deposit() {
        var ret = protocolparamupdate_key_deposit(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      set_pool_deposit(pool_deposit) {
        _assertClass(pool_deposit, BigNum);
        protocolparamupdate_set_pool_deposit(this.ptr, pool_deposit.ptr);
      }
      pool_deposit() {
        var ret = protocolparamupdate_pool_deposit(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      set_max_epoch(max_epoch) {
        protocolparamupdate_set_max_epoch(this.ptr, max_epoch);
      }
      max_epoch() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          protocolparamupdate_max_epoch(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return r0 === 0 ? void 0 : r1 >>> 0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      set_n_opt(n_opt) {
        protocolparamupdate_set_n_opt(this.ptr, n_opt);
      }
      n_opt() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          protocolparamupdate_n_opt(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return r0 === 0 ? void 0 : r1 >>> 0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      set_pool_pledge_influence(pool_pledge_influence) {
        _assertClass(pool_pledge_influence, UnitInterval);
        protocolparamupdate_set_pool_pledge_influence(this.ptr, pool_pledge_influence.ptr);
      }
      pool_pledge_influence() {
        var ret = protocolparamupdate_pool_pledge_influence(this.ptr);
        return ret === 0 ? void 0 : UnitInterval.__wrap(ret);
      }
      set_expansion_rate(expansion_rate) {
        _assertClass(expansion_rate, UnitInterval);
        protocolparamupdate_set_expansion_rate(this.ptr, expansion_rate.ptr);
      }
      expansion_rate() {
        var ret = protocolparamupdate_expansion_rate(this.ptr);
        return ret === 0 ? void 0 : UnitInterval.__wrap(ret);
      }
      set_treasury_growth_rate(treasury_growth_rate) {
        _assertClass(treasury_growth_rate, UnitInterval);
        protocolparamupdate_set_treasury_growth_rate(this.ptr, treasury_growth_rate.ptr);
      }
      treasury_growth_rate() {
        var ret = protocolparamupdate_treasury_growth_rate(this.ptr);
        return ret === 0 ? void 0 : UnitInterval.__wrap(ret);
      }
      set_d(d) {
        _assertClass(d, UnitInterval);
        protocolparamupdate_set_d(this.ptr, d.ptr);
      }
      d() {
        var ret = protocolparamupdate_d(this.ptr);
        return ret === 0 ? void 0 : UnitInterval.__wrap(ret);
      }
      set_extra_entropy(extra_entropy) {
        _assertClass(extra_entropy, Nonce);
        protocolparamupdate_set_extra_entropy(this.ptr, extra_entropy.ptr);
      }
      extra_entropy() {
        var ret = protocolparamupdate_extra_entropy(this.ptr);
        return ret === 0 ? void 0 : Nonce.__wrap(ret);
      }
      set_protocol_version(protocol_version) {
        _assertClass(protocol_version, ProtocolVersions);
        protocolparamupdate_set_protocol_version(this.ptr, protocol_version.ptr);
      }
      protocol_version() {
        var ret = protocolparamupdate_protocol_version(this.ptr);
        return ret === 0 ? void 0 : ProtocolVersions.__wrap(ret);
      }
      set_min_pool_cost(min_pool_cost) {
        _assertClass(min_pool_cost, BigNum);
        protocolparamupdate_set_min_pool_cost(this.ptr, min_pool_cost.ptr);
      }
      min_pool_cost() {
        var ret = protocolparamupdate_min_pool_cost(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      set_ada_per_utxo_byte(ada_per_utxo_byte) {
        _assertClass(ada_per_utxo_byte, BigNum);
        protocolparamupdate_set_ada_per_utxo_byte(this.ptr, ada_per_utxo_byte.ptr);
      }
      ada_per_utxo_byte() {
        var ret = protocolparamupdate_ada_per_utxo_byte(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      set_cost_models(cost_models) {
        _assertClass(cost_models, Costmdls);
        protocolparamupdate_set_cost_models(this.ptr, cost_models.ptr);
      }
      cost_models() {
        var ret = protocolparamupdate_cost_models(this.ptr);
        return ret === 0 ? void 0 : Costmdls.__wrap(ret);
      }
      set_execution_costs(execution_costs) {
        _assertClass(execution_costs, ExUnitPrices);
        protocolparamupdate_set_execution_costs(this.ptr, execution_costs.ptr);
      }
      execution_costs() {
        var ret = protocolparamupdate_execution_costs(this.ptr);
        return ret === 0 ? void 0 : ExUnitPrices.__wrap(ret);
      }
      set_max_tx_ex_units(max_tx_ex_units) {
        _assertClass(max_tx_ex_units, ExUnits);
        protocolparamupdate_set_max_tx_ex_units(this.ptr, max_tx_ex_units.ptr);
      }
      max_tx_ex_units() {
        var ret = protocolparamupdate_max_tx_ex_units(this.ptr);
        return ret === 0 ? void 0 : ExUnits.__wrap(ret);
      }
      set_max_block_ex_units(max_block_ex_units) {
        _assertClass(max_block_ex_units, ExUnits);
        protocolparamupdate_set_max_block_ex_units(this.ptr, max_block_ex_units.ptr);
      }
      max_block_ex_units() {
        var ret = protocolparamupdate_max_block_ex_units(this.ptr);
        return ret === 0 ? void 0 : ExUnits.__wrap(ret);
      }
      set_max_value_size(max_value_size) {
        protocolparamupdate_set_max_value_size(this.ptr, max_value_size);
      }
      max_value_size() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          protocolparamupdate_max_value_size(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return r0 === 0 ? void 0 : r1 >>> 0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static new() {
        var ret = protocolparamupdate_new();
        return ProtocolParamUpdate.__wrap(ret);
      }
    };
    ProtocolVersion = class {
      static __wrap(ptr) {
        const obj = Object.create(ProtocolVersion.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_protocolversion_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          protocolversion_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = protocolversion_from_bytes(ptr0, len0);
        return ProtocolVersion.__wrap(ret);
      }
      major() {
        var ret = protocolversion_major(this.ptr);
        return ret >>> 0;
      }
      minor() {
        var ret = protocolversion_minor(this.ptr);
        return ret >>> 0;
      }
      static new(major, minor) {
        var ret = protocolversion_new(major, minor);
        return ProtocolVersion.__wrap(ret);
      }
    };
    ProtocolVersions = class {
      static __wrap(ptr) {
        const obj = Object.create(ProtocolVersions.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_protocolversions_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          protocolversions_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = protocolversions_from_bytes(ptr0, len0);
        return ProtocolVersions.__wrap(ret);
      }
      static new() {
        var ret = protocolversions_new();
        return ProtocolVersions.__wrap(ret);
      }
      len() {
        var ret = protocolversions_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = protocolversions_get(this.ptr, index);
        return ProtocolVersion.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, ProtocolVersion);
        protocolversions_add(this.ptr, elem.ptr);
      }
    };
    PublicKey = class {
      static __wrap(ptr) {
        const obj = Object.create(PublicKey.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_publickey_free(ptr);
      }
      static from_bech32(bech32_str) {
        var ptr0 = passStringToWasm0(bech32_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = publickey_from_bech32(ptr0, len0);
        return PublicKey.__wrap(ret);
      }
      to_bech32() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          publickey_to_bech32(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      as_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          publickey_as_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = publickey_from_bytes(ptr0, len0);
        return PublicKey.__wrap(ret);
      }
      verify(data2, signature) {
        var ptr0 = passArray8ToWasm0(data2, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        _assertClass(signature, Ed25519Signature);
        var ret = publickey_verify(this.ptr, ptr0, len0, signature.ptr);
        return ret !== 0;
      }
      hash() {
        var ret = publickey_hash(this.ptr);
        return Ed25519KeyHash.__wrap(ret);
      }
    };
    PublicKeys = class {
      static __wrap(ptr) {
        const obj = Object.create(PublicKeys.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_publickeys_free(ptr);
      }
      constructor() {
        var ret = publickeys_new();
        return PublicKeys.__wrap(ret);
      }
      size() {
        var ret = publickeys_size(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = publickeys_get(this.ptr, index);
        return PublicKey.__wrap(ret);
      }
      add(key) {
        _assertClass(key, PublicKey);
        publickeys_add(this.ptr, key.ptr);
      }
    };
    Redeemer = class {
      static __wrap(ptr) {
        const obj = Object.create(Redeemer.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_redeemer_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          redeemer_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = redeemer_from_bytes(ptr0, len0);
        return Redeemer.__wrap(ret);
      }
      tag() {
        var ret = redeemer_tag(this.ptr);
        return RedeemerTag.__wrap(ret);
      }
      index() {
        var ret = redeemer_index(this.ptr);
        return BigNum.__wrap(ret);
      }
      data() {
        var ret = redeemer_data(this.ptr);
        return PlutusData.__wrap(ret);
      }
      ex_units() {
        var ret = redeemer_ex_units(this.ptr);
        return ExUnits.__wrap(ret);
      }
      static new(tag, index, data2, ex_units) {
        _assertClass(tag, RedeemerTag);
        _assertClass(index, BigNum);
        _assertClass(data2, PlutusData);
        _assertClass(ex_units, ExUnits);
        var ret = redeemer_new(tag.ptr, index.ptr, data2.ptr, ex_units.ptr);
        return Redeemer.__wrap(ret);
      }
    };
    RedeemerTag = class {
      static __wrap(ptr) {
        const obj = Object.create(RedeemerTag.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_redeemertag_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          redeemertag_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = redeemertag_from_bytes(ptr0, len0);
        return RedeemerTag.__wrap(ret);
      }
      static new_spend() {
        var ret = redeemertag_new_spend();
        return RedeemerTag.__wrap(ret);
      }
      static new_mint() {
        var ret = redeemertag_new_mint();
        return RedeemerTag.__wrap(ret);
      }
      static new_cert() {
        var ret = redeemertag_new_cert();
        return RedeemerTag.__wrap(ret);
      }
      static new_reward() {
        var ret = redeemertag_new_reward();
        return RedeemerTag.__wrap(ret);
      }
      kind() {
        var ret = redeemertag_kind(this.ptr);
        return ret >>> 0;
      }
    };
    Redeemers = class {
      static __wrap(ptr) {
        const obj = Object.create(Redeemers.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_redeemers_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          redeemers_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = redeemers_from_bytes(ptr0, len0);
        return Redeemers.__wrap(ret);
      }
      static new() {
        var ret = redeemers_new();
        return Redeemers.__wrap(ret);
      }
      len() {
        var ret = redeemers_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = redeemers_get(this.ptr, index);
        return Redeemer.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, Redeemer);
        redeemers_add(this.ptr, elem.ptr);
      }
    };
    Relay = class {
      static __wrap(ptr) {
        const obj = Object.create(Relay.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_relay_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          relay_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = relay_from_bytes(ptr0, len0);
        return Relay.__wrap(ret);
      }
      static new_single_host_addr(single_host_addr) {
        _assertClass(single_host_addr, SingleHostAddr);
        var ret = relay_new_single_host_addr(single_host_addr.ptr);
        return Relay.__wrap(ret);
      }
      static new_single_host_name(single_host_name) {
        _assertClass(single_host_name, SingleHostName);
        var ret = relay_new_single_host_name(single_host_name.ptr);
        return Relay.__wrap(ret);
      }
      static new_multi_host_name(multi_host_name) {
        _assertClass(multi_host_name, MultiHostName);
        var ret = relay_new_multi_host_name(multi_host_name.ptr);
        return Relay.__wrap(ret);
      }
      kind() {
        var ret = relay_kind(this.ptr);
        return ret >>> 0;
      }
      as_single_host_addr() {
        var ret = relay_as_single_host_addr(this.ptr);
        return ret === 0 ? void 0 : SingleHostAddr.__wrap(ret);
      }
      as_single_host_name() {
        var ret = relay_as_single_host_name(this.ptr);
        return ret === 0 ? void 0 : SingleHostName.__wrap(ret);
      }
      as_multi_host_name() {
        var ret = relay_as_multi_host_name(this.ptr);
        return ret === 0 ? void 0 : MultiHostName.__wrap(ret);
      }
    };
    Relays = class {
      static __wrap(ptr) {
        const obj = Object.create(Relays.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_relays_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          relays_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = relays_from_bytes(ptr0, len0);
        return Relays.__wrap(ret);
      }
      static new() {
        var ret = relays_new();
        return Relays.__wrap(ret);
      }
      len() {
        var ret = relays_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = relays_get(this.ptr, index);
        return Relay.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, Relay);
        relays_add(this.ptr, elem.ptr);
      }
    };
    RewardAddress = class {
      static __wrap(ptr) {
        const obj = Object.create(RewardAddress.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_rewardaddress_free(ptr);
      }
      static new(network, payment) {
        _assertClass(payment, StakeCredential);
        var ret = rewardaddress_new(network, payment.ptr);
        return RewardAddress.__wrap(ret);
      }
      payment_cred() {
        var ret = rewardaddress_payment_cred(this.ptr);
        return StakeCredential.__wrap(ret);
      }
      to_address() {
        var ret = rewardaddress_to_address(this.ptr);
        return Address.__wrap(ret);
      }
      static from_address(addr) {
        _assertClass(addr, Address);
        var ret = rewardaddress_from_address(addr.ptr);
        return ret === 0 ? void 0 : RewardAddress.__wrap(ret);
      }
    };
    RewardAddresses = class {
      static __wrap(ptr) {
        const obj = Object.create(RewardAddresses.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_rewardaddresses_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          rewardaddresses_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = rewardaddresses_from_bytes(ptr0, len0);
        return RewardAddresses.__wrap(ret);
      }
      static new() {
        var ret = rewardaddresses_new();
        return RewardAddresses.__wrap(ret);
      }
      len() {
        var ret = rewardaddresses_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = rewardaddresses_get(this.ptr, index);
        return RewardAddress.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, RewardAddress);
        rewardaddresses_add(this.ptr, elem.ptr);
      }
    };
    ScriptAll = class {
      static __wrap(ptr) {
        const obj = Object.create(ScriptAll.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_scriptall_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          scriptall_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = scriptall_from_bytes(ptr0, len0);
        return ScriptAll.__wrap(ret);
      }
      native_scripts() {
        var ret = scriptall_native_scripts(this.ptr);
        return NativeScripts.__wrap(ret);
      }
      static new(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        var ret = scriptall_new(native_scripts.ptr);
        return ScriptAll.__wrap(ret);
      }
    };
    ScriptAny = class {
      static __wrap(ptr) {
        const obj = Object.create(ScriptAny.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_scriptany_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          scriptany_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = scriptany_from_bytes(ptr0, len0);
        return ScriptAny.__wrap(ret);
      }
      native_scripts() {
        var ret = scriptany_native_scripts(this.ptr);
        return NativeScripts.__wrap(ret);
      }
      static new(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        var ret = scriptany_new(native_scripts.ptr);
        return ScriptAny.__wrap(ret);
      }
    };
    ScriptDataHash = class {
      static __wrap(ptr) {
        const obj = Object.create(ScriptDataHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_scriptdatahash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          scriptdatahash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          scriptdatahash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = scriptdatahash_from_bech32(ptr0, len0);
        return ScriptDataHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = scriptdatahash_from_bytes(ptr0, len0);
        return ScriptDataHash.__wrap(ret);
      }
    };
    ScriptHash = class {
      static __wrap(ptr) {
        const obj = Object.create(ScriptHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_scripthash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          scripthash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          scripthash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = scripthash_from_bech32(ptr0, len0);
        return ScriptHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = scripthash_from_bytes(ptr0, len0);
        return ScriptHash.__wrap(ret);
      }
    };
    ScriptHashes = class {
      static __wrap(ptr) {
        const obj = Object.create(ScriptHashes.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_scripthashes_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          scripthashes_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = scripthashes_from_bytes(ptr0, len0);
        return ScriptHashes.__wrap(ret);
      }
      static new() {
        var ret = scripthashes_new();
        return ScriptHashes.__wrap(ret);
      }
      len() {
        var ret = scripthashes_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = scripthashes_get(this.ptr, index);
        return ScriptHash.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, ScriptHash);
        scripthashes_add(this.ptr, elem.ptr);
      }
    };
    ScriptNOfK = class {
      static __wrap(ptr) {
        const obj = Object.create(ScriptNOfK.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_scriptnofk_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          scriptnofk_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = scriptnofk_from_bytes(ptr0, len0);
        return ScriptNOfK.__wrap(ret);
      }
      n() {
        var ret = scriptnofk_n(this.ptr);
        return ret >>> 0;
      }
      native_scripts() {
        var ret = scriptnofk_native_scripts(this.ptr);
        return NativeScripts.__wrap(ret);
      }
      static new(n, native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        var ret = scriptnofk_new(n, native_scripts.ptr);
        return ScriptNOfK.__wrap(ret);
      }
    };
    ScriptPubkey = class {
      static __wrap(ptr) {
        const obj = Object.create(ScriptPubkey.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_scriptpubkey_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          scriptpubkey_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = scriptpubkey_from_bytes(ptr0, len0);
        return ScriptPubkey.__wrap(ret);
      }
      addr_keyhash() {
        var ret = scriptpubkey_addr_keyhash(this.ptr);
        return Ed25519KeyHash.__wrap(ret);
      }
      static new(addr_keyhash) {
        _assertClass(addr_keyhash, Ed25519KeyHash);
        var ret = scriptpubkey_new(addr_keyhash.ptr);
        return ScriptPubkey.__wrap(ret);
      }
    };
    SingleHostAddr = class {
      static __wrap(ptr) {
        const obj = Object.create(SingleHostAddr.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_singlehostaddr_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          singlehostaddr_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = singlehostaddr_from_bytes(ptr0, len0);
        return SingleHostAddr.__wrap(ret);
      }
      port() {
        var ret = singlehostaddr_port(this.ptr);
        return ret === 16777215 ? void 0 : ret;
      }
      ipv4() {
        var ret = singlehostaddr_ipv4(this.ptr);
        return ret === 0 ? void 0 : Ipv4.__wrap(ret);
      }
      ipv6() {
        var ret = singlehostaddr_ipv6(this.ptr);
        return ret === 0 ? void 0 : Ipv6.__wrap(ret);
      }
      static new(port, ipv4, ipv6) {
        let ptr0 = 0;
        if (!isLikeNone(ipv4)) {
          _assertClass(ipv4, Ipv4);
          ptr0 = ipv4.ptr;
          ipv4.ptr = 0;
        }
        let ptr1 = 0;
        if (!isLikeNone(ipv6)) {
          _assertClass(ipv6, Ipv6);
          ptr1 = ipv6.ptr;
          ipv6.ptr = 0;
        }
        var ret = singlehostaddr_new(isLikeNone(port) ? 16777215 : port, ptr0, ptr1);
        return SingleHostAddr.__wrap(ret);
      }
    };
    SingleHostName = class {
      static __wrap(ptr) {
        const obj = Object.create(SingleHostName.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_singlehostname_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          singlehostname_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = singlehostname_from_bytes(ptr0, len0);
        return SingleHostName.__wrap(ret);
      }
      port() {
        var ret = singlehostname_port(this.ptr);
        return ret === 16777215 ? void 0 : ret;
      }
      dns_name() {
        var ret = singlehostname_dns_name(this.ptr);
        return DNSRecordAorAAAA.__wrap(ret);
      }
      static new(port, dns_name) {
        _assertClass(dns_name, DNSRecordAorAAAA);
        var ret = singlehostname_new(isLikeNone(port) ? 16777215 : port, dns_name.ptr);
        return SingleHostName.__wrap(ret);
      }
    };
    StakeCredential = class {
      static __wrap(ptr) {
        const obj = Object.create(StakeCredential.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_stakecredential_free(ptr);
      }
      static from_keyhash(hash) {
        _assertClass(hash, Ed25519KeyHash);
        var ret = stakecredential_from_keyhash(hash.ptr);
        return StakeCredential.__wrap(ret);
      }
      static from_scripthash(hash) {
        _assertClass(hash, ScriptHash);
        var ret = stakecredential_from_scripthash(hash.ptr);
        return StakeCredential.__wrap(ret);
      }
      to_keyhash() {
        var ret = stakecredential_to_keyhash(this.ptr);
        return ret === 0 ? void 0 : Ed25519KeyHash.__wrap(ret);
      }
      to_scripthash() {
        var ret = stakecredential_to_scripthash(this.ptr);
        return ret === 0 ? void 0 : ScriptHash.__wrap(ret);
      }
      kind() {
        var ret = stakecredential_kind(this.ptr);
        return ret;
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          stakecredential_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = stakecredential_from_bytes(ptr0, len0);
        return StakeCredential.__wrap(ret);
      }
    };
    StakeCredentials = class {
      static __wrap(ptr) {
        const obj = Object.create(StakeCredentials.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_stakecredentials_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          stakecredentials_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = stakecredentials_from_bytes(ptr0, len0);
        return StakeCredentials.__wrap(ret);
      }
      static new() {
        var ret = stakecredentials_new();
        return StakeCredentials.__wrap(ret);
      }
      len() {
        var ret = stakecredentials_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = stakecredentials_get(this.ptr, index);
        return StakeCredential.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, StakeCredential);
        stakecredentials_add(this.ptr, elem.ptr);
      }
    };
    StakeDelegation = class {
      static __wrap(ptr) {
        const obj = Object.create(StakeDelegation.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_stakedelegation_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          stakedelegation_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = stakedelegation_from_bytes(ptr0, len0);
        return StakeDelegation.__wrap(ret);
      }
      stake_credential() {
        var ret = stakedelegation_stake_credential(this.ptr);
        return StakeCredential.__wrap(ret);
      }
      pool_keyhash() {
        var ret = stakedelegation_pool_keyhash(this.ptr);
        return Ed25519KeyHash.__wrap(ret);
      }
      static new(stake_credential, pool_keyhash) {
        _assertClass(stake_credential, StakeCredential);
        _assertClass(pool_keyhash, Ed25519KeyHash);
        var ret = stakedelegation_new(stake_credential.ptr, pool_keyhash.ptr);
        return StakeDelegation.__wrap(ret);
      }
    };
    StakeDeregistration = class {
      static __wrap(ptr) {
        const obj = Object.create(StakeDeregistration.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_stakederegistration_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          stakederegistration_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = stakederegistration_from_bytes(ptr0, len0);
        return StakeDeregistration.__wrap(ret);
      }
      stake_credential() {
        var ret = stakederegistration_stake_credential(this.ptr);
        return StakeCredential.__wrap(ret);
      }
      static new(stake_credential) {
        _assertClass(stake_credential, StakeCredential);
        var ret = stakederegistration_new(stake_credential.ptr);
        return StakeDeregistration.__wrap(ret);
      }
    };
    StakeRegistration = class {
      static __wrap(ptr) {
        const obj = Object.create(StakeRegistration.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_stakeregistration_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          stakeregistration_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = stakeregistration_from_bytes(ptr0, len0);
        return StakeRegistration.__wrap(ret);
      }
      stake_credential() {
        var ret = stakeregistration_stake_credential(this.ptr);
        return StakeCredential.__wrap(ret);
      }
      static new(stake_credential) {
        _assertClass(stake_credential, StakeCredential);
        var ret = stakeregistration_new(stake_credential.ptr);
        return StakeRegistration.__wrap(ret);
      }
    };
    Strings = class {
      static __wrap(ptr) {
        const obj = Object.create(Strings.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_strings_free(ptr);
      }
      static new() {
        var ret = strings_new();
        return Strings.__wrap(ret);
      }
      len() {
        var ret = strings_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          strings_get(retptr, this.ptr, index);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      add(elem) {
        var ptr0 = passStringToWasm0(elem, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        strings_add(this.ptr, ptr0, len0);
      }
    };
    TimelockExpiry = class {
      static __wrap(ptr) {
        const obj = Object.create(TimelockExpiry.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_timelockexpiry_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          timelockexpiry_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = timelockexpiry_from_bytes(ptr0, len0);
        return TimelockExpiry.__wrap(ret);
      }
      slot() {
        var ret = timelockexpiry_slot(this.ptr);
        return ret >>> 0;
      }
      static new(slot) {
        var ret = timelockexpiry_new(slot);
        return TimelockExpiry.__wrap(ret);
      }
    };
    TimelockStart = class {
      static __wrap(ptr) {
        const obj = Object.create(TimelockStart.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_timelockstart_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          timelockstart_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = timelockstart_from_bytes(ptr0, len0);
        return TimelockStart.__wrap(ret);
      }
      slot() {
        var ret = timelockstart_slot(this.ptr);
        return ret >>> 0;
      }
      static new(slot) {
        var ret = timelockstart_new(slot);
        return TimelockStart.__wrap(ret);
      }
    };
    Transaction = class {
      static __wrap(ptr) {
        const obj = Object.create(Transaction.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transaction_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transaction_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transaction_from_bytes(ptr0, len0);
        return Transaction.__wrap(ret);
      }
      body() {
        var ret = transaction_body(this.ptr);
        return TransactionBody.__wrap(ret);
      }
      witness_set() {
        var ret = transaction_witness_set(this.ptr);
        return TransactionWitnessSet.__wrap(ret);
      }
      is_valid() {
        var ret = transaction_is_valid(this.ptr);
        return ret !== 0;
      }
      auxiliary_data() {
        var ret = transaction_auxiliary_data(this.ptr);
        return ret === 0 ? void 0 : AuxiliaryData.__wrap(ret);
      }
      set_is_valid(valid) {
        transaction_set_is_valid(this.ptr, valid);
      }
      static new(body, witness_set, auxiliary_data) {
        _assertClass(body, TransactionBody);
        _assertClass(witness_set, TransactionWitnessSet);
        let ptr0 = 0;
        if (!isLikeNone(auxiliary_data)) {
          _assertClass(auxiliary_data, AuxiliaryData);
          ptr0 = auxiliary_data.ptr;
          auxiliary_data.ptr = 0;
        }
        var ret = transaction_new(body.ptr, witness_set.ptr, ptr0);
        return Transaction.__wrap(ret);
      }
    };
    TransactionBodies = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionBodies.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionbodies_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionbodies_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionbodies_from_bytes(ptr0, len0);
        return TransactionBodies.__wrap(ret);
      }
      static new() {
        var ret = transactionbodies_new();
        return TransactionBodies.__wrap(ret);
      }
      len() {
        var ret = transactionbodies_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = transactionbodies_get(this.ptr, index);
        return TransactionBody.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, TransactionBody);
        transactionbodies_add(this.ptr, elem.ptr);
      }
    };
    TransactionBody = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionBody.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionbody_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionbody_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionbody_from_bytes(ptr0, len0);
        return TransactionBody.__wrap(ret);
      }
      inputs() {
        var ret = transactionbody_inputs(this.ptr);
        return TransactionInputs.__wrap(ret);
      }
      outputs() {
        var ret = transactionbody_outputs(this.ptr);
        return TransactionOutputs.__wrap(ret);
      }
      fee() {
        var ret = transactionbody_fee(this.ptr);
        return BigNum.__wrap(ret);
      }
      ttl() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionbody_ttl(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return r0 === 0 ? void 0 : r1 >>> 0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      set_certs(certs) {
        _assertClass(certs, Certificates);
        transactionbody_set_certs(this.ptr, certs.ptr);
      }
      certs() {
        var ret = transactionbody_certs(this.ptr);
        return ret === 0 ? void 0 : Certificates.__wrap(ret);
      }
      set_withdrawals(withdrawals) {
        _assertClass(withdrawals, Withdrawals);
        transactionbody_set_withdrawals(this.ptr, withdrawals.ptr);
      }
      withdrawals() {
        var ret = transactionbody_withdrawals(this.ptr);
        return ret === 0 ? void 0 : Withdrawals.__wrap(ret);
      }
      set_update(update) {
        _assertClass(update, Update);
        transactionbody_set_update(this.ptr, update.ptr);
      }
      update() {
        var ret = transactionbody_update(this.ptr);
        return ret === 0 ? void 0 : Update.__wrap(ret);
      }
      set_auxiliary_data_hash(auxiliary_data_hash) {
        _assertClass(auxiliary_data_hash, AuxiliaryDataHash);
        transactionbody_set_auxiliary_data_hash(this.ptr, auxiliary_data_hash.ptr);
      }
      auxiliary_data_hash() {
        var ret = transactionbody_auxiliary_data_hash(this.ptr);
        return ret === 0 ? void 0 : AuxiliaryDataHash.__wrap(ret);
      }
      set_validity_start_interval(validity_start_interval) {
        transactionbody_set_validity_start_interval(this.ptr, validity_start_interval);
      }
      validity_start_interval() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionbody_validity_start_interval(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return r0 === 0 ? void 0 : r1 >>> 0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      set_mint(mint) {
        _assertClass(mint, Mint);
        transactionbody_set_mint(this.ptr, mint.ptr);
      }
      multiassets() {
        var ret = transactionbody_multiassets(this.ptr);
        return ret === 0 ? void 0 : Mint.__wrap(ret);
      }
      set_script_data_hash(script_data_hash) {
        _assertClass(script_data_hash, ScriptDataHash);
        transactionbody_set_script_data_hash(this.ptr, script_data_hash.ptr);
      }
      script_data_hash() {
        var ret = transactionbody_script_data_hash(this.ptr);
        return ret === 0 ? void 0 : ScriptDataHash.__wrap(ret);
      }
      set_collateral(collateral) {
        _assertClass(collateral, TransactionInputs);
        transactionbody_set_collateral(this.ptr, collateral.ptr);
      }
      collateral() {
        var ret = transactionbody_collateral(this.ptr);
        return ret === 0 ? void 0 : TransactionInputs.__wrap(ret);
      }
      set_required_signers(required_signers) {
        _assertClass(required_signers, Ed25519KeyHashes);
        transactionbody_set_required_signers(this.ptr, required_signers.ptr);
      }
      required_signers() {
        var ret = transactionbody_required_signers(this.ptr);
        return ret === 0 ? void 0 : Ed25519KeyHashes.__wrap(ret);
      }
      set_network_id(network_id) {
        _assertClass(network_id, NetworkId);
        transactionbody_set_network_id(this.ptr, network_id.ptr);
      }
      network_id() {
        var ret = transactionbody_network_id(this.ptr);
        return ret === 0 ? void 0 : NetworkId.__wrap(ret);
      }
      static new(inputs, outputs, fee, ttl) {
        _assertClass(inputs, TransactionInputs);
        _assertClass(outputs, TransactionOutputs);
        _assertClass(fee, BigNum);
        var ret = transactionbody_new(inputs.ptr, outputs.ptr, fee.ptr, !isLikeNone(ttl), isLikeNone(ttl) ? 0 : ttl);
        return TransactionBody.__wrap(ret);
      }
    };
    TransactionBuilder = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionBuilder.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionbuilder_free(ptr);
      }
      add_key_input(hash, input, amount) {
        _assertClass(hash, Ed25519KeyHash);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        transactionbuilder_add_key_input(this.ptr, hash.ptr, input.ptr, amount.ptr);
      }
      add_script_input(hash, input, amount) {
        _assertClass(hash, ScriptHash);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        transactionbuilder_add_script_input(this.ptr, hash.ptr, input.ptr, amount.ptr);
      }
      add_bootstrap_input(hash, input, amount) {
        _assertClass(hash, ByronAddress);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        transactionbuilder_add_bootstrap_input(this.ptr, hash.ptr, input.ptr, amount.ptr);
      }
      add_input(address2, input, amount) {
        _assertClass(address2, Address);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        transactionbuilder_add_input(this.ptr, address2.ptr, input.ptr, amount.ptr);
      }
      fee_for_input(address2, input, amount) {
        _assertClass(address2, Address);
        _assertClass(input, TransactionInput);
        _assertClass(amount, Value);
        var ret = transactionbuilder_fee_for_input(this.ptr, address2.ptr, input.ptr, amount.ptr);
        return BigNum.__wrap(ret);
      }
      add_output(output) {
        _assertClass(output, TransactionOutput);
        transactionbuilder_add_output(this.ptr, output.ptr);
      }
      fee_for_output(output) {
        _assertClass(output, TransactionOutput);
        var ret = transactionbuilder_fee_for_output(this.ptr, output.ptr);
        return BigNum.__wrap(ret);
      }
      set_fee(fee) {
        _assertClass(fee, BigNum);
        transactionbuilder_set_fee(this.ptr, fee.ptr);
      }
      set_ttl(ttl) {
        transactionbuilder_set_ttl(this.ptr, ttl);
      }
      set_validity_start_interval(validity_start_interval) {
        transactionbuilder_set_validity_start_interval(this.ptr, validity_start_interval);
      }
      set_certs(certs) {
        _assertClass(certs, Certificates);
        transactionbuilder_set_certs(this.ptr, certs.ptr);
      }
      set_withdrawals(withdrawals) {
        _assertClass(withdrawals, Withdrawals);
        transactionbuilder_set_withdrawals(this.ptr, withdrawals.ptr);
      }
      set_auxiliary_data(auxiliary_data) {
        _assertClass(auxiliary_data, AuxiliaryData);
        transactionbuilder_set_auxiliary_data(this.ptr, auxiliary_data.ptr);
      }
      static new(linear_fee, minimum_utxo_val, pool_deposit, key_deposit, max_value_size, max_tx_size) {
        _assertClass(linear_fee, LinearFee);
        _assertClass(minimum_utxo_val, BigNum);
        _assertClass(pool_deposit, BigNum);
        _assertClass(key_deposit, BigNum);
        var ret = transactionbuilder_new(linear_fee.ptr, minimum_utxo_val.ptr, pool_deposit.ptr, key_deposit.ptr, max_value_size, max_tx_size);
        return TransactionBuilder.__wrap(ret);
      }
      get_explicit_input() {
        var ret = transactionbuilder_get_explicit_input(this.ptr);
        return Value.__wrap(ret);
      }
      get_implicit_input() {
        var ret = transactionbuilder_get_implicit_input(this.ptr);
        return Value.__wrap(ret);
      }
      get_explicit_output() {
        var ret = transactionbuilder_get_explicit_output(this.ptr);
        return Value.__wrap(ret);
      }
      get_deposit() {
        var ret = transactionbuilder_get_deposit(this.ptr);
        return BigNum.__wrap(ret);
      }
      get_fee_if_set() {
        var ret = transactionbuilder_get_fee_if_set(this.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      add_change_if_needed(address2) {
        _assertClass(address2, Address);
        var ret = transactionbuilder_add_change_if_needed(this.ptr, address2.ptr);
        return ret !== 0;
      }
      full_size() {
        var ret = transactionbuilder_full_size(this.ptr);
        return ret >>> 0;
      }
      output_sizes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionbuilder_output_sizes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU32FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 4);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      build() {
        var ret = transactionbuilder_build(this.ptr);
        return TransactionBody.__wrap(ret);
      }
      min_fee() {
        var ret = transactionbuilder_min_fee(this.ptr);
        return BigNum.__wrap(ret);
      }
    };
    TransactionHash = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionhash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionhash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          transactionhash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionhash_from_bech32(ptr0, len0);
        return TransactionHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionhash_from_bytes(ptr0, len0);
        return TransactionHash.__wrap(ret);
      }
    };
    TransactionInput = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionInput.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactioninput_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactioninput_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactioninput_from_bytes(ptr0, len0);
        return TransactionInput.__wrap(ret);
      }
      transaction_id() {
        var ret = transactioninput_transaction_id(this.ptr);
        return TransactionHash.__wrap(ret);
      }
      index() {
        var ret = transactioninput_index(this.ptr);
        return ret >>> 0;
      }
      static new(transaction_id, index) {
        _assertClass(transaction_id, TransactionHash);
        var ret = transactioninput_new(transaction_id.ptr, index);
        return TransactionInput.__wrap(ret);
      }
    };
    TransactionInputs = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionInputs.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactioninputs_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactioninputs_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactioninputs_from_bytes(ptr0, len0);
        return TransactionInputs.__wrap(ret);
      }
      static new() {
        var ret = transactioninputs_new();
        return TransactionInputs.__wrap(ret);
      }
      len() {
        var ret = transactioninputs_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = transactioninputs_get(this.ptr, index);
        return TransactionInput.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, TransactionInput);
        transactioninputs_add(this.ptr, elem.ptr);
      }
    };
    TransactionMetadatum = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionMetadatum.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionmetadatum_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionmetadatum_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionmetadatum_from_bytes(ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
      }
      static new_map(map) {
        _assertClass(map, MetadataMap);
        var ret = transactionmetadatum_new_map(map.ptr);
        return TransactionMetadatum.__wrap(ret);
      }
      static new_list(list) {
        _assertClass(list, MetadataList);
        var ret = transactionmetadatum_new_list(list.ptr);
        return TransactionMetadatum.__wrap(ret);
      }
      static new_int(int) {
        _assertClass(int, Int);
        var ret = transactionmetadatum_new_int(int.ptr);
        return TransactionMetadatum.__wrap(ret);
      }
      static new_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionmetadatum_new_bytes(ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
      }
      static new_text(text) {
        var ptr0 = passStringToWasm0(text, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionmetadatum_new_text(ptr0, len0);
        return TransactionMetadatum.__wrap(ret);
      }
      kind() {
        var ret = transactionmetadatum_kind(this.ptr);
        return ret >>> 0;
      }
      as_map() {
        var ret = transactionmetadatum_as_map(this.ptr);
        return MetadataMap.__wrap(ret);
      }
      as_list() {
        var ret = transactionmetadatum_as_list(this.ptr);
        return MetadataList.__wrap(ret);
      }
      as_int() {
        var ret = transactionmetadatum_as_int(this.ptr);
        return Int.__wrap(ret);
      }
      as_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionmetadatum_as_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      as_text() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionmetadatum_as_text(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
    };
    TransactionMetadatumLabels = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionMetadatumLabels.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionmetadatumlabels_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionmetadatumlabels_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionmetadatumlabels_from_bytes(ptr0, len0);
        return TransactionMetadatumLabels.__wrap(ret);
      }
      static new() {
        var ret = transactionmetadatumlabels_new();
        return TransactionMetadatumLabels.__wrap(ret);
      }
      len() {
        var ret = transactionmetadatumlabels_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = transactionmetadatumlabels_get(this.ptr, index);
        return BigNum.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, BigNum);
        transactionmetadatumlabels_add(this.ptr, elem.ptr);
      }
    };
    TransactionOutput = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionOutput.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionoutput_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionoutput_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionoutput_from_bytes(ptr0, len0);
        return TransactionOutput.__wrap(ret);
      }
      address() {
        var ret = transactionoutput_address(this.ptr);
        return Address.__wrap(ret);
      }
      amount() {
        var ret = transactionoutput_amount(this.ptr);
        return Value.__wrap(ret);
      }
      data_hash() {
        var ret = transactionoutput_data_hash(this.ptr);
        return ret === 0 ? void 0 : DataHash.__wrap(ret);
      }
      set_data_hash(data_hash) {
        _assertClass(data_hash, DataHash);
        transactionoutput_set_data_hash(this.ptr, data_hash.ptr);
      }
      static new(address2, amount) {
        _assertClass(address2, Address);
        _assertClass(amount, Value);
        var ret = transactionoutput_new(address2.ptr, amount.ptr);
        return TransactionOutput.__wrap(ret);
      }
    };
    TransactionOutputs = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionOutputs.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionoutputs_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionoutputs_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionoutputs_from_bytes(ptr0, len0);
        return TransactionOutputs.__wrap(ret);
      }
      static new() {
        var ret = transactionoutputs_new();
        return TransactionOutputs.__wrap(ret);
      }
      len() {
        var ret = transactionoutputs_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = transactionoutputs_get(this.ptr, index);
        return TransactionOutput.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, TransactionOutput);
        transactionoutputs_add(this.ptr, elem.ptr);
      }
    };
    TransactionUnspentOutput = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionUnspentOutput.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionunspentoutput_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionunspentoutput_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionunspentoutput_from_bytes(ptr0, len0);
        return TransactionUnspentOutput.__wrap(ret);
      }
      static new(input, output) {
        _assertClass(input, TransactionInput);
        _assertClass(output, TransactionOutput);
        var ret = transactionunspentoutput_new(input.ptr, output.ptr);
        return TransactionUnspentOutput.__wrap(ret);
      }
      input() {
        var ret = transactionunspentoutput_input(this.ptr);
        return TransactionInput.__wrap(ret);
      }
      output() {
        var ret = transactionunspentoutput_output(this.ptr);
        return TransactionOutput.__wrap(ret);
      }
    };
    TransactionWitnessSet = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionWitnessSet.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionwitnessset_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionwitnessset_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionwitnessset_from_bytes(ptr0, len0);
        return TransactionWitnessSet.__wrap(ret);
      }
      set_vkeys(vkeys) {
        _assertClass(vkeys, Vkeywitnesses);
        transactionwitnessset_set_vkeys(this.ptr, vkeys.ptr);
      }
      vkeys() {
        var ret = transactionwitnessset_vkeys(this.ptr);
        return ret === 0 ? void 0 : Vkeywitnesses.__wrap(ret);
      }
      set_native_scripts(native_scripts) {
        _assertClass(native_scripts, NativeScripts);
        transactionwitnessset_set_native_scripts(this.ptr, native_scripts.ptr);
      }
      native_scripts() {
        var ret = transactionwitnessset_native_scripts(this.ptr);
        return ret === 0 ? void 0 : NativeScripts.__wrap(ret);
      }
      set_bootstraps(bootstraps) {
        _assertClass(bootstraps, BootstrapWitnesses);
        transactionwitnessset_set_bootstraps(this.ptr, bootstraps.ptr);
      }
      bootstraps() {
        var ret = transactionwitnessset_bootstraps(this.ptr);
        return ret === 0 ? void 0 : BootstrapWitnesses.__wrap(ret);
      }
      set_plutus_scripts(plutus_scripts) {
        _assertClass(plutus_scripts, PlutusScripts);
        transactionwitnessset_set_plutus_scripts(this.ptr, plutus_scripts.ptr);
      }
      plutus_scripts() {
        var ret = transactionwitnessset_plutus_scripts(this.ptr);
        return ret === 0 ? void 0 : PlutusScripts.__wrap(ret);
      }
      set_plutus_data(plutus_data) {
        _assertClass(plutus_data, PlutusList);
        transactionwitnessset_set_plutus_data(this.ptr, plutus_data.ptr);
      }
      plutus_data() {
        var ret = transactionwitnessset_plutus_data(this.ptr);
        return ret === 0 ? void 0 : PlutusList.__wrap(ret);
      }
      set_redeemers(redeemers) {
        _assertClass(redeemers, Redeemers);
        transactionwitnessset_set_redeemers(this.ptr, redeemers.ptr);
      }
      redeemers() {
        var ret = transactionwitnessset_redeemers(this.ptr);
        return ret === 0 ? void 0 : Redeemers.__wrap(ret);
      }
      static new() {
        var ret = transactionwitnessset_new();
        return TransactionWitnessSet.__wrap(ret);
      }
    };
    TransactionWitnessSets = class {
      static __wrap(ptr) {
        const obj = Object.create(TransactionWitnessSets.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_transactionwitnesssets_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          transactionwitnesssets_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = transactionwitnesssets_from_bytes(ptr0, len0);
        return TransactionWitnessSets.__wrap(ret);
      }
      static new() {
        var ret = transactionwitnesssets_new();
        return TransactionWitnessSets.__wrap(ret);
      }
      len() {
        var ret = transactionwitnesssets_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = transactionwitnesssets_get(this.ptr, index);
        return TransactionWitnessSet.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, TransactionWitnessSet);
        transactionwitnesssets_add(this.ptr, elem.ptr);
      }
    };
    URL2 = class {
      static __wrap(ptr) {
        const obj = Object.create(URL2.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_url_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          url_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = url_from_bytes(ptr0, len0);
        return URL2.__wrap(ret);
      }
      static new(url) {
        var ptr0 = passStringToWasm0(url, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = url_new(ptr0, len0);
        return URL2.__wrap(ret);
      }
      url() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          url_url(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
    };
    UnitInterval = class {
      static __wrap(ptr) {
        const obj = Object.create(UnitInterval.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_unitinterval_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          unitinterval_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = unitinterval_from_bytes(ptr0, len0);
        return UnitInterval.__wrap(ret);
      }
      numerator() {
        var ret = unitinterval_numerator(this.ptr);
        return BigNum.__wrap(ret);
      }
      denominator() {
        var ret = unitinterval_denominator(this.ptr);
        return BigNum.__wrap(ret);
      }
      static new(numerator, denominator) {
        _assertClass(numerator, BigNum);
        _assertClass(denominator, BigNum);
        var ret = unitinterval_new(numerator.ptr, denominator.ptr);
        return UnitInterval.__wrap(ret);
      }
    };
    Update = class {
      static __wrap(ptr) {
        const obj = Object.create(Update.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_update_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          update_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = update_from_bytes(ptr0, len0);
        return Update.__wrap(ret);
      }
      proposed_protocol_parameter_updates() {
        var ret = update_proposed_protocol_parameter_updates(this.ptr);
        return ProposedProtocolParameterUpdates.__wrap(ret);
      }
      epoch() {
        var ret = update_epoch(this.ptr);
        return ret >>> 0;
      }
      static new(proposed_protocol_parameter_updates, epoch) {
        _assertClass(proposed_protocol_parameter_updates, ProposedProtocolParameterUpdates);
        var ret = update_new(proposed_protocol_parameter_updates.ptr, epoch);
        return Update.__wrap(ret);
      }
    };
    VRFCert = class {
      static __wrap(ptr) {
        const obj = Object.create(VRFCert.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_vrfcert_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          vrfcert_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = vrfcert_from_bytes(ptr0, len0);
        return VRFCert.__wrap(ret);
      }
      output() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          vrfcert_output(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      proof() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          vrfcert_proof(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static new(output, proof) {
        var ptr0 = passArray8ToWasm0(output, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(proof, __wbindgen_malloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = vrfcert_new(ptr0, len0, ptr1, len1);
        return VRFCert.__wrap(ret);
      }
    };
    VRFKeyHash = class {
      static __wrap(ptr) {
        const obj = Object.create(VRFKeyHash.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_vrfkeyhash_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          vrfkeyhash_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          vrfkeyhash_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = vrfkeyhash_from_bech32(ptr0, len0);
        return VRFKeyHash.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = vrfkeyhash_from_bytes(ptr0, len0);
        return VRFKeyHash.__wrap(ret);
      }
    };
    VRFVKey = class {
      static __wrap(ptr) {
        const obj = Object.create(VRFVKey.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_vrfvkey_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          vrfvkey_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      to_bech32(prefix2) {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          var ptr0 = passStringToWasm0(prefix2, __wbindgen_malloc, __wbindgen_realloc);
          var len0 = WASM_VECTOR_LEN;
          vrfvkey_to_bech32(retptr, this.ptr, ptr0, len0);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          return getStringFromWasm0(r0, r1);
        } finally {
          __wbindgen_add_to_stack_pointer(16);
          __wbindgen_free(r0, r1);
        }
      }
      static from_bech32(bech_str) {
        var ptr0 = passStringToWasm0(bech_str, __wbindgen_malloc, __wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = vrfvkey_from_bech32(ptr0, len0);
        return VRFVKey.__wrap(ret);
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = vrfvkey_from_bytes(ptr0, len0);
        return VRFVKey.__wrap(ret);
      }
    };
    Value = class {
      static __wrap(ptr) {
        const obj = Object.create(Value.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_value_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          value_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = value_from_bytes(ptr0, len0);
        return Value.__wrap(ret);
      }
      static new(coin) {
        _assertClass(coin, BigNum);
        var ret = value_new(coin.ptr);
        return Value.__wrap(ret);
      }
      coin() {
        var ret = value_coin(this.ptr);
        return BigNum.__wrap(ret);
      }
      set_coin(coin) {
        _assertClass(coin, BigNum);
        value_set_coin(this.ptr, coin.ptr);
      }
      multiasset() {
        var ret = value_multiasset(this.ptr);
        return ret === 0 ? void 0 : MultiAsset.__wrap(ret);
      }
      set_multiasset(multiasset) {
        _assertClass(multiasset, MultiAsset);
        value_set_multiasset(this.ptr, multiasset.ptr);
      }
      checked_add(rhs) {
        _assertClass(rhs, Value);
        var ret = value_checked_add(this.ptr, rhs.ptr);
        return Value.__wrap(ret);
      }
      checked_sub(rhs_value) {
        _assertClass(rhs_value, Value);
        var ret = value_checked_sub(this.ptr, rhs_value.ptr);
        return Value.__wrap(ret);
      }
      clamped_sub(rhs_value) {
        _assertClass(rhs_value, Value);
        var ret = value_clamped_sub(this.ptr, rhs_value.ptr);
        return Value.__wrap(ret);
      }
      compare(rhs_value) {
        _assertClass(rhs_value, Value);
        var ret = value_compare(this.ptr, rhs_value.ptr);
        return ret === 16777215 ? void 0 : ret;
      }
    };
    Vkey = class {
      static __wrap(ptr) {
        const obj = Object.create(Vkey.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_vkey_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          vkey_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = vkey_from_bytes(ptr0, len0);
        return Vkey.__wrap(ret);
      }
      static new(pk) {
        _assertClass(pk, PublicKey);
        var ret = vkey_new(pk.ptr);
        return Vkey.__wrap(ret);
      }
      public_key() {
        var ret = vkey_public_key(this.ptr);
        return PublicKey.__wrap(ret);
      }
    };
    Vkeys = class {
      static __wrap(ptr) {
        const obj = Object.create(Vkeys.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_vkeys_free(ptr);
      }
      static new() {
        var ret = vkeys_new();
        return Vkeys.__wrap(ret);
      }
      len() {
        var ret = vkeys_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = vkeys_get(this.ptr, index);
        return Vkey.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, Vkey);
        vkeys_add(this.ptr, elem.ptr);
      }
    };
    Vkeywitness = class {
      static __wrap(ptr) {
        const obj = Object.create(Vkeywitness.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_vkeywitness_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          vkeywitness_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = vkeywitness_from_bytes(ptr0, len0);
        return Vkeywitness.__wrap(ret);
      }
      static new(vkey, signature) {
        _assertClass(vkey, Vkey);
        _assertClass(signature, Ed25519Signature);
        var ret = vkeywitness_new(vkey.ptr, signature.ptr);
        return Vkeywitness.__wrap(ret);
      }
      vkey() {
        var ret = vkeywitness_vkey(this.ptr);
        return Vkey.__wrap(ret);
      }
      signature() {
        var ret = vkeywitness_signature(this.ptr);
        return Ed25519Signature.__wrap(ret);
      }
    };
    Vkeywitnesses = class {
      static __wrap(ptr) {
        const obj = Object.create(Vkeywitnesses.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_vkeywitnesses_free(ptr);
      }
      static new() {
        var ret = vkeywitnesses_new();
        return Vkeywitnesses.__wrap(ret);
      }
      len() {
        var ret = vkeywitnesses_len(this.ptr);
        return ret >>> 0;
      }
      get(index) {
        var ret = vkeywitnesses_get(this.ptr, index);
        return Vkeywitness.__wrap(ret);
      }
      add(elem) {
        _assertClass(elem, Vkeywitness);
        vkeywitnesses_add(this.ptr, elem.ptr);
      }
    };
    Withdrawals = class {
      static __wrap(ptr) {
        const obj = Object.create(Withdrawals.prototype);
        obj.ptr = ptr;
        return obj;
      }
      __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;
        return ptr;
      }
      free() {
        const ptr = this.__destroy_into_raw();
        __wbg_withdrawals_free(ptr);
      }
      to_bytes() {
        try {
          const retptr = __wbindgen_add_to_stack_pointer(-16);
          withdrawals_to_bytes(retptr, this.ptr);
          var r0 = getInt32Memory0()[retptr / 4 + 0];
          var r1 = getInt32Memory0()[retptr / 4 + 1];
          var v0 = getArrayU8FromWasm0(r0, r1).slice();
          __wbindgen_free(r0, r1 * 1);
          return v0;
        } finally {
          __wbindgen_add_to_stack_pointer(16);
        }
      }
      static from_bytes(bytes) {
        var ptr0 = passArray8ToWasm0(bytes, __wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        var ret = withdrawals_from_bytes(ptr0, len0);
        return Withdrawals.__wrap(ret);
      }
      static new() {
        var ret = withdrawals_new();
        return Withdrawals.__wrap(ret);
      }
      len() {
        var ret = withdrawals_len(this.ptr);
        return ret >>> 0;
      }
      insert(key, value) {
        _assertClass(key, RewardAddress);
        _assertClass(value, BigNum);
        var ret = withdrawals_insert(this.ptr, key.ptr, value.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      get(key) {
        _assertClass(key, RewardAddress);
        var ret = withdrawals_get(this.ptr, key.ptr);
        return ret === 0 ? void 0 : BigNum.__wrap(ret);
      }
      keys() {
        var ret = withdrawals_keys(this.ptr);
        return RewardAddresses.__wrap(ret);
      }
    };
  }
});

// node_modules/base64-js/index.js
var require_base64_js = __commonJS({
  "node_modules/base64-js/index.js"(exports) {
    "use strict";
    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;
    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }
    var i;
    var len;
    revLookup["-".charCodeAt(0)] = 62;
    revLookup["_".charCodeAt(0)] = 63;
    function getLens(b64) {
      var len2 = b64.length;
      if (len2 % 4 > 0) {
        throw new Error("Invalid string. Length must be a multiple of 4");
      }
      var validLen = b64.indexOf("=");
      if (validLen === -1)
        validLen = len2;
      var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
      return [validLen, placeHoldersLen];
    }
    function byteLength(b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function _byteLength(b64, validLen, placeHoldersLen) {
      return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
    }
    function toByteArray(b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
      var curByte = 0;
      var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
      var i2;
      for (i2 = 0; i2 < len2; i2 += 4) {
        tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
      }
      if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
      }
      return arr;
    }
    function tripletToBase64(num) {
      return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
    }
    function encodeChunk(uint8, start2, end) {
      var tmp;
      var output = [];
      for (var i2 = start2; i2 < end; i2 += 3) {
        tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
        output.push(tripletToBase64(tmp));
      }
      return output.join("");
    }
    function fromByteArray(uint8) {
      var tmp;
      var len2 = uint8.length;
      var extraBytes = len2 % 3;
      var parts = [];
      var maxChunkLength = 16383;
      for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
        parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
      }
      if (extraBytes === 1) {
        tmp = uint8[len2 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
      } else if (extraBytes === 2) {
        tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "=");
      }
      return parts.join("");
    }
  }
});

// node_modules/ieee754/index.js
var require_ieee754 = __commonJS({
  "node_modules/ieee754/index.js"(exports) {
    exports.read = function(buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? nBytes - 1 : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];
      i += d;
      e = s & (1 << -nBits) - 1;
      s >>= -nBits;
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      m = e & (1 << -nBits) - 1;
      e >>= -nBits;
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
      }
      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    };
    exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
      var i = isLE ? 0 : nBytes - 1;
      var d = isLE ? 1 : -1;
      var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
      value = Math.abs(value);
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }
        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }
      for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
      }
      e = e << mLen | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
      }
      buffer[offset + i - d] |= s * 128;
    };
  }
});

// node_modules/buffer/index.js
var require_buffer = __commonJS({
  "node_modules/buffer/index.js"(exports) {
    "use strict";
    var base64 = require_base64_js();
    var ieee754 = require_ieee754();
    var customInspectSymbol = typeof Symbol === "function" && typeof Symbol["for"] === "function" ? Symbol["for"]("nodejs.util.inspect.custom") : null;
    exports.Buffer = Buffer3;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports.kMaxLength = K_MAX_LENGTH;
    Buffer3.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer3.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
    }
    function typedArraySupport() {
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function() {
          return 42;
        } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer3.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer3.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer3.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function Buffer3(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError('The "string" argument must be of type string. Received type number');
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    Buffer3.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value);
      }
      if (value == null) {
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof SharedArrayBuffer !== "undefined" && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError('The "value" argument must not be of type number. Received type number');
      }
      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer3.from(valueOf, encodingOrOffset, length);
      }
      const b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer3.from(value[Symbol.toPrimitive]("string"), encodingOrOffset, length);
      }
      throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    }
    Buffer3.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Object.setPrototypeOf(Buffer3.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer3, Uint8Array);
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer3.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer3.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer3.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer3.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);
      const actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf;
    }
    function fromArrayView(arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
      }
      return fromArrayLike(arrayView);
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      let buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      Object.setPrototypeOf(buf, Buffer3.prototype);
      return buf;
    }
    function fromObject(obj) {
      if (Buffer3.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer3.alloc(+length);
    }
    Buffer3.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer3.prototype;
    };
    Buffer3.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer3.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer3.from(b, b.offset, b.byteLength);
      if (!Buffer3.isBuffer(a) || !Buffer3.isBuffer(b)) {
        throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
      }
      if (a === b)
        return 0;
      let x = a.length;
      let y = b.length;
      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer3.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer3.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer3.alloc(0);
      }
      let i;
      if (length === void 0) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }
      const buffer = Buffer3.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer3.isBuffer(buf))
              buf = Buffer3.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(buffer, buf, pos);
          }
        } else if (!Buffer3.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer;
    };
    function byteLength(string, encoding) {
      if (Buffer3.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string);
      }
      const len = string.length;
      const mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len === 0)
        return 0;
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len * 2;
          case "hex":
            return len >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.byteLength = byteLength;
    function slowToString(encoding, start2, end) {
      let loweredCase = false;
      if (start2 === void 0 || start2 < 0) {
        start2 = 0;
      }
      if (start2 > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start2 >>>= 0;
      if (end <= start2) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start2, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start2, end);
          case "ascii":
            return asciiSlice(this, start2, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start2, end);
          case "base64":
            return base64Slice(this, start2, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start2, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer3.prototype._isBuffer = true;
    function swap(b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }
    Buffer3.prototype.swap16 = function swap16() {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this;
    };
    Buffer3.prototype.swap32 = function swap32() {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this;
    };
    Buffer3.prototype.swap64 = function swap64() {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this;
    };
    Buffer3.prototype.toString = function toString2() {
      const length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer3.prototype.toLocaleString = Buffer3.prototype.toString;
    Buffer3.prototype.equals = function equals(b) {
      if (!Buffer3.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer3.compare(this, b) === 0;
    };
    Buffer3.prototype.inspect = function inspect() {
      let str = "";
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    if (customInspectSymbol) {
      Buffer3.prototype[customInspectSymbol] = Buffer3.prototype.inspect;
    }
    Buffer3.prototype.compare = function compare(target, start2, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer3.from(target, target.offset, target.byteLength);
      }
      if (!Buffer3.isBuffer(target)) {
        throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target);
      }
      if (start2 === void 0) {
        start2 = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start2 < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start2 >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start2 >= end) {
        return 1;
      }
      start2 >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      let x = thisEnd - thisStart;
      let y = end - start2;
      const len = Math.min(x, y);
      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start2, end);
      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
      if (buffer.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer3.from(val, encoding);
      }
      if (Buffer3.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i2) {
        if (indexSize === 1) {
          return buf[i2];
        } else {
          return buf.readUInt16BE(i2 * indexSize);
        }
      }
      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i;
            if (i - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i;
        }
      }
      return -1;
    }
    Buffer3.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer3.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer3.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      const strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i;
        buf[offset + i] = parsed;
      }
      return i;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer3.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
      }
      const remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      let loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
          case "latin1":
          case "binary":
            return asciiWrite(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer3.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start2, end) {
      if (start2 === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start2, end));
      }
    }
    function utf8Slice(buf, start2, end) {
      end = Math.min(buf.length, end);
      const res = [];
      let i = start2;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      let res = "";
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
      }
      return res;
    }
    function asciiSlice(buf, start2, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start2; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start2, end) {
      let ret = "";
      end = Math.min(buf.length, end);
      for (let i = start2; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret;
    }
    function hexSlice(buf, start2, end) {
      const len = buf.length;
      if (!start2 || start2 < 0)
        start2 = 0;
      if (!end || end < 0 || end > len)
        end = len;
      let out = "";
      for (let i = start2; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out;
    }
    function utf16leSlice(buf, start2, end) {
      const bytes = buf.slice(start2, end);
      let res = "";
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res;
    }
    Buffer3.prototype.slice = function slice(start2, end) {
      const len = this.length;
      start2 = ~~start2;
      end = end === void 0 ? len : ~~end;
      if (start2 < 0) {
        start2 += len;
        if (start2 < 0)
          start2 = 0;
      } else if (start2 > len) {
        start2 = len;
      }
      if (end < 0) {
        end += len;
        if (end < 0)
          end = 0;
      } else if (end > len) {
        end = len;
      }
      if (end < start2)
        end = start2;
      const newBuf = this.subarray(start2, end);
      Object.setPrototypeOf(newBuf, Buffer3.prototype);
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer3.prototype.readUintLE = Buffer3.prototype.readUIntLE = function readUIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUintBE = Buffer3.prototype.readUIntBE = function readUIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength2, this.length);
      }
      let val = this[offset + --byteLength2];
      let mul = 1;
      while (byteLength2 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength2] * mul;
      }
      return val;
    };
    Buffer3.prototype.readUint8 = Buffer3.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer3.prototype.readUint16LE = Buffer3.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer3.prototype.readUint16BE = Buffer3.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer3.prototype.readUint32LE = Buffer3.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer3.prototype.readUint32BE = Buffer3.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer3.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const lo = first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24;
      const hi = this[++offset] + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + last * 2 ** 24;
      return BigInt(lo) + (BigInt(hi) << BigInt(32));
    });
    Buffer3.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const hi = first * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      const lo = this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last;
      return (BigInt(hi) << BigInt(32)) + BigInt(lo);
    });
    Buffer3.prototype.readIntLE = function readIntLE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength2 && (mul *= 256)) {
        val += this[offset + i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readIntBE = function readIntBE(offset, byteLength2, noAssert) {
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength2, this.length);
      let i = byteLength2;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 256)) {
        val += this[offset + --i] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength2);
      return val;
    };
    Buffer3.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer3.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer3.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer3.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer3.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = this[offset + 4] + this[offset + 5] * 2 ** 8 + this[offset + 6] * 2 ** 16 + (last << 24);
      return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 2 ** 8 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 24);
    });
    Buffer3.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE(offset) {
      offset = offset >>> 0;
      validateNumber(offset, "offset");
      const first = this[offset];
      const last = this[offset + 7];
      if (first === void 0 || last === void 0) {
        boundsError(offset, this.length - 8);
      }
      const val = (first << 24) + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + this[++offset];
      return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * 2 ** 24 + this[++offset] * 2 ** 16 + this[++offset] * 2 ** 8 + last);
    });
    Buffer3.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4);
    };
    Buffer3.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4);
    };
    Buffer3.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8);
    };
    Buffer3.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer3.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer3.prototype.writeUintLE = Buffer3.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let mul = 1;
      let i = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUintBE = Buffer3.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength2 = byteLength2 >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength2) - 1;
        checkInt(this, value, offset, byteLength2, maxBytes, 0);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        this[offset + i] = value / mul & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeUint8 = Buffer3.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeUint16LE = Buffer3.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeUint16BE = Buffer3.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeUint32LE = Buffer3.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeUint32BE = Buffer3.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function wrtBigUInt64LE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset;
    }
    function wrtBigUInt64BE(buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);
      let lo = Number(value & BigInt(4294967295));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(4294967295));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8;
    }
    Buffer3.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt("0xffffffffffffffff"));
    });
    Buffer3.prototype.writeIntLE = function writeIntLE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 255;
      while (++i < byteLength2 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeIntBE = function writeIntBE(value, offset, byteLength2, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, 8 * byteLength2 - 1);
        checkInt(this, value, offset, byteLength2, limit - 1, -limit);
      }
      let i = byteLength2 - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 255;
      while (--i >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength2;
    };
    Buffer3.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer3.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer3.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer3.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer3.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer3.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE(value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    Buffer3.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE(value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
    });
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 34028234663852886e22, -34028234663852886e22);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer3.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 17976931348623157e292, -17976931348623157e292);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer3.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer3.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer3.prototype.copy = function copy(target, targetStart, start2, end) {
      if (!Buffer3.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start2)
        start2 = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start2)
        end = start2;
      if (end === start2)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start2 < 0 || start2 >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start2) {
        end = target.length - targetStart + start2;
      }
      const len = end - start2;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start2, end);
      } else {
        Uint8Array.prototype.set.call(target, this.subarray(start2, end), targetStart);
      }
      return len;
    };
    Buffer3.prototype.fill = function fill(val, start2, end, encoding) {
      if (typeof val === "string") {
        if (typeof start2 === "string") {
          encoding = start2;
          start2 = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer3.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if (encoding === "utf8" && code < 128 || encoding === "latin1") {
            val = code;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      } else if (typeof val === "boolean") {
        val = Number(val);
      }
      if (start2 < 0 || this.length < start2 || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start2) {
        return this;
      }
      start2 = start2 >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      let i;
      if (typeof val === "number") {
        for (i = start2; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer3.isBuffer(val) ? val : Buffer3.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i = 0; i < end - start2; ++i) {
          this[i + start2] = bytes[i % len];
        }
      }
      return this;
    };
    var errors = {};
    function E(sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor() {
          super();
          Object.defineProperty(this, "message", {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });
          this.name = `${this.name} [${sym}]`;
          this.stack;
          delete this.name;
        }
        get code() {
          return sym;
        }
        set code(value) {
          Object.defineProperty(this, "code", {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }
        toString() {
          return `${this.name} [${sym}]: ${this.message}`;
        }
      };
    }
    E("ERR_BUFFER_OUT_OF_BOUNDS", function(name) {
      if (name) {
        return `${name} is outside of buffer bounds`;
      }
      return "Attempt to access memory outside buffer bounds";
    }, RangeError);
    E("ERR_INVALID_ARG_TYPE", function(name, actual) {
      return `The "${name}" argument must be of type number. Received type ${typeof actual}`;
    }, TypeError);
    E("ERR_OUT_OF_RANGE", function(str, range2, input) {
      let msg = `The value of "${str}" is out of range.`;
      let received = input;
      if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
        received = addNumericalSeparator(String(input));
      } else if (typeof input === "bigint") {
        received = String(input);
        if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
          received = addNumericalSeparator(received);
        }
        received += "n";
      }
      msg += ` It must be ${range2}. Received ${received}`;
      return msg;
    }, RangeError);
    function addNumericalSeparator(val) {
      let res = "";
      let i = val.length;
      const start2 = val[0] === "-" ? 1 : 0;
      for (; i >= start2 + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`;
    }
    function checkBounds(buf, offset, byteLength2) {
      validateNumber(offset, "offset");
      if (buf[offset] === void 0 || buf[offset + byteLength2] === void 0) {
        boundsError(offset, buf.length - (byteLength2 + 1));
      }
    }
    function checkIntBI(value, min, max, buf, offset, byteLength2) {
      if (value > max || value < min) {
        const n = typeof min === "bigint" ? "n" : "";
        let range2;
        if (byteLength2 > 3) {
          if (min === 0 || min === BigInt(0)) {
            range2 = `>= 0${n} and < 2${n} ** ${(byteLength2 + 1) * 8}${n}`;
          } else {
            range2 = `>= -(2${n} ** ${(byteLength2 + 1) * 8 - 1}${n}) and < 2 ** ${(byteLength2 + 1) * 8 - 1}${n}`;
          }
        } else {
          range2 = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE("value", range2, value);
      }
      checkBounds(buf, offset, byteLength2);
    }
    function validateNumber(value, name) {
      if (typeof value !== "number") {
        throw new errors.ERR_INVALID_ARG_TYPE(name, "number", value);
      }
    }
    function boundsError(value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || "offset", "an integer", value);
      }
      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS();
      }
      throw new errors.ERR_OUT_OF_RANGE(type || "offset", `>= ${type ? 1 : 0} and <= ${length}`, value);
    }
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];
      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length)
          break;
        dst[i + offset] = src[i];
      }
      return i;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
    var hexSliceLookupTable = function() {
      const alphabet = "0123456789abcdef";
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table;
    }();
    function defineBigIntMethod(fn) {
      return typeof BigInt === "undefined" ? BufferBigIntNotDefined : fn;
    }
    function BufferBigIntNotDefined() {
      throw new Error("BigInt not supported");
    }
  }
});

// node_modules/nanoassert/index.js
var require_nanoassert = __commonJS({
  "node_modules/nanoassert/index.js"(exports, module2) {
    assert.notEqual = notEqual;
    assert.notOk = notOk;
    assert.equal = equal;
    assert.ok = assert;
    module2.exports = assert;
    function equal(a, b, m) {
      assert(a == b, m);
    }
    function notEqual(a, b, m) {
      assert(a != b, m);
    }
    function notOk(t2, m) {
      assert(!t2, m);
    }
    function assert(t2, m) {
      if (!t2)
        throw new Error(m || "AssertionError");
    }
  }
});

// node_modules/blake2b-wasm/blake2b.js
var require_blake2b = __commonJS({
  "node_modules/blake2b-wasm/blake2b.js"(exports, module2) {
    module2.exports = loadWebAssembly;
    loadWebAssembly.supported = typeof WebAssembly !== "undefined";
    function loadWebAssembly(opts) {
      if (!loadWebAssembly.supported)
        return null;
      var imp = opts && opts.imports;
      var wasm = toUint8Array("AGFzbQEAAAABEANgAn9/AGADf39/AGABfwADBQQAAQICBQUBAQroBwdNBQZtZW1vcnkCAAxibGFrZTJiX2luaXQAAA5ibGFrZTJiX3VwZGF0ZQABDWJsYWtlMmJfZmluYWwAAhBibGFrZTJiX2NvbXByZXNzAAMK00AElgMAIABCADcDACAAQQhqQgA3AwAgAEEQakIANwMAIABBGGpCADcDACAAQSBqQgA3AwAgAEEoakIANwMAIABBMGpCADcDACAAQThqQgA3AwAgAEHAAGpCADcDACAAQcgAakIANwMAIABB0ABqQgA3AwAgAEHYAGpCADcDACAAQeAAakIANwMAIABB6ABqQgA3AwAgAEHwAGpCADcDACAAQfgAakIANwMAIABBgAFqQoiS853/zPmE6gBBACkDAIU3AwAgAEGIAWpCu86qptjQ67O7f0EIKQMAhTcDACAAQZABakKr8NP0r+68tzxBECkDAIU3AwAgAEGYAWpC8e30+KWn/aelf0EYKQMAhTcDACAAQaABakLRhZrv+s+Uh9EAQSApAwCFNwMAIABBqAFqQp/Y+dnCkdqCm39BKCkDAIU3AwAgAEGwAWpC6/qG2r+19sEfQTApAwCFNwMAIABBuAFqQvnC+JuRo7Pw2wBBOCkDAIU3AwAgAEHAAWpCADcDACAAQcgBakIANwMAIABB0AFqQgA3AwALbQEDfyAAQcABaiEDIABByAFqIQQgBCkDAKchBQJAA0AgASACRg0BIAVBgAFGBEAgAyADKQMAIAWtfDcDAEEAIQUgABADCyAAIAVqIAEtAAA6AAAgBUEBaiEFIAFBAWohAQwACwsgBCAFrTcDAAtkAQN/IABBwAFqIQEgAEHIAWohAiABIAEpAwAgAikDAHw3AwAgAEHQAWpCfzcDACACKQMApyEDAkADQCADQYABRg0BIAAgA2pBADoAACADQQFqIQMMAAsLIAIgA603AwAgABADC+U7AiB+CX8gAEGAAWohISAAQYgBaiEiIABBkAFqISMgAEGYAWohJCAAQaABaiElIABBqAFqISYgAEGwAWohJyAAQbgBaiEoICEpAwAhASAiKQMAIQIgIykDACEDICQpAwAhBCAlKQMAIQUgJikDACEGICcpAwAhByAoKQMAIQhCiJLznf/M+YTqACEJQrvOqqbY0Ouzu38hCkKr8NP0r+68tzwhC0Lx7fT4paf9p6V/IQxC0YWa7/rPlIfRACENQp/Y+dnCkdqCm38hDkLr+obav7X2wR8hD0L5wvibkaOz8NsAIRAgACkDACERIABBCGopAwAhEiAAQRBqKQMAIRMgAEEYaikDACEUIABBIGopAwAhFSAAQShqKQMAIRYgAEEwaikDACEXIABBOGopAwAhGCAAQcAAaikDACEZIABByABqKQMAIRogAEHQAGopAwAhGyAAQdgAaikDACEcIABB4ABqKQMAIR0gAEHoAGopAwAhHiAAQfAAaikDACEfIABB+ABqKQMAISAgDSAAQcABaikDAIUhDSAPIABB0AFqKQMAhSEPIAEgBSARfHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgEnx8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBN8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAUfHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgFXx8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHIBZ8fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAXfHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggGHx8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIBl8fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiAafHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgG3x8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIBx8fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAdfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggHnx8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIB98fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAgfHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgH3x8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFIBt8fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAVfHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgGXx8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBp8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByAgfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggHnx8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIBd8fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiASfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgHXx8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIBF8fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByATfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggHHx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIBh8fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSAWfHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgFHx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgASAFIBx8fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSAZfHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgHXx8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGIBF8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAWfHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgE3x8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIICB8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAefHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgG3x8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIB98fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAUfHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgF3x8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIBh8fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCASfHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgGnx8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFIBV8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSAYfHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgGnx8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBR8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiASfHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgHnx8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHIB18fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAcfHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggH3x8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIBN8fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiAXfHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgFnx8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIBt8fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAVfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggEXx8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFICB8fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAZfHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgGnx8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFIBF8fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAWfHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgGHx8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBN8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByAVfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggG3x8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIICB8fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiAffHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgEnx8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIBx8fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByAdfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggF3x8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIBl8fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSAUfHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgHnx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgASAFIBN8fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSAdfHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgF3x8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGIBt8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByARfHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgHHx8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIBl8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAUfHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgFXx8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIB58fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAYfHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgFnx8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIICB8fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCAffHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgEnx8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFIBp8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSAdfHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgFnx8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBJ8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAgfHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgH3x8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHIB58fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCAVfHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggG3x8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGIBF8fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiAYfHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgF3x8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIBR8fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAafHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggE3x8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIBl8fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSAcfHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgHnx8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFIBx8fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiAYfHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgH3x8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIB18fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByASfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggFHx8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIBp8fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiAWfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgEXx8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHICB8fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByAVfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggGXx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIBd8fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSATfHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgG3x8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgASAFIBd8fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSAgfHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgH3x8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGIBp8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAcfHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgFHx8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIBF8fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAZfHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgHXx8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIBN8fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByAefHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgGHx8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIBJ8fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCAVfHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgG3x8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFIBZ8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFIAEgBSAbfHwhASANIAGFQiCKIQ0gCSANfCEJIAUgCYVCGIohBSABIAUgE3x8IQEgDSABhUIQiiENIAkgDXwhCSAFIAmFQj+KIQUgAiAGIBl8fCECIA4gAoVCIIohDiAKIA58IQogBiAKhUIYiiEGIAIgBiAVfHwhAiAOIAKFQhCKIQ4gCiAOfCEKIAYgCoVCP4ohBiADIAcgGHx8IQMgDyADhUIgiiEPIAsgD3whCyAHIAuFQhiKIQcgAyAHIBd8fCEDIA8gA4VCEIohDyALIA98IQsgByALhUI/iiEHIAQgCCASfHwhBCAQIASFQiCKIRAgDCAQfCEMIAggDIVCGIohCCAEIAggFnx8IQQgECAEhUIQiiEQIAwgEHwhDCAIIAyFQj+KIQggASAGICB8fCEBIBAgAYVCIIohECALIBB8IQsgBiALhUIYiiEGIAEgBiAcfHwhASAQIAGFQhCKIRAgCyAQfCELIAYgC4VCP4ohBiACIAcgGnx8IQIgDSAChUIgiiENIAwgDXwhDCAHIAyFQhiKIQcgAiAHIB98fCECIA0gAoVCEIohDSAMIA18IQwgByAMhUI/iiEHIAMgCCAUfHwhAyAOIAOFQiCKIQ4gCSAOfCEJIAggCYVCGIohCCADIAggHXx8IQMgDiADhUIQiiEOIAkgDnwhCSAIIAmFQj+KIQggBCAFIB58fCEEIA8gBIVCIIohDyAKIA98IQogBSAKhUIYiiEFIAQgBSARfHwhBCAPIASFQhCKIQ8gCiAPfCEKIAUgCoVCP4ohBSABIAUgEXx8IQEgDSABhUIgiiENIAkgDXwhCSAFIAmFQhiKIQUgASAFIBJ8fCEBIA0gAYVCEIohDSAJIA18IQkgBSAJhUI/iiEFIAIgBiATfHwhAiAOIAKFQiCKIQ4gCiAOfCEKIAYgCoVCGIohBiACIAYgFHx8IQIgDiAChUIQiiEOIAogDnwhCiAGIAqFQj+KIQYgAyAHIBV8fCEDIA8gA4VCIIohDyALIA98IQsgByALhUIYiiEHIAMgByAWfHwhAyAPIAOFQhCKIQ8gCyAPfCELIAcgC4VCP4ohByAEIAggF3x8IQQgECAEhUIgiiEQIAwgEHwhDCAIIAyFQhiKIQggBCAIIBh8fCEEIBAgBIVCEIohECAMIBB8IQwgCCAMhUI/iiEIIAEgBiAZfHwhASAQIAGFQiCKIRAgCyAQfCELIAYgC4VCGIohBiABIAYgGnx8IQEgECABhUIQiiEQIAsgEHwhCyAGIAuFQj+KIQYgAiAHIBt8fCECIA0gAoVCIIohDSAMIA18IQwgByAMhUIYiiEHIAIgByAcfHwhAiANIAKFQhCKIQ0gDCANfCEMIAcgDIVCP4ohByADIAggHXx8IQMgDiADhUIgiiEOIAkgDnwhCSAIIAmFQhiKIQggAyAIIB58fCEDIA4gA4VCEIohDiAJIA58IQkgCCAJhUI/iiEIIAQgBSAffHwhBCAPIASFQiCKIQ8gCiAPfCEKIAUgCoVCGIohBSAEIAUgIHx8IQQgDyAEhUIQiiEPIAogD3whCiAFIAqFQj+KIQUgASAFIB98fCEBIA0gAYVCIIohDSAJIA18IQkgBSAJhUIYiiEFIAEgBSAbfHwhASANIAGFQhCKIQ0gCSANfCEJIAUgCYVCP4ohBSACIAYgFXx8IQIgDiAChUIgiiEOIAogDnwhCiAGIAqFQhiKIQYgAiAGIBl8fCECIA4gAoVCEIohDiAKIA58IQogBiAKhUI/iiEGIAMgByAafHwhAyAPIAOFQiCKIQ8gCyAPfCELIAcgC4VCGIohByADIAcgIHx8IQMgDyADhUIQiiEPIAsgD3whCyAHIAuFQj+KIQcgBCAIIB58fCEEIBAgBIVCIIohECAMIBB8IQwgCCAMhUIYiiEIIAQgCCAXfHwhBCAQIASFQhCKIRAgDCAQfCEMIAggDIVCP4ohCCABIAYgEnx8IQEgECABhUIgiiEQIAsgEHwhCyAGIAuFQhiKIQYgASAGIB18fCEBIBAgAYVCEIohECALIBB8IQsgBiALhUI/iiEGIAIgByARfHwhAiANIAKFQiCKIQ0gDCANfCEMIAcgDIVCGIohByACIAcgE3x8IQIgDSAChUIQiiENIAwgDXwhDCAHIAyFQj+KIQcgAyAIIBx8fCEDIA4gA4VCIIohDiAJIA58IQkgCCAJhUIYiiEIIAMgCCAYfHwhAyAOIAOFQhCKIQ4gCSAOfCEJIAggCYVCP4ohCCAEIAUgFnx8IQQgDyAEhUIgiiEPIAogD3whCiAFIAqFQhiKIQUgBCAFIBR8fCEEIA8gBIVCEIohDyAKIA98IQogBSAKhUI/iiEFICEgISkDACABIAmFhTcDACAiICIpAwAgAiAKhYU3AwAgIyAjKQMAIAMgC4WFNwMAICQgJCkDACAEIAyFhTcDACAlICUpAwAgBSANhYU3AwAgJiAmKQMAIAYgDoWFNwMAICcgJykDACAHIA+FhTcDACAoICgpAwAgCCAQhYU3AwAL");
      var ready = null;
      var mod = {
        buffer: wasm,
        memory: null,
        exports: null,
        realloc,
        onload
      };
      onload(function() {
      });
      return mod;
      function realloc(size) {
        mod.exports.memory.grow(Math.ceil(Math.abs(size - mod.memory.length) / 65536));
        mod.memory = new Uint8Array(mod.exports.memory.buffer);
      }
      function onload(cb) {
        if (mod.exports)
          return cb();
        if (ready) {
          ready.then(cb.bind(null, null)).catch(cb);
          return;
        }
        try {
          if (opts && opts.async)
            throw new Error("async");
          setup({ instance: new WebAssembly.Instance(new WebAssembly.Module(wasm), imp) });
        } catch (err) {
          ready = WebAssembly.instantiate(wasm, imp).then(setup);
        }
        onload(cb);
      }
      function setup(w) {
        mod.exports = w.instance.exports;
        mod.memory = mod.exports.memory && mod.exports.memory.buffer && new Uint8Array(mod.exports.memory.buffer);
      }
    }
    function toUint8Array(s) {
      if (typeof atob === "function")
        return new Uint8Array(atob(s).split("").map(charCodeAt));
      return new (require_buffer()).Buffer(s, "base64");
    }
    function charCodeAt(c) {
      return c.charCodeAt(0);
    }
  }
});

// node_modules/blake2b-wasm/index.js
var require_blake2b_wasm = __commonJS({
  "node_modules/blake2b-wasm/index.js"(exports, module2) {
    var assert = require_nanoassert();
    var wasm = require_blake2b()();
    var head = 64;
    var freeList = [];
    module2.exports = Blake2b;
    var BYTES_MIN = module2.exports.BYTES_MIN = 16;
    var BYTES_MAX = module2.exports.BYTES_MAX = 64;
    var BYTES = module2.exports.BYTES = 32;
    var KEYBYTES_MIN = module2.exports.KEYBYTES_MIN = 16;
    var KEYBYTES_MAX = module2.exports.KEYBYTES_MAX = 64;
    var KEYBYTES = module2.exports.KEYBYTES = 32;
    var SALTBYTES = module2.exports.SALTBYTES = 16;
    var PERSONALBYTES = module2.exports.PERSONALBYTES = 16;
    function Blake2b(digestLength, key, salt, personal, noAssert) {
      if (!(this instanceof Blake2b))
        return new Blake2b(digestLength, key, salt, personal, noAssert);
      if (!(wasm && wasm.exports))
        throw new Error("WASM not loaded. Wait for Blake2b.ready(cb)");
      if (!digestLength)
        digestLength = 32;
      if (noAssert !== true) {
        assert(digestLength >= BYTES_MIN, "digestLength must be at least " + BYTES_MIN + ", was given " + digestLength);
        assert(digestLength <= BYTES_MAX, "digestLength must be at most " + BYTES_MAX + ", was given " + digestLength);
        if (key != null)
          assert(key.length >= KEYBYTES_MIN, "key must be at least " + KEYBYTES_MIN + ", was given " + key.length);
        if (key != null)
          assert(key.length <= KEYBYTES_MAX, "key must be at least " + KEYBYTES_MAX + ", was given " + key.length);
        if (salt != null)
          assert(salt.length === SALTBYTES, "salt must be exactly " + SALTBYTES + ", was given " + salt.length);
        if (personal != null)
          assert(personal.length === PERSONALBYTES, "personal must be exactly " + PERSONALBYTES + ", was given " + personal.length);
      }
      if (!freeList.length) {
        freeList.push(head);
        head += 216;
      }
      this.digestLength = digestLength;
      this.finalized = false;
      this.pointer = freeList.pop();
      wasm.memory.fill(0, 0, 64);
      wasm.memory[0] = this.digestLength;
      wasm.memory[1] = key ? key.length : 0;
      wasm.memory[2] = 1;
      wasm.memory[3] = 1;
      if (salt)
        wasm.memory.set(salt, 32);
      if (personal)
        wasm.memory.set(personal, 48);
      if (this.pointer + 216 > wasm.memory.length)
        wasm.realloc(this.pointer + 216);
      wasm.exports.blake2b_init(this.pointer, this.digestLength);
      if (key) {
        this.update(key);
        wasm.memory.fill(0, head, head + key.length);
        wasm.memory[this.pointer + 200] = 128;
      }
    }
    Blake2b.prototype.update = function(input) {
      assert(this.finalized === false, "Hash instance finalized");
      assert(input, "input must be TypedArray or Buffer");
      if (head + input.length > wasm.memory.length)
        wasm.realloc(head + input.length);
      wasm.memory.set(input, head);
      wasm.exports.blake2b_update(this.pointer, head, head + input.length);
      return this;
    };
    Blake2b.prototype.digest = function(enc) {
      assert(this.finalized === false, "Hash instance finalized");
      this.finalized = true;
      freeList.push(this.pointer);
      wasm.exports.blake2b_final(this.pointer);
      if (!enc || enc === "binary") {
        return wasm.memory.slice(this.pointer + 128, this.pointer + 128 + this.digestLength);
      }
      if (enc === "hex") {
        return hexSlice(wasm.memory, this.pointer + 128, this.digestLength);
      }
      assert(enc.length >= this.digestLength, "input must be TypedArray or Buffer");
      for (var i = 0; i < this.digestLength; i++) {
        enc[i] = wasm.memory[this.pointer + 128 + i];
      }
      return enc;
    };
    Blake2b.prototype.final = Blake2b.prototype.digest;
    Blake2b.WASM = wasm && wasm.buffer;
    Blake2b.SUPPORTED = typeof WebAssembly !== "undefined";
    Blake2b.ready = function(cb) {
      if (!cb)
        cb = noop2;
      if (!wasm)
        return cb(new Error("WebAssembly not supported"));
      var p = new Promise(function(reject, resolve) {
        wasm.onload(function(err) {
          if (err)
            resolve();
          else
            reject();
          cb(err);
        });
      });
      return p;
    };
    Blake2b.prototype.ready = Blake2b.ready;
    function noop2() {
    }
    function hexSlice(buf, start2, len) {
      var str = "";
      for (var i = 0; i < len; i++)
        str += toHex(buf[start2 + i]);
      return str;
    }
    function toHex(n) {
      if (n < 16)
        return "0" + n.toString(16);
      return n.toString(16);
    }
  }
});

// node_modules/blake2b/index.js
var require_blake2b2 = __commonJS({
  "node_modules/blake2b/index.js"(exports, module2) {
    var assert = require_nanoassert();
    var b2wasm = require_blake2b_wasm();
    function ADD64AA(v2, a, b) {
      var o0 = v2[a] + v2[b];
      var o1 = v2[a + 1] + v2[b + 1];
      if (o0 >= 4294967296) {
        o1++;
      }
      v2[a] = o0;
      v2[a + 1] = o1;
    }
    function ADD64AC(v2, a, b0, b1) {
      var o0 = v2[a] + b0;
      if (b0 < 0) {
        o0 += 4294967296;
      }
      var o1 = v2[a + 1] + b1;
      if (o0 >= 4294967296) {
        o1++;
      }
      v2[a] = o0;
      v2[a + 1] = o1;
    }
    function B2B_GET32(arr, i) {
      return arr[i] ^ arr[i + 1] << 8 ^ arr[i + 2] << 16 ^ arr[i + 3] << 24;
    }
    function B2B_G(a, b, c, d, ix, iy) {
      var x0 = m[ix];
      var x1 = m[ix + 1];
      var y0 = m[iy];
      var y1 = m[iy + 1];
      ADD64AA(v, a, b);
      ADD64AC(v, a, x0, x1);
      var xor0 = v[d] ^ v[a];
      var xor1 = v[d + 1] ^ v[a + 1];
      v[d] = xor1;
      v[d + 1] = xor0;
      ADD64AA(v, c, d);
      xor0 = v[b] ^ v[c];
      xor1 = v[b + 1] ^ v[c + 1];
      v[b] = xor0 >>> 24 ^ xor1 << 8;
      v[b + 1] = xor1 >>> 24 ^ xor0 << 8;
      ADD64AA(v, a, b);
      ADD64AC(v, a, y0, y1);
      xor0 = v[d] ^ v[a];
      xor1 = v[d + 1] ^ v[a + 1];
      v[d] = xor0 >>> 16 ^ xor1 << 16;
      v[d + 1] = xor1 >>> 16 ^ xor0 << 16;
      ADD64AA(v, c, d);
      xor0 = v[b] ^ v[c];
      xor1 = v[b + 1] ^ v[c + 1];
      v[b] = xor1 >>> 31 ^ xor0 << 1;
      v[b + 1] = xor0 >>> 31 ^ xor1 << 1;
    }
    var BLAKE2B_IV32 = new Uint32Array([
      4089235720,
      1779033703,
      2227873595,
      3144134277,
      4271175723,
      1013904242,
      1595750129,
      2773480762,
      2917565137,
      1359893119,
      725511199,
      2600822924,
      4215389547,
      528734635,
      327033209,
      1541459225
    ]);
    var SIGMA8 = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3,
      11,
      8,
      12,
      0,
      5,
      2,
      15,
      13,
      10,
      14,
      3,
      6,
      7,
      1,
      9,
      4,
      7,
      9,
      3,
      1,
      13,
      12,
      11,
      14,
      2,
      6,
      5,
      10,
      4,
      0,
      15,
      8,
      9,
      0,
      5,
      7,
      2,
      4,
      10,
      15,
      14,
      1,
      11,
      12,
      6,
      8,
      3,
      13,
      2,
      12,
      6,
      10,
      0,
      11,
      8,
      3,
      4,
      13,
      7,
      5,
      15,
      14,
      1,
      9,
      12,
      5,
      1,
      15,
      14,
      13,
      4,
      10,
      0,
      7,
      6,
      3,
      9,
      2,
      8,
      11,
      13,
      11,
      7,
      14,
      12,
      1,
      3,
      9,
      5,
      0,
      15,
      4,
      8,
      6,
      2,
      10,
      6,
      15,
      14,
      9,
      11,
      3,
      0,
      8,
      12,
      2,
      13,
      7,
      1,
      4,
      10,
      5,
      10,
      2,
      8,
      4,
      7,
      6,
      1,
      5,
      15,
      11,
      9,
      14,
      3,
      12,
      13,
      0,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3
    ];
    var SIGMA82 = new Uint8Array(SIGMA8.map(function(x) {
      return x * 2;
    }));
    var v = new Uint32Array(32);
    var m = new Uint32Array(32);
    function blake2bCompress(ctx, last) {
      var i = 0;
      for (i = 0; i < 16; i++) {
        v[i] = ctx.h[i];
        v[i + 16] = BLAKE2B_IV32[i];
      }
      v[24] = v[24] ^ ctx.t;
      v[25] = v[25] ^ ctx.t / 4294967296;
      if (last) {
        v[28] = ~v[28];
        v[29] = ~v[29];
      }
      for (i = 0; i < 32; i++) {
        m[i] = B2B_GET32(ctx.b, 4 * i);
      }
      for (i = 0; i < 12; i++) {
        B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1]);
        B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3]);
        B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5]);
        B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7]);
        B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9]);
        B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11]);
        B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13]);
        B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15]);
      }
      for (i = 0; i < 16; i++) {
        ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16];
      }
    }
    var parameter_block = new Uint8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ]);
    function Blake2b(outlen, key, salt, personal) {
      parameter_block.fill(0);
      this.b = new Uint8Array(128);
      this.h = new Uint32Array(16);
      this.t = 0;
      this.c = 0;
      this.outlen = outlen;
      parameter_block[0] = outlen;
      if (key)
        parameter_block[1] = key.length;
      parameter_block[2] = 1;
      parameter_block[3] = 1;
      if (salt)
        parameter_block.set(salt, 32);
      if (personal)
        parameter_block.set(personal, 48);
      for (var i = 0; i < 16; i++) {
        this.h[i] = BLAKE2B_IV32[i] ^ B2B_GET32(parameter_block, i * 4);
      }
      if (key) {
        blake2bUpdate(this, key);
        this.c = 128;
      }
    }
    Blake2b.prototype.update = function(input) {
      assert(input != null, "input must be Uint8Array or Buffer");
      blake2bUpdate(this, input);
      return this;
    };
    Blake2b.prototype.digest = function(out) {
      var buf = !out || out === "binary" || out === "hex" ? new Uint8Array(this.outlen) : out;
      assert(buf.length >= this.outlen, "out must have at least outlen bytes of space");
      blake2bFinal(this, buf);
      if (out === "hex")
        return hexSlice(buf);
      return buf;
    };
    Blake2b.prototype.final = Blake2b.prototype.digest;
    Blake2b.ready = function(cb) {
      b2wasm.ready(function() {
        cb();
      });
    };
    function blake2bUpdate(ctx, input) {
      for (var i = 0; i < input.length; i++) {
        if (ctx.c === 128) {
          ctx.t += ctx.c;
          blake2bCompress(ctx, false);
          ctx.c = 0;
        }
        ctx.b[ctx.c++] = input[i];
      }
    }
    function blake2bFinal(ctx, out) {
      ctx.t += ctx.c;
      while (ctx.c < 128) {
        ctx.b[ctx.c++] = 0;
      }
      blake2bCompress(ctx, true);
      for (var i = 0; i < ctx.outlen; i++) {
        out[i] = ctx.h[i >> 2] >> 8 * (i & 3);
      }
      return out;
    }
    function hexSlice(buf) {
      var str = "";
      for (var i = 0; i < buf.length; i++)
        str += toHex(buf[i]);
      return str;
    }
    function toHex(n) {
      if (n < 16)
        return "0" + n.toString(16);
      return n.toString(16);
    }
    var Proto = Blake2b;
    module2.exports = function createHash(outlen, key, salt, personal, noAssert) {
      if (noAssert !== true) {
        assert(outlen >= BYTES_MIN, "outlen must be at least " + BYTES_MIN + ", was given " + outlen);
        assert(outlen <= BYTES_MAX, "outlen must be at most " + BYTES_MAX + ", was given " + outlen);
        if (key != null)
          assert(key.length >= KEYBYTES_MIN, "key must be at least " + KEYBYTES_MIN + ", was given " + key.length);
        if (key != null)
          assert(key.length <= KEYBYTES_MAX, "key must be at most " + KEYBYTES_MAX + ", was given " + key.length);
        if (salt != null)
          assert(salt.length === SALTBYTES, "salt must be exactly " + SALTBYTES + ", was given " + salt.length);
        if (personal != null)
          assert(personal.length === PERSONALBYTES, "personal must be exactly " + PERSONALBYTES + ", was given " + personal.length);
      }
      return new Proto(outlen, key, salt, personal);
    };
    module2.exports.ready = function(cb) {
      b2wasm.ready(function() {
        cb();
      });
    };
    module2.exports.WASM_SUPPORTED = b2wasm.SUPPORTED;
    module2.exports.WASM_LOADED = false;
    var BYTES_MIN = module2.exports.BYTES_MIN = 16;
    var BYTES_MAX = module2.exports.BYTES_MAX = 64;
    var BYTES = module2.exports.BYTES = 32;
    var KEYBYTES_MIN = module2.exports.KEYBYTES_MIN = 16;
    var KEYBYTES_MAX = module2.exports.KEYBYTES_MAX = 64;
    var KEYBYTES = module2.exports.KEYBYTES = 32;
    var SALTBYTES = module2.exports.SALTBYTES = 16;
    var PERSONALBYTES = module2.exports.PERSONALBYTES = 16;
    b2wasm.ready(function(err) {
      if (!err) {
        module2.exports.WASM_LOADED = true;
        Proto = b2wasm;
      }
    });
  }
});

// node_modules/bech32/dist/index.js
var require_dist = __commonJS({
  "node_modules/bech32/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bech32m = exports.bech32 = void 0;
    var ALPHABET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
    var ALPHABET_MAP = {};
    for (let z = 0; z < ALPHABET.length; z++) {
      const x = ALPHABET.charAt(z);
      ALPHABET_MAP[x] = z;
    }
    function polymodStep(pre) {
      const b = pre >> 25;
      return (pre & 33554431) << 5 ^ -(b >> 0 & 1) & 996825010 ^ -(b >> 1 & 1) & 642813549 ^ -(b >> 2 & 1) & 513874426 ^ -(b >> 3 & 1) & 1027748829 ^ -(b >> 4 & 1) & 705979059;
    }
    function prefixChk(prefix2) {
      let chk = 1;
      for (let i = 0; i < prefix2.length; ++i) {
        const c = prefix2.charCodeAt(i);
        if (c < 33 || c > 126)
          return "Invalid prefix (" + prefix2 + ")";
        chk = polymodStep(chk) ^ c >> 5;
      }
      chk = polymodStep(chk);
      for (let i = 0; i < prefix2.length; ++i) {
        const v = prefix2.charCodeAt(i);
        chk = polymodStep(chk) ^ v & 31;
      }
      return chk;
    }
    function convert(data2, inBits, outBits, pad) {
      let value = 0;
      let bits = 0;
      const maxV = (1 << outBits) - 1;
      const result = [];
      for (let i = 0; i < data2.length; ++i) {
        value = value << inBits | data2[i];
        bits += inBits;
        while (bits >= outBits) {
          bits -= outBits;
          result.push(value >> bits & maxV);
        }
      }
      if (pad) {
        if (bits > 0) {
          result.push(value << outBits - bits & maxV);
        }
      } else {
        if (bits >= inBits)
          return "Excess padding";
        if (value << outBits - bits & maxV)
          return "Non-zero padding";
      }
      return result;
    }
    function toWords(bytes) {
      return convert(bytes, 8, 5, true);
    }
    function fromWordsUnsafe(words) {
      const res = convert(words, 5, 8, false);
      if (Array.isArray(res))
        return res;
    }
    function fromWords(words) {
      const res = convert(words, 5, 8, false);
      if (Array.isArray(res))
        return res;
      throw new Error(res);
    }
    function getLibraryFromEncoding(encoding) {
      let ENCODING_CONST;
      if (encoding === "bech32") {
        ENCODING_CONST = 1;
      } else {
        ENCODING_CONST = 734539939;
      }
      function encode(prefix2, words, LIMIT) {
        LIMIT = LIMIT || 90;
        if (prefix2.length + 7 + words.length > LIMIT)
          throw new TypeError("Exceeds length limit");
        prefix2 = prefix2.toLowerCase();
        let chk = prefixChk(prefix2);
        if (typeof chk === "string")
          throw new Error(chk);
        let result = prefix2 + "1";
        for (let i = 0; i < words.length; ++i) {
          const x = words[i];
          if (x >> 5 !== 0)
            throw new Error("Non 5-bit word");
          chk = polymodStep(chk) ^ x;
          result += ALPHABET.charAt(x);
        }
        for (let i = 0; i < 6; ++i) {
          chk = polymodStep(chk);
        }
        chk ^= ENCODING_CONST;
        for (let i = 0; i < 6; ++i) {
          const v = chk >> (5 - i) * 5 & 31;
          result += ALPHABET.charAt(v);
        }
        return result;
      }
      function __decode(str, LIMIT) {
        LIMIT = LIMIT || 90;
        if (str.length < 8)
          return str + " too short";
        if (str.length > LIMIT)
          return "Exceeds length limit";
        const lowered = str.toLowerCase();
        const uppered = str.toUpperCase();
        if (str !== lowered && str !== uppered)
          return "Mixed-case string " + str;
        str = lowered;
        const split = str.lastIndexOf("1");
        if (split === -1)
          return "No separator character for " + str;
        if (split === 0)
          return "Missing prefix for " + str;
        const prefix2 = str.slice(0, split);
        const wordChars = str.slice(split + 1);
        if (wordChars.length < 6)
          return "Data too short";
        let chk = prefixChk(prefix2);
        if (typeof chk === "string")
          return chk;
        const words = [];
        for (let i = 0; i < wordChars.length; ++i) {
          const c = wordChars.charAt(i);
          const v = ALPHABET_MAP[c];
          if (v === void 0)
            return "Unknown character " + c;
          chk = polymodStep(chk) ^ v;
          if (i + 6 >= wordChars.length)
            continue;
          words.push(v);
        }
        if (chk !== ENCODING_CONST)
          return "Invalid checksum for " + str;
        return { prefix: prefix2, words };
      }
      function decodeUnsafe(str, LIMIT) {
        const res = __decode(str, LIMIT);
        if (typeof res === "object")
          return res;
      }
      function decode(str, LIMIT) {
        const res = __decode(str, LIMIT);
        if (typeof res === "object")
          return res;
        throw new Error(res);
      }
      return {
        decodeUnsafe,
        decode,
        encode,
        toWords,
        fromWordsUnsafe,
        fromWords
      };
    }
    exports.bech32 = getLibraryFromEncoding("bech32");
    exports.bech32m = getLibraryFromEncoding("bech32m");
  }
});

// node_modules/@emurgo/cip14-js/index.js
var require_cip14_js = __commonJS({
  "node_modules/@emurgo/cip14-js/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var blake2b_1 = __importDefault(require_blake2b2());
    var bech32_1 = require_dist();
    var DATA = "asset";
    var AssetFingerprint2 = class {
      constructor(hashBuf) {
        this.hashBuf = hashBuf;
      }
      static fromHash(hash) {
        return new AssetFingerprint2(hash);
      }
      static fromParts(policyId, assetName) {
        const hashBuf = (0, blake2b_1.default)(20).update(new Uint8Array([...policyId, ...assetName])).digest("binary");
        return AssetFingerprint2.fromHash(hashBuf);
      }
      static fromBech32(fingerprint) {
        const { prefix: prefix2, words } = bech32_1.bech32.decode(fingerprint);
        if (prefix2 !== DATA) {
          throw new Error("Invalid asset fingerprint");
        }
        const hashBuf = Buffer.from(bech32_1.bech32.fromWords(words));
        return AssetFingerprint2.fromHash(hashBuf);
      }
      fingerprint() {
        const words = bech32_1.bech32.toWords(this.hashBuf);
        return bech32_1.bech32.encode(DATA, words);
      }
      hash() {
        return Buffer.from(this.hashBuf).toString("hex");
      }
      prefix() {
        return DATA;
      }
      checksum() {
        return this.fingerprint().slice(-6);
      }
    };
    exports.default = AssetFingerprint2;
  }
});

// ../deps/phoenix_html/priv/static/phoenix_html.js
(function() {
  var PolyfillEvent = eventConstructor();
  function eventConstructor() {
    if (typeof window.CustomEvent === "function")
      return window.CustomEvent;
    function CustomEvent2(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: void 0 };
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    CustomEvent2.prototype = window.Event.prototype;
    return CustomEvent2;
  }
  function buildHiddenInput(name, value) {
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
  }
  function handleClick(element, targetModifierKey) {
    var to = element.getAttribute("data-to"), method = buildHiddenInput("_method", element.getAttribute("data-method")), csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")), form = document.createElement("form"), target = element.getAttribute("target");
    form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
    form.action = to;
    form.style.display = "hidden";
    if (target)
      form.target = target;
    else if (targetModifierKey)
      form.target = "_blank";
    form.appendChild(csrf);
    form.appendChild(method);
    document.body.appendChild(form);
    form.submit();
  }
  window.addEventListener("click", function(e) {
    var element = e.target;
    if (e.defaultPrevented)
      return;
    while (element && element.getAttribute) {
      var phoenixLinkEvent = new PolyfillEvent("phoenix.link.click", {
        "bubbles": true,
        "cancelable": true
      });
      if (!element.dispatchEvent(phoenixLinkEvent)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      }
      if (element.getAttribute("data-method")) {
        handleClick(element, e.metaKey || e.shiftKey);
        e.preventDefault();
        return false;
      } else {
        element = element.parentNode;
      }
    }
  }, false);
  window.addEventListener("phoenix.link.click", function(e) {
    var message = e.target.getAttribute("data-confirm");
    if (message && !window.confirm(message)) {
      e.preventDefault();
    }
  }, false);
})();

// ../deps/phoenix/priv/static/phoenix.esm.js
var closure = (value) => {
  if (typeof value === "function") {
    return value;
  } else {
    let closure22 = function() {
      return value;
    };
    return closure22;
  }
};
var globalSelf = typeof self !== "undefined" ? self : null;
var phxWindow = typeof window !== "undefined" ? window : null;
var global2 = globalSelf || phxWindow || void 0;
var DEFAULT_VSN = "2.0.0";
var SOCKET_STATES = { connecting: 0, open: 1, closing: 2, closed: 3 };
var DEFAULT_TIMEOUT = 1e4;
var WS_CLOSE_NORMAL = 1e3;
var CHANNEL_STATES = {
  closed: "closed",
  errored: "errored",
  joined: "joined",
  joining: "joining",
  leaving: "leaving"
};
var CHANNEL_EVENTS = {
  close: "phx_close",
  error: "phx_error",
  join: "phx_join",
  reply: "phx_reply",
  leave: "phx_leave"
};
var TRANSPORTS = {
  longpoll: "longpoll",
  websocket: "websocket"
};
var XHR_STATES = {
  complete: 4
};
var Push = class {
  constructor(channel, event, payload, timeout) {
    this.channel = channel;
    this.event = event;
    this.payload = payload || function() {
      return {};
    };
    this.receivedResp = null;
    this.timeout = timeout;
    this.timeoutTimer = null;
    this.recHooks = [];
    this.sent = false;
  }
  resend(timeout) {
    this.timeout = timeout;
    this.reset();
    this.send();
  }
  send() {
    if (this.hasReceived("timeout")) {
      return;
    }
    this.startTimeout();
    this.sent = true;
    this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload(),
      ref: this.ref,
      join_ref: this.channel.joinRef()
    });
  }
  receive(status, callback) {
    if (this.hasReceived(status)) {
      callback(this.receivedResp.response);
    }
    this.recHooks.push({ status, callback });
    return this;
  }
  reset() {
    this.cancelRefEvent();
    this.ref = null;
    this.refEvent = null;
    this.receivedResp = null;
    this.sent = false;
  }
  matchReceive({ status, response, _ref }) {
    this.recHooks.filter((h) => h.status === status).forEach((h) => h.callback(response));
  }
  cancelRefEvent() {
    if (!this.refEvent) {
      return;
    }
    this.channel.off(this.refEvent);
  }
  cancelTimeout() {
    clearTimeout(this.timeoutTimer);
    this.timeoutTimer = null;
  }
  startTimeout() {
    if (this.timeoutTimer) {
      this.cancelTimeout();
    }
    this.ref = this.channel.socket.makeRef();
    this.refEvent = this.channel.replyEventName(this.ref);
    this.channel.on(this.refEvent, (payload) => {
      this.cancelRefEvent();
      this.cancelTimeout();
      this.receivedResp = payload;
      this.matchReceive(payload);
    });
    this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  hasReceived(status) {
    return this.receivedResp && this.receivedResp.status === status;
  }
  trigger(status, response) {
    this.channel.trigger(this.refEvent, { status, response });
  }
};
var Timer = class {
  constructor(callback, timerCalc) {
    this.callback = callback;
    this.timerCalc = timerCalc;
    this.timer = null;
    this.tries = 0;
  }
  reset() {
    this.tries = 0;
    clearTimeout(this.timer);
  }
  scheduleTimeout() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.tries = this.tries + 1;
      this.callback();
    }, this.timerCalc(this.tries + 1));
  }
};
var Channel = class {
  constructor(topic, params, socket) {
    this.state = CHANNEL_STATES.closed;
    this.topic = topic;
    this.params = closure(params || {});
    this.socket = socket;
    this.bindings = [];
    this.bindingRef = 0;
    this.timeout = this.socket.timeout;
    this.joinedOnce = false;
    this.joinPush = new Push(this, CHANNEL_EVENTS.join, this.params, this.timeout);
    this.pushBuffer = [];
    this.stateChangeRefs = [];
    this.rejoinTimer = new Timer(() => {
      if (this.socket.isConnected()) {
        this.rejoin();
      }
    }, this.socket.rejoinAfterMs);
    this.stateChangeRefs.push(this.socket.onError(() => this.rejoinTimer.reset()));
    this.stateChangeRefs.push(this.socket.onOpen(() => {
      this.rejoinTimer.reset();
      if (this.isErrored()) {
        this.rejoin();
      }
    }));
    this.joinPush.receive("ok", () => {
      this.state = CHANNEL_STATES.joined;
      this.rejoinTimer.reset();
      this.pushBuffer.forEach((pushEvent) => pushEvent.send());
      this.pushBuffer = [];
    });
    this.joinPush.receive("error", () => {
      this.state = CHANNEL_STATES.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.onClose(() => {
      this.rejoinTimer.reset();
      if (this.socket.hasLogger())
        this.socket.log("channel", `close ${this.topic} ${this.joinRef()}`);
      this.state = CHANNEL_STATES.closed;
      this.socket.remove(this);
    });
    this.onError((reason) => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `error ${this.topic}`, reason);
      if (this.isJoining()) {
        this.joinPush.reset();
      }
      this.state = CHANNEL_STATES.errored;
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.joinPush.receive("timeout", () => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `timeout ${this.topic} (${this.joinRef()})`, this.joinPush.timeout);
      let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), this.timeout);
      leavePush.send();
      this.state = CHANNEL_STATES.errored;
      this.joinPush.reset();
      if (this.socket.isConnected()) {
        this.rejoinTimer.scheduleTimeout();
      }
    });
    this.on(CHANNEL_EVENTS.reply, (payload, ref) => {
      this.trigger(this.replyEventName(ref), payload);
    });
  }
  join(timeout = this.timeout) {
    if (this.joinedOnce) {
      throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
    } else {
      this.timeout = timeout;
      this.joinedOnce = true;
      this.rejoin();
      return this.joinPush;
    }
  }
  onClose(callback) {
    this.on(CHANNEL_EVENTS.close, callback);
  }
  onError(callback) {
    return this.on(CHANNEL_EVENTS.error, (reason) => callback(reason));
  }
  on(event, callback) {
    let ref = this.bindingRef++;
    this.bindings.push({ event, ref, callback });
    return ref;
  }
  off(event, ref) {
    this.bindings = this.bindings.filter((bind2) => {
      return !(bind2.event === event && (typeof ref === "undefined" || ref === bind2.ref));
    });
  }
  canPush() {
    return this.socket.isConnected() && this.isJoined();
  }
  push(event, payload, timeout = this.timeout) {
    payload = payload || {};
    if (!this.joinedOnce) {
      throw new Error(`tried to push '${event}' to '${this.topic}' before joining. Use channel.join() before pushing events`);
    }
    let pushEvent = new Push(this, event, function() {
      return payload;
    }, timeout);
    if (this.canPush()) {
      pushEvent.send();
    } else {
      pushEvent.startTimeout();
      this.pushBuffer.push(pushEvent);
    }
    return pushEvent;
  }
  leave(timeout = this.timeout) {
    this.rejoinTimer.reset();
    this.joinPush.cancelTimeout();
    this.state = CHANNEL_STATES.leaving;
    let onClose = () => {
      if (this.socket.hasLogger())
        this.socket.log("channel", `leave ${this.topic}`);
      this.trigger(CHANNEL_EVENTS.close, "leave");
    };
    let leavePush = new Push(this, CHANNEL_EVENTS.leave, closure({}), timeout);
    leavePush.receive("ok", () => onClose()).receive("timeout", () => onClose());
    leavePush.send();
    if (!this.canPush()) {
      leavePush.trigger("ok", {});
    }
    return leavePush;
  }
  onMessage(_event, payload, _ref) {
    return payload;
  }
  isMember(topic, event, payload, joinRef) {
    if (this.topic !== topic) {
      return false;
    }
    if (joinRef && joinRef !== this.joinRef()) {
      if (this.socket.hasLogger())
        this.socket.log("channel", "dropping outdated message", { topic, event, payload, joinRef });
      return false;
    } else {
      return true;
    }
  }
  joinRef() {
    return this.joinPush.ref;
  }
  rejoin(timeout = this.timeout) {
    if (this.isLeaving()) {
      return;
    }
    this.socket.leaveOpenTopic(this.topic);
    this.state = CHANNEL_STATES.joining;
    this.joinPush.resend(timeout);
  }
  trigger(event, payload, ref, joinRef) {
    let handledPayload = this.onMessage(event, payload, ref, joinRef);
    if (payload && !handledPayload) {
      throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");
    }
    let eventBindings = this.bindings.filter((bind2) => bind2.event === event);
    for (let i = 0; i < eventBindings.length; i++) {
      let bind2 = eventBindings[i];
      bind2.callback(handledPayload, ref, joinRef || this.joinRef());
    }
  }
  replyEventName(ref) {
    return `chan_reply_${ref}`;
  }
  isClosed() {
    return this.state === CHANNEL_STATES.closed;
  }
  isErrored() {
    return this.state === CHANNEL_STATES.errored;
  }
  isJoined() {
    return this.state === CHANNEL_STATES.joined;
  }
  isJoining() {
    return this.state === CHANNEL_STATES.joining;
  }
  isLeaving() {
    return this.state === CHANNEL_STATES.leaving;
  }
};
var Ajax = class {
  static request(method, endPoint, accept, body, timeout, ontimeout, callback) {
    if (global2.XDomainRequest) {
      let req = new global2.XDomainRequest();
      this.xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback);
    } else {
      let req = new global2.XMLHttpRequest();
      this.xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback);
    }
  }
  static xdomainRequest(req, method, endPoint, body, timeout, ontimeout, callback) {
    req.timeout = timeout;
    req.open(method, endPoint);
    req.onload = () => {
      let response = this.parseJSON(req.responseText);
      callback && callback(response);
    };
    if (ontimeout) {
      req.ontimeout = ontimeout;
    }
    req.onprogress = () => {
    };
    req.send(body);
  }
  static xhrRequest(req, method, endPoint, accept, body, timeout, ontimeout, callback) {
    req.open(method, endPoint, true);
    req.timeout = timeout;
    req.setRequestHeader("Content-Type", accept);
    req.onerror = () => {
      callback && callback(null);
    };
    req.onreadystatechange = () => {
      if (req.readyState === XHR_STATES.complete && callback) {
        let response = this.parseJSON(req.responseText);
        callback(response);
      }
    };
    if (ontimeout) {
      req.ontimeout = ontimeout;
    }
    req.send(body);
  }
  static parseJSON(resp) {
    if (!resp || resp === "") {
      return null;
    }
    try {
      return JSON.parse(resp);
    } catch (e) {
      console && console.log("failed to parse JSON response", resp);
      return null;
    }
  }
  static serialize(obj, parentKey) {
    let queryStr = [];
    for (var key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        continue;
      }
      let paramKey = parentKey ? `${parentKey}[${key}]` : key;
      let paramVal = obj[key];
      if (typeof paramVal === "object") {
        queryStr.push(this.serialize(paramVal, paramKey));
      } else {
        queryStr.push(encodeURIComponent(paramKey) + "=" + encodeURIComponent(paramVal));
      }
    }
    return queryStr.join("&");
  }
  static appendParams(url, params) {
    if (Object.keys(params).length === 0) {
      return url;
    }
    let prefix2 = url.match(/\?/) ? "&" : "?";
    return `${url}${prefix2}${this.serialize(params)}`;
  }
};
var LongPoll = class {
  constructor(endPoint) {
    this.endPoint = null;
    this.token = null;
    this.skipHeartbeat = true;
    this.onopen = function() {
    };
    this.onerror = function() {
    };
    this.onmessage = function() {
    };
    this.onclose = function() {
    };
    this.pollEndpoint = this.normalizeEndpoint(endPoint);
    this.readyState = SOCKET_STATES.connecting;
    this.poll();
  }
  normalizeEndpoint(endPoint) {
    return endPoint.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + TRANSPORTS.websocket), "$1/" + TRANSPORTS.longpoll);
  }
  endpointURL() {
    return Ajax.appendParams(this.pollEndpoint, { token: this.token });
  }
  closeAndRetry() {
    this.close();
    this.readyState = SOCKET_STATES.connecting;
  }
  ontimeout() {
    this.onerror("timeout");
    this.closeAndRetry();
  }
  poll() {
    if (!(this.readyState === SOCKET_STATES.open || this.readyState === SOCKET_STATES.connecting)) {
      return;
    }
    Ajax.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), (resp) => {
      if (resp) {
        var { status, token, messages } = resp;
        this.token = token;
      } else {
        status = 0;
      }
      switch (status) {
        case 200:
          messages.forEach((msg) => {
            setTimeout(() => {
              this.onmessage({ data: msg });
            }, 0);
          });
          this.poll();
          break;
        case 204:
          this.poll();
          break;
        case 410:
          this.readyState = SOCKET_STATES.open;
          this.onopen();
          this.poll();
          break;
        case 403:
          this.onerror();
          this.close();
          break;
        case 0:
        case 500:
          this.onerror();
          this.closeAndRetry();
          break;
        default:
          throw new Error(`unhandled poll status ${status}`);
      }
    });
  }
  send(body) {
    Ajax.request("POST", this.endpointURL(), "application/json", body, this.timeout, this.onerror.bind(this, "timeout"), (resp) => {
      if (!resp || resp.status !== 200) {
        this.onerror(resp && resp.status);
        this.closeAndRetry();
      }
    });
  }
  close(_code, _reason) {
    this.readyState = SOCKET_STATES.closed;
    this.onclose();
  }
};
var serializer_default = {
  HEADER_LENGTH: 1,
  META_LENGTH: 4,
  KINDS: { push: 0, reply: 1, broadcast: 2 },
  encode(msg, callback) {
    if (msg.payload.constructor === ArrayBuffer) {
      return callback(this.binaryEncode(msg));
    } else {
      let payload = [msg.join_ref, msg.ref, msg.topic, msg.event, msg.payload];
      return callback(JSON.stringify(payload));
    }
  },
  decode(rawPayload, callback) {
    if (rawPayload.constructor === ArrayBuffer) {
      return callback(this.binaryDecode(rawPayload));
    } else {
      let [join_ref, ref, topic, event, payload] = JSON.parse(rawPayload);
      return callback({ join_ref, ref, topic, event, payload });
    }
  },
  binaryEncode(message) {
    let { join_ref, ref, event, topic, payload } = message;
    let metaLength = this.META_LENGTH + join_ref.length + ref.length + topic.length + event.length;
    let header = new ArrayBuffer(this.HEADER_LENGTH + metaLength);
    let view = new DataView(header);
    let offset = 0;
    view.setUint8(offset++, this.KINDS.push);
    view.setUint8(offset++, join_ref.length);
    view.setUint8(offset++, ref.length);
    view.setUint8(offset++, topic.length);
    view.setUint8(offset++, event.length);
    Array.from(join_ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(ref, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(topic, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    Array.from(event, (char) => view.setUint8(offset++, char.charCodeAt(0)));
    var combined = new Uint8Array(header.byteLength + payload.byteLength);
    combined.set(new Uint8Array(header), 0);
    combined.set(new Uint8Array(payload), header.byteLength);
    return combined.buffer;
  },
  binaryDecode(buffer) {
    let view = new DataView(buffer);
    let kind = view.getUint8(0);
    let decoder = new TextDecoder();
    switch (kind) {
      case this.KINDS.push:
        return this.decodePush(buffer, view, decoder);
      case this.KINDS.reply:
        return this.decodeReply(buffer, view, decoder);
      case this.KINDS.broadcast:
        return this.decodeBroadcast(buffer, view, decoder);
    }
  },
  decodePush(buffer, view, decoder) {
    let joinRefSize = view.getUint8(1);
    let topicSize = view.getUint8(2);
    let eventSize = view.getUint8(3);
    let offset = this.HEADER_LENGTH + this.META_LENGTH - 1;
    let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
    offset = offset + joinRefSize;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data2 = buffer.slice(offset, buffer.byteLength);
    return { join_ref: joinRef, ref: null, topic, event, payload: data2 };
  },
  decodeReply(buffer, view, decoder) {
    let joinRefSize = view.getUint8(1);
    let refSize = view.getUint8(2);
    let topicSize = view.getUint8(3);
    let eventSize = view.getUint8(4);
    let offset = this.HEADER_LENGTH + this.META_LENGTH;
    let joinRef = decoder.decode(buffer.slice(offset, offset + joinRefSize));
    offset = offset + joinRefSize;
    let ref = decoder.decode(buffer.slice(offset, offset + refSize));
    offset = offset + refSize;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data2 = buffer.slice(offset, buffer.byteLength);
    let payload = { status: event, response: data2 };
    return { join_ref: joinRef, ref, topic, event: CHANNEL_EVENTS.reply, payload };
  },
  decodeBroadcast(buffer, view, decoder) {
    let topicSize = view.getUint8(1);
    let eventSize = view.getUint8(2);
    let offset = this.HEADER_LENGTH + 2;
    let topic = decoder.decode(buffer.slice(offset, offset + topicSize));
    offset = offset + topicSize;
    let event = decoder.decode(buffer.slice(offset, offset + eventSize));
    offset = offset + eventSize;
    let data2 = buffer.slice(offset, buffer.byteLength);
    return { join_ref: null, ref: null, topic, event, payload: data2 };
  }
};
var Socket = class {
  constructor(endPoint, opts = {}) {
    this.stateChangeCallbacks = { open: [], close: [], error: [], message: [] };
    this.channels = [];
    this.sendBuffer = [];
    this.ref = 0;
    this.timeout = opts.timeout || DEFAULT_TIMEOUT;
    this.transport = opts.transport || global2.WebSocket || LongPoll;
    this.establishedConnections = 0;
    this.defaultEncoder = serializer_default.encode.bind(serializer_default);
    this.defaultDecoder = serializer_default.decode.bind(serializer_default);
    this.closeWasClean = false;
    this.binaryType = opts.binaryType || "arraybuffer";
    this.connectClock = 1;
    if (this.transport !== LongPoll) {
      this.encode = opts.encode || this.defaultEncoder;
      this.decode = opts.decode || this.defaultDecoder;
    } else {
      this.encode = this.defaultEncoder;
      this.decode = this.defaultDecoder;
    }
    let awaitingConnectionOnPageShow = null;
    if (phxWindow && phxWindow.addEventListener) {
      phxWindow.addEventListener("pagehide", (_e) => {
        if (this.conn) {
          this.disconnect();
          awaitingConnectionOnPageShow = this.connectClock;
        }
      });
      phxWindow.addEventListener("pageshow", (_e) => {
        if (awaitingConnectionOnPageShow === this.connectClock) {
          awaitingConnectionOnPageShow = null;
          this.connect();
        }
      });
    }
    this.heartbeatIntervalMs = opts.heartbeatIntervalMs || 3e4;
    this.rejoinAfterMs = (tries) => {
      if (opts.rejoinAfterMs) {
        return opts.rejoinAfterMs(tries);
      } else {
        return [1e3, 2e3, 5e3][tries - 1] || 1e4;
      }
    };
    this.reconnectAfterMs = (tries) => {
      if (opts.reconnectAfterMs) {
        return opts.reconnectAfterMs(tries);
      } else {
        return [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][tries - 1] || 5e3;
      }
    };
    this.logger = opts.logger || null;
    this.longpollerTimeout = opts.longpollerTimeout || 2e4;
    this.params = closure(opts.params || {});
    this.endPoint = `${endPoint}/${TRANSPORTS.websocket}`;
    this.vsn = opts.vsn || DEFAULT_VSN;
    this.heartbeatTimer = null;
    this.pendingHeartbeatRef = null;
    this.reconnectTimer = new Timer(() => {
      this.teardown(() => this.connect());
    }, this.reconnectAfterMs);
  }
  replaceTransport(newTransport) {
    this.disconnect();
    this.transport = newTransport;
  }
  protocol() {
    return location.protocol.match(/^https/) ? "wss" : "ws";
  }
  endPointURL() {
    let uri = Ajax.appendParams(Ajax.appendParams(this.endPoint, this.params()), { vsn: this.vsn });
    if (uri.charAt(0) !== "/") {
      return uri;
    }
    if (uri.charAt(1) === "/") {
      return `${this.protocol()}:${uri}`;
    }
    return `${this.protocol()}://${location.host}${uri}`;
  }
  disconnect(callback, code, reason) {
    this.connectClock++;
    this.closeWasClean = true;
    this.reconnectTimer.reset();
    this.teardown(callback, code, reason);
  }
  connect(params) {
    this.connectClock++;
    if (params) {
      console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor");
      this.params = closure(params);
    }
    if (this.conn) {
      return;
    }
    this.closeWasClean = false;
    this.conn = new this.transport(this.endPointURL());
    this.conn.binaryType = this.binaryType;
    this.conn.timeout = this.longpollerTimeout;
    this.conn.onopen = () => this.onConnOpen();
    this.conn.onerror = (error2) => this.onConnError(error2);
    this.conn.onmessage = (event) => this.onConnMessage(event);
    this.conn.onclose = (event) => this.onConnClose(event);
  }
  log(kind, msg, data2) {
    this.logger(kind, msg, data2);
  }
  hasLogger() {
    return this.logger !== null;
  }
  onOpen(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.open.push([ref, callback]);
    return ref;
  }
  onClose(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.close.push([ref, callback]);
    return ref;
  }
  onError(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.error.push([ref, callback]);
    return ref;
  }
  onMessage(callback) {
    let ref = this.makeRef();
    this.stateChangeCallbacks.message.push([ref, callback]);
    return ref;
  }
  onConnOpen() {
    if (this.hasLogger())
      this.log("transport", `connected to ${this.endPointURL()}`);
    this.closeWasClean = false;
    this.establishedConnections++;
    this.flushSendBuffer();
    this.reconnectTimer.reset();
    this.resetHeartbeat();
    this.stateChangeCallbacks.open.forEach(([, callback]) => callback());
  }
  heartbeatTimeout() {
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null;
      if (this.hasLogger()) {
        this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      }
      this.abnormalClose("heartbeat timeout");
    }
  }
  resetHeartbeat() {
    if (this.conn && this.conn.skipHeartbeat) {
      return;
    }
    this.pendingHeartbeatRef = null;
    clearTimeout(this.heartbeatTimer);
    setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  teardown(callback, code, reason) {
    if (!this.conn) {
      return callback && callback();
    }
    this.waitForBufferDone(() => {
      if (this.conn) {
        if (code) {
          this.conn.close(code, reason || "");
        } else {
          this.conn.close();
        }
      }
      this.waitForSocketClosed(() => {
        if (this.conn) {
          this.conn.onclose = function() {
          };
          this.conn = null;
        }
        callback && callback();
      });
    });
  }
  waitForBufferDone(callback, tries = 1) {
    if (tries === 5 || !this.conn || !this.conn.bufferedAmount) {
      callback();
      return;
    }
    setTimeout(() => {
      this.waitForBufferDone(callback, tries + 1);
    }, 150 * tries);
  }
  waitForSocketClosed(callback, tries = 1) {
    if (tries === 5 || !this.conn || this.conn.readyState === SOCKET_STATES.closed) {
      callback();
      return;
    }
    setTimeout(() => {
      this.waitForSocketClosed(callback, tries + 1);
    }, 150 * tries);
  }
  onConnClose(event) {
    let closeCode = event && event.code;
    if (this.hasLogger())
      this.log("transport", "close", event);
    this.triggerChanError();
    clearTimeout(this.heartbeatTimer);
    if (!this.closeWasClean && closeCode !== 1e3) {
      this.reconnectTimer.scheduleTimeout();
    }
    this.stateChangeCallbacks.close.forEach(([, callback]) => callback(event));
  }
  onConnError(error2) {
    if (this.hasLogger())
      this.log("transport", error2);
    let transportBefore = this.transport;
    let establishedBefore = this.establishedConnections;
    this.stateChangeCallbacks.error.forEach(([, callback]) => {
      callback(error2, transportBefore, establishedBefore);
    });
    if (transportBefore === this.transport || establishedBefore > 0) {
      this.triggerChanError();
    }
  }
  triggerChanError() {
    this.channels.forEach((channel) => {
      if (!(channel.isErrored() || channel.isLeaving() || channel.isClosed())) {
        channel.trigger(CHANNEL_EVENTS.error);
      }
    });
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case SOCKET_STATES.connecting:
        return "connecting";
      case SOCKET_STATES.open:
        return "open";
      case SOCKET_STATES.closing:
        return "closing";
      default:
        return "closed";
    }
  }
  isConnected() {
    return this.connectionState() === "open";
  }
  remove(channel) {
    this.off(channel.stateChangeRefs);
    this.channels = this.channels.filter((c) => c.joinRef() !== channel.joinRef());
  }
  off(refs) {
    for (let key in this.stateChangeCallbacks) {
      this.stateChangeCallbacks[key] = this.stateChangeCallbacks[key].filter(([ref]) => {
        return refs.indexOf(ref) === -1;
      });
    }
  }
  channel(topic, chanParams = {}) {
    let chan = new Channel(topic, chanParams, this);
    this.channels.push(chan);
    return chan;
  }
  push(data2) {
    if (this.hasLogger()) {
      let { topic, event, payload, ref, join_ref } = data2;
      this.log("push", `${topic} ${event} (${join_ref}, ${ref})`, payload);
    }
    if (this.isConnected()) {
      this.encode(data2, (result) => this.conn.send(result));
    } else {
      this.sendBuffer.push(() => this.encode(data2, (result) => this.conn.send(result)));
    }
  }
  makeRef() {
    let newRef = this.ref + 1;
    if (newRef === this.ref) {
      this.ref = 0;
    } else {
      this.ref = newRef;
    }
    return this.ref.toString();
  }
  sendHeartbeat() {
    if (this.pendingHeartbeatRef && !this.isConnected()) {
      return;
    }
    this.pendingHeartbeatRef = this.makeRef();
    this.push({ topic: "phoenix", event: "heartbeat", payload: {}, ref: this.pendingHeartbeatRef });
    this.heartbeatTimer = setTimeout(() => this.heartbeatTimeout(), this.heartbeatIntervalMs);
  }
  abnormalClose(reason) {
    this.closeWasClean = false;
    if (this.isConnected()) {
      this.conn.close(WS_CLOSE_NORMAL, reason);
    }
  }
  flushSendBuffer() {
    if (this.isConnected() && this.sendBuffer.length > 0) {
      this.sendBuffer.forEach((callback) => callback());
      this.sendBuffer = [];
    }
  }
  onConnMessage(rawMessage) {
    this.decode(rawMessage.data, (msg) => {
      let { topic, event, payload, ref, join_ref } = msg;
      if (ref && ref === this.pendingHeartbeatRef) {
        clearTimeout(this.heartbeatTimer);
        this.pendingHeartbeatRef = null;
        setTimeout(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
      }
      if (this.hasLogger())
        this.log("receive", `${payload.status || ""} ${topic} ${event} ${ref && "(" + ref + ")" || ""}`, payload);
      for (let i = 0; i < this.channels.length; i++) {
        const channel = this.channels[i];
        if (!channel.isMember(topic, event, payload, join_ref)) {
          continue;
        }
        channel.trigger(event, payload, ref, join_ref);
      }
      for (let i = 0; i < this.stateChangeCallbacks.message.length; i++) {
        let [, callback] = this.stateChangeCallbacks.message[i];
        callback(msg);
      }
    });
  }
  leaveOpenTopic(topic) {
    let dupChannel = this.channels.find((c) => c.topic === topic && (c.isJoined() || c.isJoining()));
    if (dupChannel) {
      if (this.hasLogger())
        this.log("transport", `leaving duplicate topic "${topic}"`);
      dupChannel.leave();
    }
  }
};

// ../deps/phoenix_live_view/priv/static/phoenix_live_view.esm.js
var CONSECUTIVE_RELOADS = "consecutive-reloads";
var MAX_RELOADS = 10;
var RELOAD_JITTER = [1e3, 3e3];
var FAILSAFE_JITTER = 3e4;
var PHX_EVENT_CLASSES = [
  "phx-click-loading",
  "phx-change-loading",
  "phx-submit-loading",
  "phx-keydown-loading",
  "phx-keyup-loading",
  "phx-blur-loading",
  "phx-focus-loading"
];
var PHX_COMPONENT = "data-phx-component";
var PHX_LIVE_LINK = "data-phx-link";
var PHX_TRACK_STATIC = "track-static";
var PHX_LINK_STATE = "data-phx-link-state";
var PHX_REF = "data-phx-ref";
var PHX_TRACK_UPLOADS = "track-uploads";
var PHX_UPLOAD_REF = "data-phx-upload-ref";
var PHX_PREFLIGHTED_REFS = "data-phx-preflighted-refs";
var PHX_DONE_REFS = "data-phx-done-refs";
var PHX_DROP_TARGET = "drop-target";
var PHX_ACTIVE_ENTRY_REFS = "data-phx-active-refs";
var PHX_LIVE_FILE_UPDATED = "phx:live-file:updated";
var PHX_SKIP = "data-phx-skip";
var PHX_PRUNE = "data-phx-prune";
var PHX_PAGE_LOADING = "page-loading";
var PHX_CONNECTED_CLASS = "phx-connected";
var PHX_DISCONNECTED_CLASS = "phx-loading";
var PHX_NO_FEEDBACK_CLASS = "phx-no-feedback";
var PHX_ERROR_CLASS = "phx-error";
var PHX_PARENT_ID = "data-phx-parent-id";
var PHX_MAIN = "data-phx-main";
var PHX_ROOT_ID = "data-phx-root-id";
var PHX_TRIGGER_ACTION = "trigger-action";
var PHX_FEEDBACK_FOR = "feedback-for";
var PHX_HAS_FOCUSED = "phx-has-focused";
var FOCUSABLE_INPUTS = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time"];
var CHECKABLE_INPUTS = ["checkbox", "radio"];
var PHX_HAS_SUBMITTED = "phx-has-submitted";
var PHX_SESSION = "data-phx-session";
var PHX_VIEW_SELECTOR = `[${PHX_SESSION}]`;
var PHX_STATIC = "data-phx-static";
var PHX_READONLY = "data-phx-readonly";
var PHX_DISABLED = "data-phx-disabled";
var PHX_DISABLE_WITH = "disable-with";
var PHX_DISABLE_WITH_RESTORE = "data-phx-disable-with-restore";
var PHX_HOOK = "hook";
var PHX_DEBOUNCE = "debounce";
var PHX_THROTTLE = "throttle";
var PHX_UPDATE = "update";
var PHX_KEY = "key";
var PHX_PRIVATE = "phxPrivate";
var PHX_AUTO_RECOVER = "auto-recover";
var PHX_LV_DEBUG = "phx:live-socket:debug";
var PHX_LV_PROFILE = "phx:live-socket:profiling";
var PHX_LV_LATENCY_SIM = "phx:live-socket:latency-sim";
var PHX_PROGRESS = "progress";
var LOADER_TIMEOUT = 1;
var BEFORE_UNLOAD_LOADER_TIMEOUT = 200;
var BINDING_PREFIX = "phx-";
var PUSH_TIMEOUT = 3e4;
var DEBOUNCE_TRIGGER = "debounce-trigger";
var THROTTLED = "throttled";
var DEBOUNCE_PREV_KEY = "debounce-prev-key";
var DEFAULTS = {
  debounce: 300,
  throttle: 300
};
var DYNAMICS = "d";
var STATIC = "s";
var COMPONENTS = "c";
var EVENTS = "e";
var REPLY = "r";
var TITLE = "t";
var TEMPLATES = "p";
var EntryUploader = class {
  constructor(entry, chunkSize, liveSocket2) {
    this.liveSocket = liveSocket2;
    this.entry = entry;
    this.offset = 0;
    this.chunkSize = chunkSize;
    this.chunkTimer = null;
    this.uploadChannel = liveSocket2.channel(`lvu:${entry.ref}`, { token: entry.metadata() });
  }
  error(reason) {
    clearTimeout(this.chunkTimer);
    this.uploadChannel.leave();
    this.entry.error(reason);
  }
  upload() {
    this.uploadChannel.onError((reason) => this.error(reason));
    this.uploadChannel.join().receive("ok", (_data) => this.readNextChunk()).receive("error", (reason) => this.error(reason));
  }
  isDone() {
    return this.offset >= this.entry.file.size;
  }
  readNextChunk() {
    let reader = new window.FileReader();
    let blob = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
    reader.onload = (e) => {
      if (e.target.error === null) {
        this.offset += e.target.result.byteLength;
        this.pushChunk(e.target.result);
      } else {
        return logError("Read error: " + e.target.error);
      }
    };
    reader.readAsArrayBuffer(blob);
  }
  pushChunk(chunk) {
    if (!this.uploadChannel.isJoined()) {
      return;
    }
    this.uploadChannel.push("chunk", chunk).receive("ok", () => {
      this.entry.progress(this.offset / this.entry.file.size * 100);
      if (!this.isDone()) {
        this.chunkTimer = setTimeout(() => this.readNextChunk(), this.liveSocket.getLatencySim() || 0);
      }
    });
  }
};
var logError = (msg, obj) => console.error && console.error(msg, obj);
var isCid = (cid) => {
  let type = typeof cid;
  return type === "number" || type === "string" && /^(0|[1-9]\d*)$/.test(cid);
};
function detectDuplicateIds() {
  let ids = /* @__PURE__ */ new Set();
  let elems = document.querySelectorAll("*[id]");
  for (let i = 0, len = elems.length; i < len; i++) {
    if (ids.has(elems[i].id)) {
      console.error(`Multiple IDs detected: ${elems[i].id}. Ensure unique element ids.`);
    } else {
      ids.add(elems[i].id);
    }
  }
}
var debug = (view, kind, msg, obj) => {
  if (view.liveSocket.isDebugEnabled()) {
    console.log(`${view.id} ${kind}: ${msg} - `, obj);
  }
};
var closure2 = (val) => typeof val === "function" ? val : function() {
  return val;
};
var clone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
var closestPhxBinding = (el, binding, borderEl) => {
  do {
    if (el.matches(`[${binding}]`)) {
      return el;
    }
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1 && !(borderEl && borderEl.isSameNode(el) || el.matches(PHX_VIEW_SELECTOR)));
  return null;
};
var isObject = (obj) => {
  return obj !== null && typeof obj === "object" && !(obj instanceof Array);
};
var isEqualObj = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);
var isEmpty = (obj) => {
  for (let x in obj) {
    return false;
  }
  return true;
};
var maybe = (el, callback) => el && callback(el);
var channelUploader = function(entries, onError, resp, liveSocket2) {
  entries.forEach((entry) => {
    let entryUploader = new EntryUploader(entry, resp.config.chunk_size, liveSocket2);
    entryUploader.upload();
  });
};
var Browser = {
  canPushState() {
    return typeof history.pushState !== "undefined";
  },
  dropLocal(localStorage, namespace, subkey) {
    return localStorage.removeItem(this.localKey(namespace, subkey));
  },
  updateLocal(localStorage, namespace, subkey, initial, func) {
    let current = this.getLocal(localStorage, namespace, subkey);
    let key = this.localKey(namespace, subkey);
    let newVal = current === null ? initial : func(current);
    localStorage.setItem(key, JSON.stringify(newVal));
    return newVal;
  },
  getLocal(localStorage, namespace, subkey) {
    return JSON.parse(localStorage.getItem(this.localKey(namespace, subkey)));
  },
  updateCurrentState(callback) {
    if (!this.canPushState()) {
      return;
    }
    history.replaceState(callback(history.state || {}), "", window.location.href);
  },
  pushState(kind, meta, to) {
    if (this.canPushState()) {
      if (to !== window.location.href) {
        if (meta.type == "redirect" && meta.scroll) {
          let currentState = history.state || {};
          currentState.scroll = meta.scroll;
          history.replaceState(currentState, "", window.location.href);
        }
        delete meta.scroll;
        history[kind + "State"](meta, "", to || null);
        let hashEl = this.getHashTargetEl(window.location.hash);
        if (hashEl) {
          hashEl.scrollIntoView();
        } else if (meta.type === "redirect") {
          window.scroll(0, 0);
        }
      }
    } else {
      this.redirect(to);
    }
  },
  setCookie(name, value) {
    document.cookie = `${name}=${value}`;
  },
  getCookie(name) {
    return document.cookie.replace(new RegExp(`(?:(?:^|.*;s*)${name}s*=s*([^;]*).*$)|^.*$`), "$1");
  },
  redirect(toURL, flash) {
    if (flash) {
      Browser.setCookie("__phoenix_flash__", flash + "; max-age=60000; path=/");
    }
    window.location = toURL;
  },
  localKey(namespace, subkey) {
    return `${namespace}-${subkey}`;
  },
  getHashTargetEl(maybeHash) {
    let hash = maybeHash.toString().substring(1);
    if (hash === "") {
      return;
    }
    return document.getElementById(hash) || document.querySelector(`a[name="${hash}"]`);
  }
};
var browser_default = Browser;
var DOM = {
  byId(id) {
    return document.getElementById(id) || logError(`no id found for ${id}`);
  },
  removeClass(el, className) {
    el.classList.remove(className);
    if (el.classList.length === 0) {
      el.removeAttribute("class");
    }
  },
  all(node, query, callback) {
    if (!node) {
      return [];
    }
    let array = Array.from(node.querySelectorAll(query));
    return callback ? array.forEach(callback) : array;
  },
  childNodeLength(html) {
    let template = document.createElement("template");
    template.innerHTML = html;
    return template.content.childElementCount;
  },
  isUploadInput(el) {
    return el.type === "file" && el.getAttribute(PHX_UPLOAD_REF) !== null;
  },
  findUploadInputs(node) {
    return this.all(node, `input[type="file"][${PHX_UPLOAD_REF}]`);
  },
  findComponentNodeList(node, cid) {
    return this.filterWithinSameLiveView(this.all(node, `[${PHX_COMPONENT}="${cid}"]`), node);
  },
  isPhxDestroyed(node) {
    return node.id && DOM.private(node, "destroyed") ? true : false;
  },
  markPhxChildDestroyed(el) {
    if (this.isPhxChild(el)) {
      el.setAttribute(PHX_SESSION, "");
    }
    this.putPrivate(el, "destroyed", true);
  },
  findPhxChildrenInFragment(html, parentId) {
    let template = document.createElement("template");
    template.innerHTML = html;
    return this.findPhxChildren(template.content, parentId);
  },
  isIgnored(el, phxUpdate) {
    return (el.getAttribute(phxUpdate) || el.getAttribute("data-phx-update")) === "ignore";
  },
  isPhxUpdate(el, phxUpdate, updateTypes) {
    return el.getAttribute && updateTypes.indexOf(el.getAttribute(phxUpdate)) >= 0;
  },
  findPhxChildren(el, parentId) {
    return this.all(el, `${PHX_VIEW_SELECTOR}[${PHX_PARENT_ID}="${parentId}"]`);
  },
  findParentCIDs(node, cids) {
    let initial = new Set(cids);
    return cids.reduce((acc, cid) => {
      let selector = `[${PHX_COMPONENT}="${cid}"] [${PHX_COMPONENT}]`;
      this.filterWithinSameLiveView(this.all(node, selector), node).map((el) => parseInt(el.getAttribute(PHX_COMPONENT))).forEach((childCID) => acc.delete(childCID));
      return acc;
    }, initial);
  },
  filterWithinSameLiveView(nodes, parent) {
    if (parent.querySelector(PHX_VIEW_SELECTOR)) {
      return nodes.filter((el) => this.withinSameLiveView(el, parent));
    } else {
      return nodes;
    }
  },
  withinSameLiveView(node, parent) {
    while (node = node.parentNode) {
      if (node.isSameNode(parent)) {
        return true;
      }
      if (node.getAttribute(PHX_SESSION) !== null) {
        return false;
      }
    }
  },
  private(el, key) {
    return el[PHX_PRIVATE] && el[PHX_PRIVATE][key];
  },
  deletePrivate(el, key) {
    el[PHX_PRIVATE] && delete el[PHX_PRIVATE][key];
  },
  putPrivate(el, key, value) {
    if (!el[PHX_PRIVATE]) {
      el[PHX_PRIVATE] = {};
    }
    el[PHX_PRIVATE][key] = value;
  },
  updatePrivate(el, key, defaultVal, updateFunc) {
    let existing = this.private(el, key);
    if (existing === void 0) {
      this.putPrivate(el, key, updateFunc(defaultVal));
    } else {
      this.putPrivate(el, key, updateFunc(existing));
    }
  },
  copyPrivates(target, source) {
    if (source[PHX_PRIVATE]) {
      target[PHX_PRIVATE] = source[PHX_PRIVATE];
    }
  },
  putTitle(str) {
    let titleEl = document.querySelector("title");
    let { prefix: prefix2, suffix } = titleEl.dataset;
    document.title = `${prefix2 || ""}${str}${suffix || ""}`;
  },
  debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, callback) {
    let debounce2 = el.getAttribute(phxDebounce);
    let throttle2 = el.getAttribute(phxThrottle);
    if (debounce2 === "") {
      debounce2 = defaultDebounce;
    }
    if (throttle2 === "") {
      throttle2 = defaultThrottle;
    }
    let value = debounce2 || throttle2;
    switch (value) {
      case null:
        return callback();
      case "blur":
        if (this.once(el, "debounce-blur")) {
          el.addEventListener("blur", () => callback());
        }
        return;
      default:
        let timeout = parseInt(value);
        let trigger = () => throttle2 ? this.deletePrivate(el, THROTTLED) : callback();
        let currentCycle = this.incCycle(el, DEBOUNCE_TRIGGER, trigger);
        if (isNaN(timeout)) {
          return logError(`invalid throttle/debounce value: ${value}`);
        }
        if (throttle2) {
          let newKeyDown = false;
          if (event.type === "keydown") {
            let prevKey = this.private(el, DEBOUNCE_PREV_KEY);
            this.putPrivate(el, DEBOUNCE_PREV_KEY, event.key);
            newKeyDown = prevKey !== event.key;
          }
          if (!newKeyDown && this.private(el, THROTTLED)) {
            return false;
          } else {
            callback();
            this.putPrivate(el, THROTTLED, true);
            setTimeout(() => this.triggerCycle(el, DEBOUNCE_TRIGGER), timeout);
          }
        } else {
          setTimeout(() => this.triggerCycle(el, DEBOUNCE_TRIGGER, currentCycle), timeout);
        }
        let form = el.form;
        if (form && this.once(form, "bind-debounce")) {
          form.addEventListener("submit", () => {
            Array.from(new FormData(form).entries(), ([name]) => {
              let input = form.querySelector(`[name="${name}"]`);
              this.incCycle(input, DEBOUNCE_TRIGGER);
              this.deletePrivate(input, THROTTLED);
            });
          });
        }
        if (this.once(el, "bind-debounce")) {
          el.addEventListener("blur", () => this.triggerCycle(el, DEBOUNCE_TRIGGER));
        }
    }
  },
  triggerCycle(el, key, currentCycle) {
    let [cycle, trigger] = this.private(el, key);
    if (!currentCycle) {
      currentCycle = cycle;
    }
    if (currentCycle === cycle) {
      this.incCycle(el, key);
      trigger();
    }
  },
  once(el, key) {
    if (this.private(el, key) === true) {
      return false;
    }
    this.putPrivate(el, key, true);
    return true;
  },
  incCycle(el, key, trigger = function() {
  }) {
    let [currentCycle] = this.private(el, key) || [0, trigger];
    currentCycle++;
    this.putPrivate(el, key, [currentCycle, trigger]);
    return currentCycle;
  },
  discardError(container, el, phxFeedbackFor) {
    let field = el.getAttribute && el.getAttribute(phxFeedbackFor);
    let input = field && container.querySelector(`[id="${field}"], [name="${field}"]`);
    if (!input) {
      return;
    }
    if (!(this.private(input, PHX_HAS_FOCUSED) || this.private(input.form, PHX_HAS_SUBMITTED))) {
      el.classList.add(PHX_NO_FEEDBACK_CLASS);
    }
  },
  showError(inputEl, phxFeedbackFor) {
    if (inputEl.id || inputEl.name) {
      this.all(inputEl.form, `[${phxFeedbackFor}="${inputEl.id}"], [${phxFeedbackFor}="${inputEl.name}"]`, (el) => {
        this.removeClass(el, PHX_NO_FEEDBACK_CLASS);
      });
    }
  },
  isPhxChild(node) {
    return node.getAttribute && node.getAttribute(PHX_PARENT_ID);
  },
  firstPhxChild(el) {
    return this.isPhxChild(el) ? el : this.all(el, `[${PHX_PARENT_ID}]`)[0];
  },
  dispatchEvent(target, eventString, detail = {}) {
    let event = new CustomEvent(eventString, { bubbles: true, cancelable: true, detail });
    target.dispatchEvent(event);
  },
  cloneNode(node, html) {
    if (typeof html === "undefined") {
      return node.cloneNode(true);
    } else {
      let cloned = node.cloneNode(false);
      cloned.innerHTML = html;
      return cloned;
    }
  },
  mergeAttrs(target, source, opts = {}) {
    let exclude = opts.exclude || [];
    let isIgnored = opts.isIgnored;
    let sourceAttrs = source.attributes;
    for (let i = sourceAttrs.length - 1; i >= 0; i--) {
      let name = sourceAttrs[i].name;
      if (exclude.indexOf(name) < 0) {
        target.setAttribute(name, source.getAttribute(name));
      }
    }
    let targetAttrs = target.attributes;
    for (let i = targetAttrs.length - 1; i >= 0; i--) {
      let name = targetAttrs[i].name;
      if (isIgnored) {
        if (name.startsWith("data-") && !source.hasAttribute(name)) {
          target.removeAttribute(name);
        }
      } else {
        if (!source.hasAttribute(name)) {
          target.removeAttribute(name);
        }
      }
    }
  },
  mergeFocusedInput(target, source) {
    if (!(target instanceof HTMLSelectElement)) {
      DOM.mergeAttrs(target, source, { except: ["value"] });
    }
    if (source.readOnly) {
      target.setAttribute("readonly", true);
    } else {
      target.removeAttribute("readonly");
    }
  },
  hasSelectionRange(el) {
    return el.setSelectionRange && (el.type === "text" || el.type === "textarea");
  },
  restoreFocus(focused, selectionStart, selectionEnd) {
    if (!DOM.isTextualInput(focused)) {
      return;
    }
    let wasFocused = focused.matches(":focus");
    if (focused.readOnly) {
      focused.blur();
    }
    if (!wasFocused) {
      focused.focus();
    }
    if (this.hasSelectionRange(focused)) {
      focused.setSelectionRange(selectionStart, selectionEnd);
    }
  },
  isFormInput(el) {
    return /^(?:input|select|textarea)$/i.test(el.tagName) && el.type !== "button";
  },
  syncAttrsToProps(el) {
    if (el instanceof HTMLInputElement && CHECKABLE_INPUTS.indexOf(el.type.toLocaleLowerCase()) >= 0) {
      el.checked = el.getAttribute("checked") !== null;
    }
  },
  isTextualInput(el) {
    return FOCUSABLE_INPUTS.indexOf(el.type) >= 0;
  },
  isNowTriggerFormExternal(el, phxTriggerExternal) {
    return el.getAttribute && el.getAttribute(phxTriggerExternal) !== null;
  },
  syncPendingRef(fromEl, toEl, disableWith) {
    let ref = fromEl.getAttribute(PHX_REF);
    if (ref === null) {
      return true;
    }
    if (DOM.isFormInput(fromEl) || fromEl.getAttribute(disableWith) !== null) {
      if (DOM.isUploadInput(fromEl)) {
        DOM.mergeAttrs(fromEl, toEl, { isIgnored: true });
      }
      DOM.putPrivate(fromEl, PHX_REF, toEl);
      return false;
    } else {
      PHX_EVENT_CLASSES.forEach((className) => {
        fromEl.classList.contains(className) && toEl.classList.add(className);
      });
      toEl.setAttribute(PHX_REF, ref);
      return true;
    }
  },
  cleanChildNodes(container, phxUpdate) {
    if (DOM.isPhxUpdate(container, phxUpdate, ["append", "prepend"])) {
      let toRemove = [];
      container.childNodes.forEach((childNode) => {
        if (!childNode.id) {
          let isEmptyTextNode = childNode.nodeType === Node.TEXT_NODE && childNode.nodeValue.trim() === "";
          if (!isEmptyTextNode) {
            logError(`only HTML element tags with an id are allowed inside containers with phx-update.

removing illegal node: "${(childNode.outerHTML || childNode.nodeValue).trim()}"

`);
          }
          toRemove.push(childNode);
        }
      });
      toRemove.forEach((childNode) => childNode.remove());
    }
  },
  replaceRootContainer(container, tagName, attrs) {
    let retainedAttrs = /* @__PURE__ */ new Set(["id", PHX_SESSION, PHX_STATIC, PHX_MAIN, PHX_ROOT_ID]);
    if (container.tagName.toLowerCase() === tagName.toLowerCase()) {
      Array.from(container.attributes).filter((attr) => !retainedAttrs.has(attr.name.toLowerCase())).forEach((attr) => container.removeAttribute(attr.name));
      Object.keys(attrs).filter((name) => !retainedAttrs.has(name.toLowerCase())).forEach((attr) => container.setAttribute(attr, attrs[attr]));
      return container;
    } else {
      let newContainer = document.createElement(tagName);
      Object.keys(attrs).forEach((attr) => newContainer.setAttribute(attr, attrs[attr]));
      retainedAttrs.forEach((attr) => newContainer.setAttribute(attr, container.getAttribute(attr)));
      newContainer.innerHTML = container.innerHTML;
      container.replaceWith(newContainer);
      return newContainer;
    }
  },
  getSticky(el, name, defaultVal) {
    let op = (DOM.private(el, "sticky") || []).find(([existingName]) => name === existingName);
    if (op) {
      let [_name, _op, stashedResult] = op;
      return stashedResult;
    } else {
      return typeof defaultVal === "function" ? defaultVal() : defaultVal;
    }
  },
  deleteSticky(el, name) {
    this.updatePrivate(el, "sticky", [], (ops) => {
      return ops.filter(([existingName, _]) => existingName !== name);
    });
  },
  putSticky(el, name, op) {
    let stashedResult = op(el);
    this.updatePrivate(el, "sticky", [], (ops) => {
      let existingIndex = ops.findIndex(([existingName]) => name === existingName);
      if (existingIndex >= 0) {
        ops[existingIndex] = [name, op, stashedResult];
      } else {
        ops.push([name, op, stashedResult]);
      }
      return ops;
    });
  },
  applyStickyOperations(el) {
    let ops = DOM.private(el, "sticky");
    if (!ops) {
      return;
    }
    ops.forEach(([name, op, _stashed]) => this.putSticky(el, name, op));
  }
};
var dom_default = DOM;
var UploadEntry = class {
  static isActive(fileEl, file) {
    let isNew = file._phxRef === void 0;
    let activeRefs = fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
    let isActive = activeRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
    return file.size > 0 && (isNew || isActive);
  }
  static isPreflighted(fileEl, file) {
    let preflightedRefs = fileEl.getAttribute(PHX_PREFLIGHTED_REFS).split(",");
    let isPreflighted = preflightedRefs.indexOf(LiveUploader.genFileRef(file)) >= 0;
    return isPreflighted && this.isActive(fileEl, file);
  }
  constructor(fileEl, file, view) {
    this.ref = LiveUploader.genFileRef(file);
    this.fileEl = fileEl;
    this.file = file;
    this.view = view;
    this.meta = null;
    this._isCancelled = false;
    this._isDone = false;
    this._progress = 0;
    this._lastProgressSent = -1;
    this._onDone = function() {
    };
    this._onElUpdated = this.onElUpdated.bind(this);
    this.fileEl.addEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
  }
  metadata() {
    return this.meta;
  }
  progress(progress) {
    this._progress = Math.floor(progress);
    if (this._progress > this._lastProgressSent) {
      if (this._progress >= 100) {
        this._progress = 100;
        this._lastProgressSent = 100;
        this._isDone = true;
        this.view.pushFileProgress(this.fileEl, this.ref, 100, () => {
          LiveUploader.untrackFile(this.fileEl, this.file);
          this._onDone();
        });
      } else {
        this._lastProgressSent = this._progress;
        this.view.pushFileProgress(this.fileEl, this.ref, this._progress);
      }
    }
  }
  cancel() {
    this._isCancelled = true;
    this._isDone = true;
    this._onDone();
  }
  isDone() {
    return this._isDone;
  }
  error(reason = "failed") {
    this.view.pushFileProgress(this.fileEl, this.ref, { error: reason });
    LiveUploader.clearFiles(this.fileEl);
  }
  onDone(callback) {
    this._onDone = () => {
      this.fileEl.removeEventListener(PHX_LIVE_FILE_UPDATED, this._onElUpdated);
      callback();
    };
  }
  onElUpdated() {
    let activeRefs = this.fileEl.getAttribute(PHX_ACTIVE_ENTRY_REFS).split(",");
    if (activeRefs.indexOf(this.ref) === -1) {
      this.cancel();
    }
  }
  toPreflightPayload() {
    return {
      last_modified: this.file.lastModified,
      name: this.file.name,
      size: this.file.size,
      type: this.file.type,
      ref: this.ref
    };
  }
  uploader(uploaders) {
    if (this.meta.uploader) {
      let callback = uploaders[this.meta.uploader] || logError(`no uploader configured for ${this.meta.uploader}`);
      return { name: this.meta.uploader, callback };
    } else {
      return { name: "channel", callback: channelUploader };
    }
  }
  zipPostFlight(resp) {
    this.meta = resp.entries[this.ref];
    if (!this.meta) {
      logError(`no preflight upload response returned with ref ${this.ref}`, { input: this.fileEl, response: resp });
    }
  }
};
var liveUploaderFileRef = 0;
var LiveUploader = class {
  static genFileRef(file) {
    let ref = file._phxRef;
    if (ref !== void 0) {
      return ref;
    } else {
      file._phxRef = (liveUploaderFileRef++).toString();
      return file._phxRef;
    }
  }
  static getEntryDataURL(inputEl, ref, callback) {
    let file = this.activeFiles(inputEl).find((file2) => this.genFileRef(file2) === ref);
    callback(URL.createObjectURL(file));
  }
  static hasUploadsInProgress(formEl) {
    let active = 0;
    dom_default.findUploadInputs(formEl).forEach((input) => {
      if (input.getAttribute(PHX_PREFLIGHTED_REFS) !== input.getAttribute(PHX_DONE_REFS)) {
        active++;
      }
    });
    return active > 0;
  }
  static serializeUploads(inputEl) {
    let files = this.activeFiles(inputEl);
    let fileData = {};
    files.forEach((file) => {
      let entry = { path: inputEl.name };
      let uploadRef = inputEl.getAttribute(PHX_UPLOAD_REF);
      fileData[uploadRef] = fileData[uploadRef] || [];
      entry.ref = this.genFileRef(file);
      entry.name = file.name || entry.ref;
      entry.type = file.type;
      entry.size = file.size;
      fileData[uploadRef].push(entry);
    });
    return fileData;
  }
  static clearFiles(inputEl) {
    inputEl.value = null;
    inputEl.removeAttribute(PHX_UPLOAD_REF);
    dom_default.putPrivate(inputEl, "files", []);
  }
  static untrackFile(inputEl, file) {
    dom_default.putPrivate(inputEl, "files", dom_default.private(inputEl, "files").filter((f) => !Object.is(f, file)));
  }
  static trackFiles(inputEl, files) {
    if (inputEl.getAttribute("multiple") !== null) {
      let newFiles = files.filter((file) => !this.activeFiles(inputEl).find((f) => Object.is(f, file)));
      dom_default.putPrivate(inputEl, "files", this.activeFiles(inputEl).concat(newFiles));
      inputEl.value = null;
    } else {
      dom_default.putPrivate(inputEl, "files", files);
    }
  }
  static activeFileInputs(formEl) {
    let fileInputs = dom_default.findUploadInputs(formEl);
    return Array.from(fileInputs).filter((el) => el.files && this.activeFiles(el).length > 0);
  }
  static activeFiles(input) {
    return (dom_default.private(input, "files") || []).filter((f) => UploadEntry.isActive(input, f));
  }
  static inputsAwaitingPreflight(formEl) {
    let fileInputs = dom_default.findUploadInputs(formEl);
    return Array.from(fileInputs).filter((input) => this.filesAwaitingPreflight(input).length > 0);
  }
  static filesAwaitingPreflight(input) {
    return this.activeFiles(input).filter((f) => !UploadEntry.isPreflighted(input, f));
  }
  constructor(inputEl, view, onComplete) {
    this.view = view;
    this.onComplete = onComplete;
    this._entries = Array.from(LiveUploader.filesAwaitingPreflight(inputEl) || []).map((file) => new UploadEntry(inputEl, file, view));
    this.numEntriesInProgress = this._entries.length;
  }
  entries() {
    return this._entries;
  }
  initAdapterUpload(resp, onError, liveSocket2) {
    this._entries = this._entries.map((entry) => {
      entry.zipPostFlight(resp);
      entry.onDone(() => {
        this.numEntriesInProgress--;
        if (this.numEntriesInProgress === 0) {
          this.onComplete();
        }
      });
      return entry;
    });
    let groupedEntries = this._entries.reduce((acc, entry) => {
      let { name, callback } = entry.uploader(liveSocket2.uploaders);
      acc[name] = acc[name] || { callback, entries: [] };
      acc[name].entries.push(entry);
      return acc;
    }, {});
    for (let name in groupedEntries) {
      let { callback, entries } = groupedEntries[name];
      callback(entries, onError, resp, liveSocket2);
    }
  }
};
var Hooks = {
  LiveFileUpload: {
    activeRefs() {
      return this.el.getAttribute(PHX_ACTIVE_ENTRY_REFS);
    },
    preflightedRefs() {
      return this.el.getAttribute(PHX_PREFLIGHTED_REFS);
    },
    mounted() {
      this.preflightedWas = this.preflightedRefs();
    },
    updated() {
      let newPreflights = this.preflightedRefs();
      if (this.preflightedWas !== newPreflights) {
        this.preflightedWas = newPreflights;
        if (newPreflights === "") {
          this.__view.cancelSubmit(this.el.form);
        }
      }
      if (this.activeRefs() === "") {
        this.el.value = null;
      }
      this.el.dispatchEvent(new CustomEvent(PHX_LIVE_FILE_UPDATED));
    }
  },
  LiveImgPreview: {
    mounted() {
      this.ref = this.el.getAttribute("data-phx-entry-ref");
      this.inputEl = document.getElementById(this.el.getAttribute(PHX_UPLOAD_REF));
      LiveUploader.getEntryDataURL(this.inputEl, this.ref, (url) => {
        this.url = url;
        this.el.src = url;
      });
    },
    destroyed() {
      URL.revokeObjectURL(this.url);
    }
  }
};
var hooks_default = Hooks;
var DOMPostMorphRestorer = class {
  constructor(containerBefore, containerAfter, updateType) {
    let idsBefore = /* @__PURE__ */ new Set();
    let idsAfter = new Set([...containerAfter.children].map((child) => child.id));
    let elementsToModify = [];
    Array.from(containerBefore.children).forEach((child) => {
      if (child.id) {
        idsBefore.add(child.id);
        if (idsAfter.has(child.id)) {
          let previousElementId = child.previousElementSibling && child.previousElementSibling.id;
          elementsToModify.push({ elementId: child.id, previousElementId });
        }
      }
    });
    this.containerId = containerAfter.id;
    this.updateType = updateType;
    this.elementsToModify = elementsToModify;
    this.elementIdsToAdd = [...idsAfter].filter((id) => !idsBefore.has(id));
  }
  perform() {
    let container = dom_default.byId(this.containerId);
    this.elementsToModify.forEach((elementToModify) => {
      if (elementToModify.previousElementId) {
        maybe(document.getElementById(elementToModify.previousElementId), (previousElem) => {
          maybe(document.getElementById(elementToModify.elementId), (elem) => {
            let isInRightPlace = elem.previousElementSibling && elem.previousElementSibling.id == previousElem.id;
            if (!isInRightPlace) {
              previousElem.insertAdjacentElement("afterend", elem);
            }
          });
        });
      } else {
        maybe(document.getElementById(elementToModify.elementId), (elem) => {
          let isInRightPlace = elem.previousElementSibling == null;
          if (!isInRightPlace) {
            container.insertAdjacentElement("afterbegin", elem);
          }
        });
      }
    });
    if (this.updateType == "prepend") {
      this.elementIdsToAdd.reverse().forEach((elemId) => {
        maybe(document.getElementById(elemId), (elem) => container.insertAdjacentElement("afterbegin", elem));
      });
    }
  }
};
var DOCUMENT_FRAGMENT_NODE = 11;
function morphAttrs(fromNode, toNode) {
  var toNodeAttrs = toNode.attributes;
  var attr;
  var attrName;
  var attrNamespaceURI;
  var attrValue;
  var fromValue;
  if (toNode.nodeType === DOCUMENT_FRAGMENT_NODE || fromNode.nodeType === DOCUMENT_FRAGMENT_NODE) {
    return;
  }
  for (var i = toNodeAttrs.length - 1; i >= 0; i--) {
    attr = toNodeAttrs[i];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    attrValue = attr.value;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);
      if (fromValue !== attrValue) {
        if (attr.prefix === "xmlns") {
          attrName = attr.name;
        }
        fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
      }
    } else {
      fromValue = fromNode.getAttribute(attrName);
      if (fromValue !== attrValue) {
        fromNode.setAttribute(attrName, attrValue);
      }
    }
  }
  var fromNodeAttrs = fromNode.attributes;
  for (var d = fromNodeAttrs.length - 1; d >= 0; d--) {
    attr = fromNodeAttrs[d];
    attrName = attr.name;
    attrNamespaceURI = attr.namespaceURI;
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName;
      if (!toNode.hasAttributeNS(attrNamespaceURI, attrName)) {
        fromNode.removeAttributeNS(attrNamespaceURI, attrName);
      }
    } else {
      if (!toNode.hasAttribute(attrName)) {
        fromNode.removeAttribute(attrName);
      }
    }
  }
}
var range;
var NS_XHTML = "http://www.w3.org/1999/xhtml";
var doc = typeof document === "undefined" ? void 0 : document;
var HAS_TEMPLATE_SUPPORT = !!doc && "content" in doc.createElement("template");
var HAS_RANGE_SUPPORT = !!doc && doc.createRange && "createContextualFragment" in doc.createRange();
function createFragmentFromTemplate(str) {
  var template = doc.createElement("template");
  template.innerHTML = str;
  return template.content.childNodes[0];
}
function createFragmentFromRange(str) {
  if (!range) {
    range = doc.createRange();
    range.selectNode(doc.body);
  }
  var fragment = range.createContextualFragment(str);
  return fragment.childNodes[0];
}
function createFragmentFromWrap(str) {
  var fragment = doc.createElement("body");
  fragment.innerHTML = str;
  return fragment.childNodes[0];
}
function toElement(str) {
  str = str.trim();
  if (HAS_TEMPLATE_SUPPORT) {
    return createFragmentFromTemplate(str);
  } else if (HAS_RANGE_SUPPORT) {
    return createFragmentFromRange(str);
  }
  return createFragmentFromWrap(str);
}
function compareNodeNames(fromEl, toEl) {
  var fromNodeName = fromEl.nodeName;
  var toNodeName = toEl.nodeName;
  var fromCodeStart, toCodeStart;
  if (fromNodeName === toNodeName) {
    return true;
  }
  fromCodeStart = fromNodeName.charCodeAt(0);
  toCodeStart = toNodeName.charCodeAt(0);
  if (fromCodeStart <= 90 && toCodeStart >= 97) {
    return fromNodeName === toNodeName.toUpperCase();
  } else if (toCodeStart <= 90 && fromCodeStart >= 97) {
    return toNodeName === fromNodeName.toUpperCase();
  } else {
    return false;
  }
}
function createElementNS(name, namespaceURI) {
  return !namespaceURI || namespaceURI === NS_XHTML ? doc.createElement(name) : doc.createElementNS(namespaceURI, name);
}
function moveChildren(fromEl, toEl) {
  var curChild = fromEl.firstChild;
  while (curChild) {
    var nextChild = curChild.nextSibling;
    toEl.appendChild(curChild);
    curChild = nextChild;
  }
  return toEl;
}
function syncBooleanAttrProp(fromEl, toEl, name) {
  if (fromEl[name] !== toEl[name]) {
    fromEl[name] = toEl[name];
    if (fromEl[name]) {
      fromEl.setAttribute(name, "");
    } else {
      fromEl.removeAttribute(name);
    }
  }
}
var specialElHandlers = {
  OPTION: function(fromEl, toEl) {
    var parentNode = fromEl.parentNode;
    if (parentNode) {
      var parentName = parentNode.nodeName.toUpperCase();
      if (parentName === "OPTGROUP") {
        parentNode = parentNode.parentNode;
        parentName = parentNode && parentNode.nodeName.toUpperCase();
      }
      if (parentName === "SELECT" && !parentNode.hasAttribute("multiple")) {
        if (fromEl.hasAttribute("selected") && !toEl.selected) {
          fromEl.setAttribute("selected", "selected");
          fromEl.removeAttribute("selected");
        }
        parentNode.selectedIndex = -1;
      }
    }
    syncBooleanAttrProp(fromEl, toEl, "selected");
  },
  INPUT: function(fromEl, toEl) {
    syncBooleanAttrProp(fromEl, toEl, "checked");
    syncBooleanAttrProp(fromEl, toEl, "disabled");
    if (fromEl.value !== toEl.value) {
      fromEl.value = toEl.value;
    }
    if (!toEl.hasAttribute("value")) {
      fromEl.removeAttribute("value");
    }
  },
  TEXTAREA: function(fromEl, toEl) {
    var newValue = toEl.value;
    if (fromEl.value !== newValue) {
      fromEl.value = newValue;
    }
    var firstChild = fromEl.firstChild;
    if (firstChild) {
      var oldValue = firstChild.nodeValue;
      if (oldValue == newValue || !newValue && oldValue == fromEl.placeholder) {
        return;
      }
      firstChild.nodeValue = newValue;
    }
  },
  SELECT: function(fromEl, toEl) {
    if (!toEl.hasAttribute("multiple")) {
      var selectedIndex = -1;
      var i = 0;
      var curChild = fromEl.firstChild;
      var optgroup;
      var nodeName;
      while (curChild) {
        nodeName = curChild.nodeName && curChild.nodeName.toUpperCase();
        if (nodeName === "OPTGROUP") {
          optgroup = curChild;
          curChild = optgroup.firstChild;
        } else {
          if (nodeName === "OPTION") {
            if (curChild.hasAttribute("selected")) {
              selectedIndex = i;
              break;
            }
            i++;
          }
          curChild = curChild.nextSibling;
          if (!curChild && optgroup) {
            curChild = optgroup.nextSibling;
            optgroup = null;
          }
        }
      }
      fromEl.selectedIndex = selectedIndex;
    }
  }
};
var ELEMENT_NODE = 1;
var DOCUMENT_FRAGMENT_NODE$1 = 11;
var TEXT_NODE = 3;
var COMMENT_NODE = 8;
function noop() {
}
function defaultGetNodeKey(node) {
  if (node) {
    return node.getAttribute && node.getAttribute("id") || node.id;
  }
}
function morphdomFactory(morphAttrs2) {
  return function morphdom2(fromNode, toNode, options) {
    if (!options) {
      options = {};
    }
    if (typeof toNode === "string") {
      if (fromNode.nodeName === "#document" || fromNode.nodeName === "HTML" || fromNode.nodeName === "BODY") {
        var toNodeHtml = toNode;
        toNode = doc.createElement("html");
        toNode.innerHTML = toNodeHtml;
      } else {
        toNode = toElement(toNode);
      }
    }
    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
    var onNodeAdded = options.onNodeAdded || noop;
    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
    var onElUpdated = options.onElUpdated || noop;
    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
    var onNodeDiscarded = options.onNodeDiscarded || noop;
    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
    var childrenOnly = options.childrenOnly === true;
    var fromNodesLookup = /* @__PURE__ */ Object.create(null);
    var keyedRemovalList = [];
    function addKeyedRemoval(key) {
      keyedRemovalList.push(key);
    }
    function walkDiscardedChildNodes(node, skipKeyedNodes) {
      if (node.nodeType === ELEMENT_NODE) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = void 0;
          if (skipKeyedNodes && (key = getNodeKey(curChild))) {
            addKeyedRemoval(key);
          } else {
            onNodeDiscarded(curChild);
            if (curChild.firstChild) {
              walkDiscardedChildNodes(curChild, skipKeyedNodes);
            }
          }
          curChild = curChild.nextSibling;
        }
      }
    }
    function removeNode(node, parentNode, skipKeyedNodes) {
      if (onBeforeNodeDiscarded(node) === false) {
        return;
      }
      if (parentNode) {
        parentNode.removeChild(node);
      }
      onNodeDiscarded(node);
      walkDiscardedChildNodes(node, skipKeyedNodes);
    }
    function indexTree(node) {
      if (node.nodeType === ELEMENT_NODE || node.nodeType === DOCUMENT_FRAGMENT_NODE$1) {
        var curChild = node.firstChild;
        while (curChild) {
          var key = getNodeKey(curChild);
          if (key) {
            fromNodesLookup[key] = curChild;
          }
          indexTree(curChild);
          curChild = curChild.nextSibling;
        }
      }
    }
    indexTree(fromNode);
    function handleNodeAdded(el) {
      onNodeAdded(el);
      var curChild = el.firstChild;
      while (curChild) {
        var nextSibling = curChild.nextSibling;
        var key = getNodeKey(curChild);
        if (key) {
          var unmatchedFromEl = fromNodesLookup[key];
          if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
            curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
            morphEl(unmatchedFromEl, curChild);
          } else {
            handleNodeAdded(curChild);
          }
        } else {
          handleNodeAdded(curChild);
        }
        curChild = nextSibling;
      }
    }
    function cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey) {
      while (curFromNodeChild) {
        var fromNextSibling = curFromNodeChild.nextSibling;
        if (curFromNodeKey = getNodeKey(curFromNodeChild)) {
          addKeyedRemoval(curFromNodeKey);
        } else {
          removeNode(curFromNodeChild, fromEl, true);
        }
        curFromNodeChild = fromNextSibling;
      }
    }
    function morphEl(fromEl, toEl, childrenOnly2) {
      var toElKey = getNodeKey(toEl);
      if (toElKey) {
        delete fromNodesLookup[toElKey];
      }
      if (!childrenOnly2) {
        if (onBeforeElUpdated(fromEl, toEl) === false) {
          return;
        }
        morphAttrs2(fromEl, toEl);
        onElUpdated(fromEl);
        if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
          return;
        }
      }
      if (fromEl.nodeName !== "TEXTAREA") {
        morphChildren(fromEl, toEl);
      } else {
        specialElHandlers.TEXTAREA(fromEl, toEl);
      }
    }
    function morphChildren(fromEl, toEl) {
      var curToNodeChild = toEl.firstChild;
      var curFromNodeChild = fromEl.firstChild;
      var curToNodeKey;
      var curFromNodeKey;
      var fromNextSibling;
      var toNextSibling;
      var matchingFromEl;
      outer:
        while (curToNodeChild) {
          toNextSibling = curToNodeChild.nextSibling;
          curToNodeKey = getNodeKey(curToNodeChild);
          while (curFromNodeChild) {
            fromNextSibling = curFromNodeChild.nextSibling;
            if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
              curToNodeChild = toNextSibling;
              curFromNodeChild = fromNextSibling;
              continue outer;
            }
            curFromNodeKey = getNodeKey(curFromNodeChild);
            var curFromNodeType = curFromNodeChild.nodeType;
            var isCompatible = void 0;
            if (curFromNodeType === curToNodeChild.nodeType) {
              if (curFromNodeType === ELEMENT_NODE) {
                if (curToNodeKey) {
                  if (curToNodeKey !== curFromNodeKey) {
                    if (matchingFromEl = fromNodesLookup[curToNodeKey]) {
                      if (fromNextSibling === matchingFromEl) {
                        isCompatible = false;
                      } else {
                        fromEl.insertBefore(matchingFromEl, curFromNodeChild);
                        if (curFromNodeKey) {
                          addKeyedRemoval(curFromNodeKey);
                        } else {
                          removeNode(curFromNodeChild, fromEl, true);
                        }
                        curFromNodeChild = matchingFromEl;
                      }
                    } else {
                      isCompatible = false;
                    }
                  }
                } else if (curFromNodeKey) {
                  isCompatible = false;
                }
                isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
                if (isCompatible) {
                  morphEl(curFromNodeChild, curToNodeChild);
                }
              } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
                isCompatible = true;
                if (curFromNodeChild.nodeValue !== curToNodeChild.nodeValue) {
                  curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
                }
              }
            }
            if (isCompatible) {
              curToNodeChild = toNextSibling;
              curFromNodeChild = fromNextSibling;
              continue outer;
            }
            if (curFromNodeKey) {
              addKeyedRemoval(curFromNodeKey);
            } else {
              removeNode(curFromNodeChild, fromEl, true);
            }
            curFromNodeChild = fromNextSibling;
          }
          if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
            fromEl.appendChild(matchingFromEl);
            morphEl(matchingFromEl, curToNodeChild);
          } else {
            var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
            if (onBeforeNodeAddedResult !== false) {
              if (onBeforeNodeAddedResult) {
                curToNodeChild = onBeforeNodeAddedResult;
              }
              if (curToNodeChild.actualize) {
                curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
              }
              fromEl.appendChild(curToNodeChild);
              handleNodeAdded(curToNodeChild);
            }
          }
          curToNodeChild = toNextSibling;
          curFromNodeChild = fromNextSibling;
        }
      cleanupFromEl(fromEl, curFromNodeChild, curFromNodeKey);
      var specialElHandler = specialElHandlers[fromEl.nodeName];
      if (specialElHandler) {
        specialElHandler(fromEl, toEl);
      }
    }
    var morphedNode = fromNode;
    var morphedNodeType = morphedNode.nodeType;
    var toNodeType = toNode.nodeType;
    if (!childrenOnly) {
      if (morphedNodeType === ELEMENT_NODE) {
        if (toNodeType === ELEMENT_NODE) {
          if (!compareNodeNames(fromNode, toNode)) {
            onNodeDiscarded(fromNode);
            morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
          }
        } else {
          morphedNode = toNode;
        }
      } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) {
        if (toNodeType === morphedNodeType) {
          if (morphedNode.nodeValue !== toNode.nodeValue) {
            morphedNode.nodeValue = toNode.nodeValue;
          }
          return morphedNode;
        } else {
          morphedNode = toNode;
        }
      }
    }
    if (morphedNode === toNode) {
      onNodeDiscarded(fromNode);
    } else {
      if (toNode.isSameNode && toNode.isSameNode(morphedNode)) {
        return;
      }
      morphEl(morphedNode, toNode, childrenOnly);
      if (keyedRemovalList) {
        for (var i = 0, len = keyedRemovalList.length; i < len; i++) {
          var elToRemove = fromNodesLookup[keyedRemovalList[i]];
          if (elToRemove) {
            removeNode(elToRemove, elToRemove.parentNode, false);
          }
        }
      }
    }
    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
      if (morphedNode.actualize) {
        morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
      }
      fromNode.parentNode.replaceChild(morphedNode, fromNode);
    }
    return morphedNode;
  };
}
var morphdom = morphdomFactory(morphAttrs);
var morphdom_esm_default = morphdom;
var DOMPatch = class {
  static patchEl(fromEl, toEl, activeElement) {
    morphdom_esm_default(fromEl, toEl, {
      childrenOnly: false,
      onBeforeElUpdated: (fromEl2, toEl2) => {
        if (activeElement && activeElement.isSameNode(fromEl2) && dom_default.isFormInput(fromEl2)) {
          dom_default.mergeFocusedInput(fromEl2, toEl2);
          return false;
        }
      }
    });
  }
  constructor(view, container, id, html, targetCID) {
    this.view = view;
    this.liveSocket = view.liveSocket;
    this.container = container;
    this.id = id;
    this.rootID = view.root.id;
    this.html = html;
    this.targetCID = targetCID;
    this.cidPatch = isCid(this.targetCID);
    this.callbacks = {
      beforeadded: [],
      beforeupdated: [],
      beforephxChildAdded: [],
      afteradded: [],
      afterupdated: [],
      afterdiscarded: [],
      afterphxChildAdded: [],
      aftertransitionsDiscarded: []
    };
  }
  before(kind, callback) {
    this.callbacks[`before${kind}`].push(callback);
  }
  after(kind, callback) {
    this.callbacks[`after${kind}`].push(callback);
  }
  trackBefore(kind, ...args) {
    this.callbacks[`before${kind}`].forEach((callback) => callback(...args));
  }
  trackAfter(kind, ...args) {
    this.callbacks[`after${kind}`].forEach((callback) => callback(...args));
  }
  markPrunableContentForRemoval() {
    dom_default.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", (el) => {
      el.setAttribute(PHX_PRUNE, "");
    });
  }
  perform() {
    let { view, liveSocket: liveSocket2, container, html } = this;
    let targetContainer = this.isCIDPatch() ? this.targetCIDContainer(html) : container;
    if (this.isCIDPatch() && !targetContainer) {
      return;
    }
    let focused = liveSocket2.getActiveElement();
    let { selectionStart, selectionEnd } = focused && dom_default.hasSelectionRange(focused) ? focused : {};
    let phxUpdate = liveSocket2.binding(PHX_UPDATE);
    let phxFeedbackFor = liveSocket2.binding(PHX_FEEDBACK_FOR);
    let disableWith = liveSocket2.binding(PHX_DISABLE_WITH);
    let phxTriggerExternal = liveSocket2.binding(PHX_TRIGGER_ACTION);
    let phxRemove = liveSocket2.binding("remove");
    let added = [];
    let updates = [];
    let appendPrependUpdates = [];
    let pendingRemoves = [];
    let externalFormTriggered = null;
    let diffHTML = liveSocket2.time("premorph container prep", () => {
      return this.buildDiffHTML(container, html, phxUpdate, targetContainer);
    });
    this.trackBefore("added", container);
    this.trackBefore("updated", container, container);
    liveSocket2.time("morphdom", () => {
      morphdom_esm_default(targetContainer, diffHTML, {
        childrenOnly: targetContainer.getAttribute(PHX_COMPONENT) === null,
        getNodeKey: (node) => {
          return dom_default.isPhxDestroyed(node) ? null : node.id;
        },
        onBeforeNodeAdded: (el) => {
          this.trackBefore("added", el);
          return el;
        },
        onNodeAdded: (el) => {
          if (el instanceof HTMLImageElement && el.srcset) {
            el.srcset = el.srcset;
          } else if (el instanceof HTMLVideoElement && el.autoplay) {
            el.play();
          }
          if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
            externalFormTriggered = el;
          }
          dom_default.discardError(targetContainer, el, phxFeedbackFor);
          if (dom_default.isPhxChild(el) && view.ownsElement(el)) {
            this.trackAfter("phxChildAdded", el);
          }
          added.push(el);
        },
        onNodeDiscarded: (el) => {
          if (dom_default.isPhxChild(el)) {
            liveSocket2.destroyViewByEl(el);
          }
          this.trackAfter("discarded", el);
        },
        onBeforeNodeDiscarded: (el) => {
          if (el.getAttribute && el.getAttribute(PHX_PRUNE) !== null) {
            return true;
          }
          if (el.parentNode !== null && dom_default.isPhxUpdate(el.parentNode, phxUpdate, ["append", "prepend"]) && el.id) {
            return false;
          }
          if (el.getAttribute && el.getAttribute(phxRemove)) {
            pendingRemoves.push(el);
            return false;
          }
          if (this.skipCIDSibling(el)) {
            return false;
          }
          return true;
        },
        onElUpdated: (el) => {
          if (dom_default.isNowTriggerFormExternal(el, phxTriggerExternal)) {
            externalFormTriggered = el;
          }
          updates.push(el);
        },
        onBeforeElUpdated: (fromEl, toEl) => {
          dom_default.cleanChildNodes(toEl, phxUpdate);
          if (this.skipCIDSibling(toEl)) {
            return false;
          }
          if (dom_default.isIgnored(fromEl, phxUpdate)) {
            this.trackBefore("updated", fromEl, toEl);
            dom_default.mergeAttrs(fromEl, toEl, { isIgnored: true });
            updates.push(fromEl);
            dom_default.applyStickyOperations(fromEl);
            return false;
          }
          if (fromEl.type === "number" && (fromEl.validity && fromEl.validity.badInput)) {
            return false;
          }
          if (!dom_default.syncPendingRef(fromEl, toEl, disableWith)) {
            if (dom_default.isUploadInput(fromEl)) {
              this.trackBefore("updated", fromEl, toEl);
              updates.push(fromEl);
            }
            dom_default.applyStickyOperations(fromEl);
            return false;
          }
          if (dom_default.isPhxChild(toEl)) {
            let prevSession = fromEl.getAttribute(PHX_SESSION);
            dom_default.mergeAttrs(fromEl, toEl, { exclude: [PHX_STATIC] });
            if (prevSession !== "") {
              fromEl.setAttribute(PHX_SESSION, prevSession);
            }
            fromEl.setAttribute(PHX_ROOT_ID, this.rootID);
            dom_default.applyStickyOperations(fromEl);
            return false;
          }
          dom_default.copyPrivates(toEl, fromEl);
          dom_default.discardError(targetContainer, toEl, phxFeedbackFor);
          let isFocusedFormEl = focused && fromEl.isSameNode(focused) && dom_default.isFormInput(fromEl);
          if (isFocusedFormEl) {
            this.trackBefore("updated", fromEl, toEl);
            dom_default.mergeFocusedInput(fromEl, toEl);
            dom_default.syncAttrsToProps(fromEl);
            updates.push(fromEl);
            dom_default.applyStickyOperations(fromEl);
            return false;
          } else {
            if (dom_default.isPhxUpdate(toEl, phxUpdate, ["append", "prepend"])) {
              appendPrependUpdates.push(new DOMPostMorphRestorer(fromEl, toEl, toEl.getAttribute(phxUpdate)));
            }
            dom_default.syncAttrsToProps(toEl);
            dom_default.applyStickyOperations(toEl);
            this.trackBefore("updated", fromEl, toEl);
            return true;
          }
        }
      });
    });
    if (liveSocket2.isDebugEnabled()) {
      detectDuplicateIds();
    }
    if (appendPrependUpdates.length > 0) {
      liveSocket2.time("post-morph append/prepend restoration", () => {
        appendPrependUpdates.forEach((update) => update.perform());
      });
    }
    liveSocket2.silenceEvents(() => dom_default.restoreFocus(focused, selectionStart, selectionEnd));
    dom_default.dispatchEvent(document, "phx:update");
    added.forEach((el) => this.trackAfter("added", el));
    updates.forEach((el) => this.trackAfter("updated", el));
    if (pendingRemoves.length > 0) {
      liveSocket2.transitionRemoves(pendingRemoves);
      liveSocket2.requestDOMUpdate(() => {
        pendingRemoves.forEach((el) => {
          let child = dom_default.firstPhxChild(el);
          if (child) {
            liveSocket2.destroyViewByEl(child);
          }
          el.remove();
        });
        this.trackAfter("transitionsDiscarded", pendingRemoves);
      });
    }
    if (externalFormTriggered) {
      liveSocket2.disconnect();
      externalFormTriggered.submit();
    }
    return true;
  }
  isCIDPatch() {
    return this.cidPatch;
  }
  skipCIDSibling(el) {
    return el.nodeType === Node.ELEMENT_NODE && el.getAttribute(PHX_SKIP) !== null;
  }
  targetCIDContainer(html) {
    if (!this.isCIDPatch()) {
      return;
    }
    let [first, ...rest] = dom_default.findComponentNodeList(this.container, this.targetCID);
    if (rest.length === 0 && dom_default.childNodeLength(html) === 1) {
      return first;
    } else {
      return first && first.parentNode;
    }
  }
  buildDiffHTML(container, html, phxUpdate, targetContainer) {
    let isCIDPatch = this.isCIDPatch();
    let isCIDWithSingleRoot = isCIDPatch && targetContainer.getAttribute(PHX_COMPONENT) === this.targetCID.toString();
    if (!isCIDPatch || isCIDWithSingleRoot) {
      return html;
    } else {
      let diffContainer = null;
      let template = document.createElement("template");
      diffContainer = dom_default.cloneNode(targetContainer);
      let [firstComponent, ...rest] = dom_default.findComponentNodeList(diffContainer, this.targetCID);
      template.innerHTML = html;
      rest.forEach((el) => el.remove());
      Array.from(diffContainer.childNodes).forEach((child) => {
        if (child.id && child.nodeType === Node.ELEMENT_NODE && child.getAttribute(PHX_COMPONENT) !== this.targetCID.toString()) {
          child.setAttribute(PHX_SKIP, "");
          child.innerHTML = "";
        }
      });
      Array.from(template.content.childNodes).forEach((el) => diffContainer.insertBefore(el, firstComponent));
      firstComponent.remove();
      return diffContainer.outerHTML;
    }
  }
};
var Rendered = class {
  static extract(diff) {
    let { [REPLY]: reply, [EVENTS]: events, [TITLE]: title } = diff;
    delete diff[REPLY];
    delete diff[EVENTS];
    delete diff[TITLE];
    return { diff, title, reply: reply || null, events: events || [] };
  }
  constructor(viewId, rendered) {
    this.viewId = viewId;
    this.rendered = {};
    this.mergeDiff(rendered);
  }
  parentViewId() {
    return this.viewId;
  }
  toString(onlyCids) {
    return this.recursiveToString(this.rendered, this.rendered[COMPONENTS], onlyCids);
  }
  recursiveToString(rendered, components = rendered[COMPONENTS], onlyCids) {
    onlyCids = onlyCids ? new Set(onlyCids) : null;
    let output = { buffer: "", components, onlyCids };
    this.toOutputBuffer(rendered, null, output);
    return output.buffer;
  }
  componentCIDs(diff) {
    return Object.keys(diff[COMPONENTS] || {}).map((i) => parseInt(i));
  }
  isComponentOnlyDiff(diff) {
    if (!diff[COMPONENTS]) {
      return false;
    }
    return Object.keys(diff).length === 1;
  }
  getComponent(diff, cid) {
    return diff[COMPONENTS][cid];
  }
  mergeDiff(diff) {
    let newc = diff[COMPONENTS];
    let cache = {};
    delete diff[COMPONENTS];
    this.rendered = this.mutableMerge(this.rendered, diff);
    this.rendered[COMPONENTS] = this.rendered[COMPONENTS] || {};
    if (newc) {
      let oldc = this.rendered[COMPONENTS];
      for (let cid in newc) {
        newc[cid] = this.cachedFindComponent(cid, newc[cid], oldc, newc, cache);
      }
      for (let cid in newc) {
        oldc[cid] = newc[cid];
      }
      diff[COMPONENTS] = newc;
    }
  }
  cachedFindComponent(cid, cdiff, oldc, newc, cache) {
    if (cache[cid]) {
      return cache[cid];
    } else {
      let ndiff, stat, scid = cdiff[STATIC];
      if (isCid(scid)) {
        let tdiff;
        if (scid > 0) {
          tdiff = this.cachedFindComponent(scid, newc[scid], oldc, newc, cache);
        } else {
          tdiff = oldc[-scid];
        }
        stat = tdiff[STATIC];
        ndiff = this.cloneMerge(tdiff, cdiff);
        ndiff[STATIC] = stat;
      } else {
        ndiff = cdiff[STATIC] !== void 0 ? cdiff : this.cloneMerge(oldc[cid] || {}, cdiff);
      }
      cache[cid] = ndiff;
      return ndiff;
    }
  }
  mutableMerge(target, source) {
    if (source[STATIC] !== void 0) {
      return source;
    } else {
      this.doMutableMerge(target, source);
      return target;
    }
  }
  doMutableMerge(target, source) {
    for (let key in source) {
      let val = source[key];
      let targetVal = target[key];
      if (isObject(val) && val[STATIC] === void 0 && isObject(targetVal)) {
        this.doMutableMerge(targetVal, val);
      } else {
        target[key] = val;
      }
    }
  }
  cloneMerge(target, source) {
    let merged = { ...target, ...source };
    for (let key in merged) {
      let val = source[key];
      let targetVal = target[key];
      if (isObject(val) && val[STATIC] === void 0 && isObject(targetVal)) {
        merged[key] = this.cloneMerge(targetVal, val);
      }
    }
    return merged;
  }
  componentToString(cid) {
    return this.recursiveCIDToString(this.rendered[COMPONENTS], cid);
  }
  pruneCIDs(cids) {
    cids.forEach((cid) => delete this.rendered[COMPONENTS][cid]);
  }
  get() {
    return this.rendered;
  }
  isNewFingerprint(diff = {}) {
    return !!diff[STATIC];
  }
  templateStatic(part, templates) {
    if (typeof part === "number") {
      return templates[part];
    } else {
      return part;
    }
  }
  toOutputBuffer(rendered, templates, output) {
    if (rendered[DYNAMICS]) {
      return this.comprehensionToBuffer(rendered, templates, output);
    }
    let { [STATIC]: statics } = rendered;
    statics = this.templateStatic(statics, templates);
    output.buffer += statics[0];
    for (let i = 1; i < statics.length; i++) {
      this.dynamicToBuffer(rendered[i - 1], templates, output);
      output.buffer += statics[i];
    }
  }
  comprehensionToBuffer(rendered, templates, output) {
    let { [DYNAMICS]: dynamics, [STATIC]: statics } = rendered;
    statics = this.templateStatic(statics, templates);
    let compTemplates = rendered[TEMPLATES];
    for (let d = 0; d < dynamics.length; d++) {
      let dynamic = dynamics[d];
      output.buffer += statics[0];
      for (let i = 1; i < statics.length; i++) {
        this.dynamicToBuffer(dynamic[i - 1], compTemplates, output);
        output.buffer += statics[i];
      }
    }
  }
  dynamicToBuffer(rendered, templates, output) {
    if (typeof rendered === "number") {
      output.buffer += this.recursiveCIDToString(output.components, rendered, output.onlyCids);
    } else if (isObject(rendered)) {
      this.toOutputBuffer(rendered, templates, output);
    } else {
      output.buffer += rendered;
    }
  }
  recursiveCIDToString(components, cid, onlyCids) {
    let component = components[cid] || logError(`no component for CID ${cid}`, components);
    let template = document.createElement("template");
    template.innerHTML = this.recursiveToString(component, components, onlyCids);
    let container = template.content;
    let skip = onlyCids && !onlyCids.has(cid);
    let [hasChildNodes, hasChildComponents] = Array.from(container.childNodes).reduce(([hasNodes, hasComponents], child, i) => {
      if (child.nodeType === Node.ELEMENT_NODE) {
        if (child.getAttribute(PHX_COMPONENT)) {
          return [hasNodes, true];
        }
        child.setAttribute(PHX_COMPONENT, cid);
        if (!child.id) {
          child.id = `${this.parentViewId()}-${cid}-${i}`;
        }
        if (skip) {
          child.setAttribute(PHX_SKIP, "");
          child.innerHTML = "";
        }
        return [true, hasComponents];
      } else {
        if (child.nodeValue.trim() !== "") {
          logError(`only HTML element tags are allowed at the root of components.

got: "${child.nodeValue.trim()}"

within:
`, template.innerHTML.trim());
          child.replaceWith(this.createSpan(child.nodeValue, cid));
          return [true, hasComponents];
        } else {
          child.remove();
          return [hasNodes, hasComponents];
        }
      }
    }, [false, false]);
    if (!hasChildNodes && !hasChildComponents) {
      logError("expected at least one HTML element tag inside a component, but the component is empty:\n", template.innerHTML.trim());
      return this.createSpan("", cid).outerHTML;
    } else if (!hasChildNodes && hasChildComponents) {
      logError("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", template.innerHTML.trim());
      return template.innerHTML;
    } else {
      return template.innerHTML;
    }
  }
  createSpan(text, cid) {
    let span = document.createElement("span");
    span.innerText = text;
    span.setAttribute(PHX_COMPONENT, cid);
    return span;
  }
};
var viewHookID = 1;
var ViewHook = class {
  static makeID() {
    return viewHookID++;
  }
  static elementID(el) {
    return el.phxHookId;
  }
  constructor(view, el, callbacks) {
    this.__view = view;
    this.__liveSocket = view.liveSocket;
    this.__callbacks = callbacks;
    this.__listeners = /* @__PURE__ */ new Set();
    this.__isDisconnected = false;
    this.el = el;
    this.el.phxHookId = this.constructor.makeID();
    for (let key in this.__callbacks) {
      this[key] = this.__callbacks[key];
    }
  }
  __mounted() {
    this.mounted && this.mounted();
  }
  __updated() {
    this.updated && this.updated();
  }
  __beforeUpdate() {
    this.beforeUpdate && this.beforeUpdate();
  }
  __destroyed() {
    this.destroyed && this.destroyed();
  }
  __reconnected() {
    if (this.__isDisconnected) {
      this.__isDisconnected = false;
      this.reconnected && this.reconnected();
    }
  }
  __disconnected() {
    this.__isDisconnected = true;
    this.disconnected && this.disconnected();
  }
  pushEvent(event, payload = {}, onReply = function() {
  }) {
    return this.__view.pushHookEvent(null, event, payload, onReply);
  }
  pushEventTo(phxTarget, event, payload = {}, onReply = function() {
  }) {
    return this.__view.withinTargets(phxTarget, (view, targetCtx) => {
      return view.pushHookEvent(targetCtx, event, payload, onReply);
    });
  }
  handleEvent(event, callback) {
    let callbackRef = (customEvent, bypass) => bypass ? event : callback(customEvent.detail);
    window.addEventListener(`phx:${event}`, callbackRef);
    this.__listeners.add(callbackRef);
    return callbackRef;
  }
  removeHandleEvent(callbackRef) {
    let event = callbackRef(null, true);
    window.removeEventListener(`phx:${event}`, callbackRef);
    this.__listeners.delete(callbackRef);
  }
  upload(name, files) {
    return this.__view.dispatchUploads(name, files);
  }
  uploadTo(phxTarget, name, files) {
    return this.__view.withinTargets(phxTarget, (view) => view.dispatchUploads(name, files));
  }
  __cleanup__() {
    this.__listeners.forEach((callbackRef) => this.removeHandleEvent(callbackRef));
  }
};
var JS = {
  exec(eventType, phxEvent, view, el, defaults) {
    let [defaultKind, defaultArgs] = defaults || [null, {}];
    let commands = phxEvent.charAt(0) === "[" ? JSON.parse(phxEvent) : [[defaultKind, defaultArgs]];
    commands.forEach(([kind, args]) => {
      if (kind === defaultKind && defaultArgs.data) {
        args.data = Object.assign(args.data || {}, defaultArgs.data);
      }
      this[`exec_${kind}`](eventType, phxEvent, view, el, args);
    });
  },
  isVisible(el) {
    let style = window.getComputedStyle(el);
    return !(style.opacity === 0 || style.display === "none");
  },
  exec_dispatch(eventType, phxEvent, view, sourceEl, { to, event, detail }) {
    if (to) {
      dom_default.all(document, to, (el) => dom_default.dispatchEvent(el, event, detail));
    } else {
      dom_default.dispatchEvent(sourceEl, event, detail);
    }
  },
  exec_push(eventType, phxEvent, view, sourceEl, args) {
    let { event, data: data2, target, page_loading, loading, value } = args;
    let pushOpts = { page_loading: !!page_loading, loading, value };
    let targetSrc = eventType === "change" ? sourceEl.form : sourceEl;
    let phxTarget = target || targetSrc.getAttribute(view.binding("target")) || targetSrc;
    view.withinTargets(phxTarget, (targetView, targetCtx) => {
      if (eventType === "change") {
        let { newCid, _target, callback } = args;
        if (_target) {
          pushOpts._target = _target;
        }
        targetView.pushInput(sourceEl, targetCtx, newCid, event || phxEvent, pushOpts, callback);
      } else if (eventType === "submit") {
        targetView.submitForm(sourceEl, targetCtx, event || phxEvent, pushOpts);
      } else {
        targetView.pushEvent(eventType, sourceEl, targetCtx, event || phxEvent, data2, pushOpts);
      }
    });
  },
  exec_add_class(eventType, phxEvent, view, sourceEl, { to, names, transition: transition2, time }) {
    if (to) {
      dom_default.all(document, to, (el) => this.addOrRemoveClasses(el, names, [], transition2, time, view));
    } else {
      this.addOrRemoveClasses(sourceEl, names, [], transition2, view);
    }
  },
  exec_remove_class(eventType, phxEvent, view, sourceEl, { to, names, transition: transition2, time }) {
    if (to) {
      dom_default.all(document, to, (el) => this.addOrRemoveClasses(el, [], names, transition2, time, view));
    } else {
      this.addOrRemoveClasses(sourceEl, [], names, transition2, time, view);
    }
  },
  exec_transition(eventType, phxEvent, view, sourceEl, { time, to, transition: transition2 }) {
    let els = to ? dom_default.all(document, to) : [sourceEl];
    let [transition_start, running, transition_end] = transition2;
    els.forEach((el) => {
      let onStart = () => this.addOrRemoveClasses(el, transition_start.concat(running), []);
      let onDone = () => this.addOrRemoveClasses(el, transition_end, transition_start.concat(running));
      view.transition(time, onStart, onDone);
    });
  },
  exec_toggle(eventType, phxEvent, view, sourceEl, { to, display, ins, outs, time }) {
    if (to) {
      dom_default.all(document, to, (el) => this.toggle(eventType, view, el, display, ins, outs, time));
    } else {
      this.toggle(eventType, view, sourceEl, display, ins, outs, time);
    }
  },
  exec_show(eventType, phxEvent, view, sourceEl, { to, display, transition: transition2, time }) {
    if (to) {
      dom_default.all(document, to, (el) => this.show(eventType, view, el, display, transition2, time));
    } else {
      this.show(eventType, view, sourceEl, transition2, time);
    }
  },
  exec_hide(eventType, phxEvent, view, sourceEl, { to, display, transition: transition2, time }) {
    if (to) {
      dom_default.all(document, to, (el) => this.hide(eventType, view, el, display, transition2, time));
    } else {
      this.hide(eventType, view, sourceEl, display, transition2, time);
    }
  },
  show(eventType, view, el, display, transition2, time) {
    if (!this.isVisible(el)) {
      this.toggle(eventType, view, el, display, transition2, null, time);
    }
  },
  hide(eventType, view, el, display, transition2, time) {
    if (this.isVisible(el)) {
      this.toggle(eventType, view, el, display, null, transition2, time);
    }
  },
  toggle(eventType, view, el, display, ins, outs, time) {
    let [inClasses, inStartClasses, inEndClasses] = ins || [[], [], []];
    let [outClasses, outStartClasses, outEndClasses] = outs || [[], [], []];
    if (inClasses.length > 0 || outClasses.length > 0) {
      if (this.isVisible(el)) {
        let onStart = () => {
          this.addOrRemoveClasses(el, outStartClasses, inClasses.concat(inStartClasses).concat(inEndClasses));
          window.requestAnimationFrame(() => {
            this.addOrRemoveClasses(el, outClasses, []);
            window.requestAnimationFrame(() => this.addOrRemoveClasses(el, outEndClasses, outStartClasses));
          });
        };
        view.transition(time, onStart, () => {
          this.addOrRemoveClasses(el, [], outClasses.concat(outEndClasses));
          dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = "none");
        });
      } else {
        if (eventType === "remove") {
          return;
        }
        let onStart = () => {
          this.addOrRemoveClasses(el, inStartClasses, outClasses.concat(outStartClasses).concat(outEndClasses));
          dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = display || "block");
          window.requestAnimationFrame(() => {
            this.addOrRemoveClasses(el, inClasses, []);
            window.requestAnimationFrame(() => this.addOrRemoveClasses(el, inEndClasses, inStartClasses));
          });
        };
        view.transition(time, onStart, () => {
          this.addOrRemoveClasses(el, [], inClasses.concat(inEndClasses));
        });
      }
    } else {
      let newDisplay = this.isVisible(el) ? "none" : display || "block";
      dom_default.putSticky(el, "toggle", (currentEl) => currentEl.style.display = newDisplay);
    }
  },
  addOrRemoveClasses(el, adds, removes, transition2, time, view) {
    let [transition_run, transition_start, transition_end] = transition2 || [[], [], []];
    if (transition_run.length > 0) {
      let onStart = () => this.addOrRemoveClasses(el, transition_start.concat(transition_run), []);
      let onDone = () => this.addOrRemoveClasses(el, adds.concat(transition_end), removes.concat(transition_run).concat(transition_start));
      return view.transition(time, onStart, onDone);
    }
    window.requestAnimationFrame(() => {
      let [prevAdds, prevRemoves] = dom_default.getSticky(el, "classes", [[], []]);
      let keepAdds = adds.filter((name) => prevAdds.indexOf(name) < 0 && !el.classList.contains(name));
      let keepRemoves = removes.filter((name) => prevRemoves.indexOf(name) < 0 && el.classList.contains(name));
      let newAdds = prevAdds.filter((name) => removes.indexOf(name) < 0).concat(keepAdds);
      let newRemoves = prevRemoves.filter((name) => adds.indexOf(name) < 0).concat(keepRemoves);
      dom_default.putSticky(el, "classes", (currentEl) => {
        currentEl.classList.remove(...newRemoves);
        currentEl.classList.add(...newAdds);
        return [newAdds, newRemoves];
      });
    });
  },
  hasAllClasses(el, classes) {
    return classes.every((name) => el.classList.contains(name));
  },
  isToggledOut(el, outClasses) {
    return !this.isVisible(el) || this.hasAllClasses(el, outClasses);
  }
};
var js_default = JS;
var serializeForm = (form, meta = {}) => {
  let formData = new FormData(form);
  let toRemove = [];
  formData.forEach((val, key, _index) => {
    if (val instanceof File) {
      toRemove.push(key);
    }
  });
  toRemove.forEach((key) => formData.delete(key));
  let params = new URLSearchParams();
  for (let [key, val] of formData.entries()) {
    params.append(key, val);
  }
  for (let metaKey in meta) {
    params.append(metaKey, meta[metaKey]);
  }
  return params.toString();
};
var View = class {
  constructor(el, liveSocket2, parentView, flash) {
    this.liveSocket = liveSocket2;
    this.flash = flash;
    this.parent = parentView;
    this.root = parentView ? parentView.root : this;
    this.el = el;
    this.id = this.el.id;
    this.ref = 0;
    this.childJoins = 0;
    this.loaderTimer = null;
    this.pendingDiffs = [];
    this.pruningCIDs = [];
    this.redirect = false;
    this.href = null;
    this.joinCount = this.parent ? this.parent.joinCount - 1 : 0;
    this.joinPending = true;
    this.destroyed = false;
    this.joinCallback = function(onDone) {
      onDone && onDone();
    };
    this.stopCallback = function() {
    };
    this.pendingJoinOps = this.parent ? null : [];
    this.viewHooks = {};
    this.uploaders = {};
    this.formSubmits = [];
    this.children = this.parent ? null : {};
    this.root.children[this.id] = {};
    this.channel = this.liveSocket.channel(`lv:${this.id}`, () => {
      return {
        redirect: this.redirect ? this.href : void 0,
        url: this.redirect ? void 0 : this.href || void 0,
        params: this.connectParams(),
        session: this.getSession(),
        static: this.getStatic(),
        flash: this.flash
      };
    });
    this.showLoader(this.liveSocket.loaderTimeout);
    this.bindChannel();
  }
  setHref(href) {
    this.href = href;
  }
  setRedirect(href) {
    this.redirect = true;
    this.href = href;
  }
  isMain() {
    return this.liveSocket.main === this;
  }
  connectParams() {
    let params = this.liveSocket.params(this.el);
    let manifest = dom_default.all(document, `[${this.binding(PHX_TRACK_STATIC)}]`).map((node) => node.src || node.href).filter((url) => typeof url === "string");
    if (manifest.length > 0) {
      params["_track_static"] = manifest;
    }
    params["_mounts"] = this.joinCount;
    return params;
  }
  isConnected() {
    return this.channel.canPush();
  }
  getSession() {
    return this.el.getAttribute(PHX_SESSION);
  }
  getStatic() {
    let val = this.el.getAttribute(PHX_STATIC);
    return val === "" ? null : val;
  }
  destroy(callback = function() {
  }) {
    this.destroyAllChildren();
    this.destroyed = true;
    delete this.root.children[this.id];
    if (this.parent) {
      delete this.root.children[this.parent.id][this.id];
    }
    clearTimeout(this.loaderTimer);
    let onFinished = () => {
      callback();
      for (let id in this.viewHooks) {
        this.destroyHook(this.viewHooks[id]);
      }
    };
    dom_default.markPhxChildDestroyed(this.el);
    this.log("destroyed", () => ["the child has been removed from the parent"]);
    this.channel.leave().receive("ok", onFinished).receive("error", onFinished).receive("timeout", onFinished);
  }
  setContainerClasses(...classes) {
    this.el.classList.remove(PHX_CONNECTED_CLASS, PHX_DISCONNECTED_CLASS, PHX_ERROR_CLASS);
    this.el.classList.add(...classes);
  }
  showLoader(timeout) {
    clearTimeout(this.loaderTimer);
    if (timeout) {
      this.loaderTimer = setTimeout(() => this.showLoader(), timeout);
    } else {
      for (let id in this.viewHooks) {
        this.viewHooks[id].__disconnected();
      }
      this.setContainerClasses(PHX_DISCONNECTED_CLASS);
    }
  }
  hideLoader() {
    clearTimeout(this.loaderTimer);
    this.setContainerClasses(PHX_CONNECTED_CLASS);
  }
  triggerReconnected() {
    for (let id in this.viewHooks) {
      this.viewHooks[id].__reconnected();
    }
  }
  log(kind, msgCallback) {
    this.liveSocket.log(this, kind, msgCallback);
  }
  transition(time, onStart, onDone = function() {
  }) {
    this.liveSocket.transition(time, onStart, onDone);
  }
  withinTargets(phxTarget, callback) {
    if (phxTarget instanceof HTMLElement || phxTarget instanceof SVGElement) {
      return this.liveSocket.owner(phxTarget, (view) => callback(view, phxTarget));
    }
    if (isCid(phxTarget)) {
      let targets = dom_default.findComponentNodeList(this.el, phxTarget);
      if (targets.length === 0) {
        logError(`no component found matching phx-target of ${phxTarget}`);
      } else {
        callback(this, parseInt(phxTarget));
      }
    } else {
      let targets = Array.from(document.querySelectorAll(phxTarget));
      if (targets.length === 0) {
        logError(`nothing found matching the phx-target selector "${phxTarget}"`);
      }
      targets.forEach((target) => this.liveSocket.owner(target, (view) => callback(view, target)));
    }
  }
  applyDiff(type, rawDiff, callback) {
    this.log(type, () => ["", clone(rawDiff)]);
    let { diff, reply, events, title } = Rendered.extract(rawDiff);
    if (title) {
      dom_default.putTitle(title);
    }
    callback({ diff, reply, events });
    return reply;
  }
  onJoin(resp) {
    let { rendered, container } = resp;
    if (container) {
      let [tag, attrs] = container;
      this.el = dom_default.replaceRootContainer(this.el, tag, attrs);
    }
    this.childJoins = 0;
    this.joinPending = true;
    this.flash = null;
    browser_default.dropLocal(this.liveSocket.localStorage, window.location.pathname, CONSECUTIVE_RELOADS);
    this.applyDiff("mount", rendered, ({ diff, events }) => {
      this.rendered = new Rendered(this.id, diff);
      let html = this.renderContainer(null, "join");
      this.dropPendingRefs();
      let forms = this.formsForRecovery(html);
      this.joinCount++;
      if (forms.length > 0) {
        forms.forEach(([form, newForm, newCid], i) => {
          this.pushFormRecovery(form, newCid, (resp2) => {
            if (i === forms.length - 1) {
              this.onJoinComplete(resp2, html, events);
            }
          });
        });
      } else {
        this.onJoinComplete(resp, html, events);
      }
    });
  }
  dropPendingRefs() {
    dom_default.all(this.el, `[${PHX_REF}]`, (el) => el.removeAttribute(PHX_REF));
  }
  onJoinComplete({ live_patch }, html, events) {
    if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending()) {
      return this.applyJoinPatch(live_patch, html, events);
    }
    let newChildren = dom_default.findPhxChildrenInFragment(html, this.id).filter((toEl) => {
      let fromEl = toEl.id && this.el.querySelector(`[id="${toEl.id}"]`);
      let phxStatic = fromEl && fromEl.getAttribute(PHX_STATIC);
      if (phxStatic) {
        toEl.setAttribute(PHX_STATIC, phxStatic);
      }
      return this.joinChild(toEl);
    });
    if (newChildren.length === 0) {
      if (this.parent) {
        this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, events)]);
        this.parent.ackJoin(this);
      } else {
        this.onAllChildJoinsComplete();
        this.applyJoinPatch(live_patch, html, events);
      }
    } else {
      this.root.pendingJoinOps.push([this, () => this.applyJoinPatch(live_patch, html, events)]);
    }
  }
  attachTrueDocEl() {
    this.el = dom_default.byId(this.id);
    this.el.setAttribute(PHX_ROOT_ID, this.root.id);
  }
  applyJoinPatch(live_patch, html, events) {
    this.attachTrueDocEl();
    let patch = new DOMPatch(this, this.el, this.id, html, null);
    patch.markPrunableContentForRemoval();
    this.performPatch(patch, false);
    this.joinNewChildren();
    dom_default.all(this.el, `[${this.binding(PHX_HOOK)}], [data-phx-${PHX_HOOK}]`, (hookEl) => {
      let hook = this.addHook(hookEl);
      if (hook) {
        hook.__mounted();
      }
    });
    this.joinPending = false;
    this.liveSocket.dispatchEvents(events);
    this.applyPendingUpdates();
    if (live_patch) {
      let { kind, to } = live_patch;
      this.liveSocket.historyPatch(to, kind);
    }
    this.hideLoader();
    if (this.joinCount > 1) {
      this.triggerReconnected();
    }
    this.stopCallback();
  }
  triggerBeforeUpdateHook(fromEl, toEl) {
    this.liveSocket.triggerDOM("onBeforeElUpdated", [fromEl, toEl]);
    let hook = this.getHook(fromEl);
    let isIgnored = hook && dom_default.isIgnored(fromEl, this.binding(PHX_UPDATE));
    if (hook && !fromEl.isEqualNode(toEl) && !(isIgnored && isEqualObj(fromEl.dataset, toEl.dataset))) {
      hook.__beforeUpdate();
      return hook;
    }
  }
  performPatch(patch, pruneCids) {
    let removedEls = [];
    let phxChildrenAdded = false;
    let updatedHookIds = /* @__PURE__ */ new Set();
    patch.after("added", (el) => {
      this.liveSocket.triggerDOM("onNodeAdded", [el]);
      let newHook = this.addHook(el);
      if (newHook) {
        newHook.__mounted();
      }
    });
    patch.after("phxChildAdded", (_el) => phxChildrenAdded = true);
    patch.before("updated", (fromEl, toEl) => {
      let hook = this.triggerBeforeUpdateHook(fromEl, toEl);
      if (hook) {
        updatedHookIds.add(fromEl.id);
      }
    });
    patch.after("updated", (el) => {
      if (updatedHookIds.has(el.id)) {
        this.getHook(el).__updated();
      }
    });
    patch.after("discarded", (el) => {
      if (el.nodeType === Node.ELEMENT_NODE) {
        removedEls.push(el);
      }
    });
    patch.after("transitionsDiscarded", (els) => this.afterElementsRemoved(els, pruneCids));
    patch.perform();
    this.afterElementsRemoved(removedEls, pruneCids);
    return phxChildrenAdded;
  }
  afterElementsRemoved(elements, pruneCids) {
    let destroyedCIDs = [];
    elements.forEach((parent) => {
      let components = dom_default.all(parent, `[${PHX_COMPONENT}]`);
      components.concat(parent).forEach((el) => {
        let cid = this.componentID(el);
        if (isCid(cid) && destroyedCIDs.indexOf(cid) === -1) {
          destroyedCIDs.push(cid);
        }
        let hook = this.getHook(el);
        hook && this.destroyHook(hook);
      });
    });
    if (pruneCids) {
      this.maybePushComponentsDestroyed(destroyedCIDs);
    }
  }
  joinNewChildren() {
    dom_default.findPhxChildren(this.el, this.id).forEach((el) => this.joinChild(el));
  }
  getChildById(id) {
    return this.root.children[this.id][id];
  }
  getDescendentByEl(el) {
    if (el.id === this.id) {
      return this;
    } else {
      return this.children[el.getAttribute(PHX_PARENT_ID)][el.id];
    }
  }
  destroyDescendent(id) {
    for (let parentId in this.root.children) {
      for (let childId in this.root.children[parentId]) {
        if (childId === id) {
          return this.root.children[parentId][childId].destroy();
        }
      }
    }
  }
  joinChild(el) {
    let child = this.getChildById(el.id);
    if (!child) {
      let view = new View(el, this.liveSocket, this);
      this.root.children[this.id][view.id] = view;
      view.join();
      this.childJoins++;
      return true;
    }
  }
  isJoinPending() {
    return this.joinPending;
  }
  ackJoin(_child) {
    this.childJoins--;
    if (this.childJoins === 0) {
      if (this.parent) {
        this.parent.ackJoin(this);
      } else {
        this.onAllChildJoinsComplete();
      }
    }
  }
  onAllChildJoinsComplete() {
    this.joinCallback(() => {
      this.pendingJoinOps.forEach(([view, op]) => {
        if (!view.isDestroyed()) {
          op();
        }
      });
      this.pendingJoinOps = [];
    });
  }
  update(diff, events) {
    if (this.isJoinPending() || this.liveSocket.hasPendingLink()) {
      return this.pendingDiffs.push({ diff, events });
    }
    this.rendered.mergeDiff(diff);
    let phxChildrenAdded = false;
    if (this.rendered.isComponentOnlyDiff(diff)) {
      this.liveSocket.time("component patch complete", () => {
        let parentCids = dom_default.findParentCIDs(this.el, this.rendered.componentCIDs(diff));
        parentCids.forEach((parentCID) => {
          if (this.componentPatch(this.rendered.getComponent(diff, parentCID), parentCID)) {
            phxChildrenAdded = true;
          }
        });
      });
    } else if (!isEmpty(diff)) {
      this.liveSocket.time("full patch complete", () => {
        let html = this.renderContainer(diff, "update");
        let patch = new DOMPatch(this, this.el, this.id, html, null);
        phxChildrenAdded = this.performPatch(patch, true);
      });
    }
    this.liveSocket.dispatchEvents(events);
    if (phxChildrenAdded) {
      this.joinNewChildren();
    }
  }
  renderContainer(diff, kind) {
    return this.liveSocket.time(`toString diff (${kind})`, () => {
      let tag = this.el.tagName;
      let cids = diff ? this.rendered.componentCIDs(diff).concat(this.pruningCIDs) : null;
      let html = this.rendered.toString(cids);
      return `<${tag}>${html}</${tag}>`;
    });
  }
  componentPatch(diff, cid) {
    if (isEmpty(diff))
      return false;
    let html = this.rendered.componentToString(cid);
    let patch = new DOMPatch(this, this.el, this.id, html, cid);
    let childrenAdded = this.performPatch(patch, true);
    return childrenAdded;
  }
  getHook(el) {
    return this.viewHooks[ViewHook.elementID(el)];
  }
  addHook(el) {
    if (ViewHook.elementID(el) || !el.getAttribute) {
      return;
    }
    let hookName = el.getAttribute(`data-phx-${PHX_HOOK}`) || el.getAttribute(this.binding(PHX_HOOK));
    if (hookName && !this.ownsElement(el)) {
      return;
    }
    let callbacks = this.liveSocket.getHookCallbacks(hookName);
    if (callbacks) {
      if (!el.id) {
        logError(`no DOM ID for hook "${hookName}". Hooks require a unique ID on each element.`, el);
      }
      let hook = new ViewHook(this, el, callbacks);
      this.viewHooks[ViewHook.elementID(hook.el)] = hook;
      return hook;
    } else if (hookName !== null) {
      logError(`unknown hook found for "${hookName}"`, el);
    }
  }
  destroyHook(hook) {
    hook.__destroyed();
    hook.__cleanup__();
    delete this.viewHooks[ViewHook.elementID(hook.el)];
  }
  applyPendingUpdates() {
    this.pendingDiffs.forEach(({ diff, events }) => this.update(diff, events));
    this.pendingDiffs = [];
  }
  onChannel(event, cb) {
    this.liveSocket.onChannel(this.channel, event, (resp) => {
      if (this.isJoinPending()) {
        this.root.pendingJoinOps.push([this, () => cb(resp)]);
      } else {
        this.liveSocket.requestDOMUpdate(() => cb(resp));
      }
    });
  }
  bindChannel() {
    this.liveSocket.onChannel(this.channel, "diff", (rawDiff) => {
      this.liveSocket.requestDOMUpdate(() => {
        this.applyDiff("update", rawDiff, ({ diff, events }) => this.update(diff, events));
      });
    });
    this.onChannel("redirect", ({ to, flash }) => this.onRedirect({ to, flash }));
    this.onChannel("live_patch", (redir) => this.onLivePatch(redir));
    this.onChannel("live_redirect", (redir) => this.onLiveRedirect(redir));
    this.channel.onError((reason) => this.onError(reason));
    this.channel.onClose((reason) => this.onClose(reason));
  }
  destroyAllChildren() {
    for (let id in this.root.children[this.id]) {
      this.getChildById(id).destroy();
    }
  }
  onLiveRedirect(redir) {
    let { to, kind, flash } = redir;
    let url = this.expandURL(to);
    this.liveSocket.historyRedirect(url, kind, flash);
  }
  onLivePatch(redir) {
    let { to, kind } = redir;
    this.href = this.expandURL(to);
    this.liveSocket.historyPatch(to, kind);
  }
  expandURL(to) {
    return to.startsWith("/") ? `${window.location.protocol}//${window.location.host}${to}` : to;
  }
  onRedirect({ to, flash }) {
    this.liveSocket.redirect(to, flash);
  }
  isDestroyed() {
    return this.destroyed;
  }
  join(callback) {
    if (!this.parent) {
      this.stopCallback = this.liveSocket.withPageLoading({ to: this.href, kind: "initial" });
    }
    this.joinCallback = (onDone) => {
      onDone = onDone || function() {
      };
      callback ? callback(this.joinCount, onDone) : onDone();
    };
    this.liveSocket.wrapPush(this, { timeout: false }, () => {
      return this.channel.join().receive("ok", (data2) => {
        if (!this.isDestroyed()) {
          this.liveSocket.requestDOMUpdate(() => this.onJoin(data2));
        }
      }).receive("error", (resp) => !this.isDestroyed() && this.onJoinError(resp)).receive("timeout", () => !this.isDestroyed() && this.onJoinError({ reason: "timeout" }));
    });
  }
  onJoinError(resp) {
    if (resp.reason === "unauthorized" || resp.reason === "stale") {
      this.log("error", () => ["unauthorized live_redirect. Falling back to page request", resp]);
      return this.onRedirect({ to: this.href });
    }
    if (resp.redirect || resp.live_redirect) {
      this.joinPending = false;
      this.channel.leave();
    }
    if (resp.redirect) {
      return this.onRedirect(resp.redirect);
    }
    if (resp.live_redirect) {
      return this.onLiveRedirect(resp.live_redirect);
    }
    this.log("error", () => ["unable to join", resp]);
    return this.liveSocket.reloadWithJitter(this);
  }
  onClose(reason) {
    if (this.isDestroyed()) {
      return;
    }
    if (this.isJoinPending() && document.visibilityState !== "hidden" || this.liveSocket.hasPendingLink() && reason !== "leave") {
      return this.liveSocket.reloadWithJitter(this);
    }
    this.destroyAllChildren();
    this.liveSocket.dropActiveElement(this);
    if (document.activeElement) {
      document.activeElement.blur();
    }
    if (this.liveSocket.isUnloaded()) {
      this.showLoader(BEFORE_UNLOAD_LOADER_TIMEOUT);
    }
  }
  onError(reason) {
    this.onClose(reason);
    this.log("error", () => ["view crashed", reason]);
    if (!this.liveSocket.isUnloaded()) {
      this.displayError();
    }
  }
  displayError() {
    if (this.isMain()) {
      dom_default.dispatchEvent(window, "phx:page-loading-start", { to: this.href, kind: "error" });
    }
    this.showLoader();
    this.setContainerClasses(PHX_DISCONNECTED_CLASS, PHX_ERROR_CLASS);
  }
  pushWithReply(refGenerator, event, payload, onReply = function() {
  }) {
    if (!this.isConnected()) {
      return;
    }
    let [ref, [el], opts] = refGenerator ? refGenerator() : [null, [], {}];
    let onLoadingDone = function() {
    };
    if (opts.page_loading || el && el.getAttribute(this.binding(PHX_PAGE_LOADING)) !== null) {
      onLoadingDone = this.liveSocket.withPageLoading({ kind: "element", target: el });
    }
    if (typeof payload.cid !== "number") {
      delete payload.cid;
    }
    return this.liveSocket.wrapPush(this, { timeout: true }, () => {
      return this.channel.push(event, payload, PUSH_TIMEOUT).receive("ok", (resp) => {
        this.liveSocket.requestDOMUpdate(() => {
          let hookReply = null;
          if (ref !== null) {
            this.undoRefs(ref);
          }
          if (resp.diff) {
            hookReply = this.applyDiff("update", resp.diff, ({ diff, events }) => {
              this.update(diff, events);
            });
          }
          if (resp.redirect) {
            this.onRedirect(resp.redirect);
          }
          if (resp.live_patch) {
            this.onLivePatch(resp.live_patch);
          }
          if (resp.live_redirect) {
            this.onLiveRedirect(resp.live_redirect);
          }
          onLoadingDone();
          onReply(resp, hookReply);
        });
      });
    });
  }
  undoRefs(ref) {
    dom_default.all(this.el, `[${PHX_REF}="${ref}"]`, (el) => {
      let disabledVal = el.getAttribute(PHX_DISABLED);
      el.removeAttribute(PHX_REF);
      if (el.getAttribute(PHX_READONLY) !== null) {
        el.readOnly = false;
        el.removeAttribute(PHX_READONLY);
      }
      if (disabledVal !== null) {
        el.disabled = disabledVal === "true" ? true : false;
        el.removeAttribute(PHX_DISABLED);
      }
      PHX_EVENT_CLASSES.forEach((className) => dom_default.removeClass(el, className));
      let disableRestore = el.getAttribute(PHX_DISABLE_WITH_RESTORE);
      if (disableRestore !== null) {
        el.innerText = disableRestore;
        el.removeAttribute(PHX_DISABLE_WITH_RESTORE);
      }
      let toEl = dom_default.private(el, PHX_REF);
      if (toEl) {
        let hook = this.triggerBeforeUpdateHook(el, toEl);
        DOMPatch.patchEl(el, toEl, this.liveSocket.getActiveElement());
        if (hook) {
          hook.__updated();
        }
        dom_default.deletePrivate(el, PHX_REF);
      }
    });
  }
  putRef(elements, event, opts = {}) {
    let newRef = this.ref++;
    let disableWith = this.binding(PHX_DISABLE_WITH);
    if (opts.loading) {
      elements = elements.concat(dom_default.all(document, opts.loading));
    }
    elements.forEach((el) => {
      el.classList.add(`phx-${event}-loading`);
      el.setAttribute(PHX_REF, newRef);
      let disableText = el.getAttribute(disableWith);
      if (disableText !== null) {
        if (!el.getAttribute(PHX_DISABLE_WITH_RESTORE)) {
          el.setAttribute(PHX_DISABLE_WITH_RESTORE, el.innerText);
        }
        el.innerText = disableText;
      }
    });
    return [newRef, elements, opts];
  }
  componentID(el) {
    let cid = el.getAttribute && el.getAttribute(PHX_COMPONENT);
    return cid ? parseInt(cid) : null;
  }
  targetComponentID(target, targetCtx) {
    if (isCid(targetCtx)) {
      return targetCtx;
    }
    let cidOrSelector = target.getAttribute(this.binding("target"));
    if (isCid(cidOrSelector)) {
      return parseInt(cidOrSelector);
    } else if (targetCtx && cidOrSelector !== null) {
      return this.closestComponentID(targetCtx);
    } else {
      return null;
    }
  }
  closestComponentID(targetCtx) {
    if (isCid(targetCtx)) {
      return targetCtx;
    } else if (targetCtx) {
      return maybe(targetCtx.closest(`[${PHX_COMPONENT}]`), (el) => this.ownsElement(el) && this.componentID(el));
    } else {
      return null;
    }
  }
  pushHookEvent(targetCtx, event, payload, onReply) {
    if (!this.isConnected()) {
      this.log("hook", () => ["unable to push hook event. LiveView not connected", event, payload]);
      return false;
    }
    let [ref, els, opts] = this.putRef([], "hook");
    this.pushWithReply(() => [ref, els, opts], "event", {
      type: "hook",
      event,
      value: payload,
      cid: this.closestComponentID(targetCtx)
    }, (resp, reply) => onReply(reply, ref));
    return ref;
  }
  extractMeta(el, meta, value) {
    let prefix2 = this.binding("value-");
    for (let i = 0; i < el.attributes.length; i++) {
      if (!meta) {
        meta = {};
      }
      let name = el.attributes[i].name;
      if (name.startsWith(prefix2)) {
        meta[name.replace(prefix2, "")] = el.getAttribute(name);
      }
    }
    if (el.value !== void 0) {
      if (!meta) {
        meta = {};
      }
      meta.value = el.value;
      if (el.tagName === "INPUT" && CHECKABLE_INPUTS.indexOf(el.type) >= 0 && !el.checked) {
        delete meta.value;
      }
    }
    if (value) {
      if (!meta) {
        meta = {};
      }
      for (let key in value) {
        meta[key] = value[key];
      }
    }
    return meta;
  }
  pushEvent(type, el, targetCtx, phxEvent, meta, opts = {}) {
    this.pushWithReply(() => this.putRef([el], type, opts), "event", {
      type,
      event: phxEvent,
      value: this.extractMeta(el, meta, opts.value),
      cid: this.targetComponentID(el, targetCtx)
    });
  }
  pushFileProgress(fileEl, entryRef, progress, onReply = function() {
  }) {
    this.liveSocket.withinOwners(fileEl.form, (view, targetCtx) => {
      view.pushWithReply(null, "progress", {
        event: fileEl.getAttribute(view.binding(PHX_PROGRESS)),
        ref: fileEl.getAttribute(PHX_UPLOAD_REF),
        entry_ref: entryRef,
        progress,
        cid: view.targetComponentID(fileEl.form, targetCtx)
      }, onReply);
    });
  }
  pushInput(inputEl, targetCtx, forceCid, phxEvent, opts, callback) {
    let uploads;
    let cid = isCid(forceCid) ? forceCid : this.targetComponentID(inputEl.form, targetCtx);
    let refGenerator = () => this.putRef([inputEl, inputEl.form], "change", opts);
    let formData = serializeForm(inputEl.form, { _target: opts._target });
    if (dom_default.isUploadInput(inputEl) && inputEl.files && inputEl.files.length > 0) {
      LiveUploader.trackFiles(inputEl, Array.from(inputEl.files));
    }
    uploads = LiveUploader.serializeUploads(inputEl);
    let event = {
      type: "form",
      event: phxEvent,
      value: formData,
      uploads,
      cid
    };
    this.pushWithReply(refGenerator, "event", event, (resp) => {
      dom_default.showError(inputEl, this.liveSocket.binding(PHX_FEEDBACK_FOR));
      if (dom_default.isUploadInput(inputEl) && inputEl.getAttribute("data-phx-auto-upload") !== null) {
        if (LiveUploader.filesAwaitingPreflight(inputEl).length > 0) {
          let [ref, _els] = refGenerator();
          this.uploadFiles(inputEl.form, targetCtx, ref, cid, (_uploads) => {
            callback && callback(resp);
            this.triggerAwaitingSubmit(inputEl.form);
          });
        }
      } else {
        callback && callback(resp);
      }
    });
  }
  triggerAwaitingSubmit(formEl) {
    let awaitingSubmit = this.getScheduledSubmit(formEl);
    if (awaitingSubmit) {
      let [_el, _ref, _opts, callback] = awaitingSubmit;
      this.cancelSubmit(formEl);
      callback();
    }
  }
  getScheduledSubmit(formEl) {
    return this.formSubmits.find(([el, _ref, _opts, _callback]) => el.isSameNode(formEl));
  }
  scheduleSubmit(formEl, ref, opts, callback) {
    if (this.getScheduledSubmit(formEl)) {
      return true;
    }
    this.formSubmits.push([formEl, ref, opts, callback]);
  }
  cancelSubmit(formEl) {
    this.formSubmits = this.formSubmits.filter(([el, ref, _callback]) => {
      if (el.isSameNode(formEl)) {
        this.undoRefs(ref);
        return false;
      } else {
        return true;
      }
    });
  }
  pushFormSubmit(formEl, targetCtx, phxEvent, opts, onReply) {
    let filterIgnored = (el) => {
      let userIgnored = closestPhxBinding(el, `${this.binding(PHX_UPDATE)}=ignore`, el.form);
      return !(userIgnored || closestPhxBinding(el, "data-phx-update=ignore", el.form));
    };
    let filterDisables = (el) => {
      return el.hasAttribute(this.binding(PHX_DISABLE_WITH));
    };
    let filterButton = (el) => el.tagName == "BUTTON";
    let filterInput = (el) => ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
    let refGenerator = () => {
      let formElements = Array.from(formEl.elements);
      let disables = formElements.filter(filterDisables);
      let buttons = formElements.filter(filterButton).filter(filterIgnored);
      let inputs = formElements.filter(filterInput).filter(filterIgnored);
      buttons.forEach((button) => {
        button.setAttribute(PHX_DISABLED, button.disabled);
        button.disabled = true;
      });
      inputs.forEach((input) => {
        input.setAttribute(PHX_READONLY, input.readOnly);
        input.readOnly = true;
        if (input.files) {
          input.setAttribute(PHX_DISABLED, input.disabled);
          input.disabled = true;
        }
      });
      formEl.setAttribute(this.binding(PHX_PAGE_LOADING), "");
      return this.putRef([formEl].concat(disables).concat(buttons).concat(inputs), "submit", opts);
    };
    let cid = this.targetComponentID(formEl, targetCtx);
    if (LiveUploader.hasUploadsInProgress(formEl)) {
      let [ref, _els] = refGenerator();
      let push = () => this.pushFormSubmit(formEl, targetCtx, phxEvent, opts, onReply);
      return this.scheduleSubmit(formEl, ref, opts, push);
    } else if (LiveUploader.inputsAwaitingPreflight(formEl).length > 0) {
      let [ref, els] = refGenerator();
      let proxyRefGen = () => [ref, els, opts];
      this.uploadFiles(formEl, targetCtx, ref, cid, (_uploads) => {
        let formData = serializeForm(formEl, {});
        this.pushWithReply(proxyRefGen, "event", {
          type: "form",
          event: phxEvent,
          value: formData,
          cid
        }, onReply);
      });
    } else {
      let formData = serializeForm(formEl);
      this.pushWithReply(refGenerator, "event", {
        type: "form",
        event: phxEvent,
        value: formData,
        cid
      }, onReply);
    }
  }
  uploadFiles(formEl, targetCtx, ref, cid, onComplete) {
    let joinCountAtUpload = this.joinCount;
    let inputEls = LiveUploader.activeFileInputs(formEl);
    let numFileInputsInProgress = inputEls.length;
    inputEls.forEach((inputEl) => {
      let uploader = new LiveUploader(inputEl, this, () => {
        numFileInputsInProgress--;
        if (numFileInputsInProgress === 0) {
          onComplete();
        }
      });
      this.uploaders[inputEl] = uploader;
      let entries = uploader.entries().map((entry) => entry.toPreflightPayload());
      let payload = {
        ref: inputEl.getAttribute(PHX_UPLOAD_REF),
        entries,
        cid: this.targetComponentID(inputEl.form, targetCtx)
      };
      this.log("upload", () => ["sending preflight request", payload]);
      this.pushWithReply(null, "allow_upload", payload, (resp) => {
        this.log("upload", () => ["got preflight response", resp]);
        if (resp.error) {
          this.undoRefs(ref);
          let [entry_ref, reason] = resp.error;
          this.log("upload", () => [`error for entry ${entry_ref}`, reason]);
        } else {
          let onError = (callback) => {
            this.channel.onError(() => {
              if (this.joinCount === joinCountAtUpload) {
                callback();
              }
            });
          };
          uploader.initAdapterUpload(resp, onError, this.liveSocket);
        }
      });
    });
  }
  dispatchUploads(name, filesOrBlobs) {
    let inputs = dom_default.findUploadInputs(this.el).filter((el) => el.name === name);
    if (inputs.length === 0) {
      logError(`no live file inputs found matching the name "${name}"`);
    } else if (inputs.length > 1) {
      logError(`duplicate live file inputs found matching the name "${name}"`);
    } else {
      dom_default.dispatchEvent(inputs[0], PHX_TRACK_UPLOADS, { files: filesOrBlobs });
    }
  }
  pushFormRecovery(form, newCid, callback) {
    this.liveSocket.withinOwners(form, (view, targetCtx) => {
      let input = form.elements[0];
      let phxEvent = form.getAttribute(this.binding(PHX_AUTO_RECOVER)) || form.getAttribute(this.binding("change"));
      js_default.exec("change", phxEvent, view, input, ["push", { _target: input.name, newCid, callback }]);
    });
  }
  pushLinkPatch(href, targetEl, callback) {
    let linkRef = this.liveSocket.setPendingLink(href);
    let refGen = targetEl ? () => this.putRef([targetEl], "click") : null;
    this.pushWithReply(refGen, "live_patch", { url: href }, (resp) => {
      this.liveSocket.requestDOMUpdate(() => {
        if (resp.link_redirect) {
          this.liveSocket.replaceMain(href, null, callback, linkRef);
        } else {
          if (this.liveSocket.commitPendingLink(linkRef)) {
            this.href = href;
          }
          this.applyPendingUpdates();
          callback && callback(linkRef);
        }
      });
    }).receive("timeout", () => this.liveSocket.redirect(window.location.href));
  }
  formsForRecovery(html) {
    if (this.joinCount === 0) {
      return [];
    }
    let phxChange = this.binding("change");
    let template = document.createElement("template");
    template.innerHTML = html;
    return dom_default.all(this.el, `form[${phxChange}]`).filter((form) => form.id && this.ownsElement(form)).filter((form) => form.elements.length > 0).filter((form) => form.getAttribute(this.binding(PHX_AUTO_RECOVER)) !== "ignore").map((form) => {
      let newForm = template.content.querySelector(`form[id="${form.id}"][${phxChange}="${form.getAttribute(phxChange)}"]`);
      if (newForm) {
        return [form, newForm, this.targetComponentID(newForm)];
      } else {
        return [form, null, null];
      }
    }).filter(([form, newForm, newCid]) => newForm);
  }
  maybePushComponentsDestroyed(destroyedCIDs) {
    let willDestroyCIDs = destroyedCIDs.filter((cid) => {
      return dom_default.findComponentNodeList(this.el, cid).length === 0;
    });
    if (willDestroyCIDs.length > 0) {
      this.pruningCIDs.push(...willDestroyCIDs);
      this.pushWithReply(null, "cids_will_destroy", { cids: willDestroyCIDs }, () => {
        this.pruningCIDs = this.pruningCIDs.filter((cid) => willDestroyCIDs.indexOf(cid) !== -1);
        let completelyDestroyCIDs = willDestroyCIDs.filter((cid) => {
          return dom_default.findComponentNodeList(this.el, cid).length === 0;
        });
        if (completelyDestroyCIDs.length > 0) {
          this.pushWithReply(null, "cids_destroyed", { cids: completelyDestroyCIDs }, (resp) => {
            this.rendered.pruneCIDs(resp.cids);
          });
        }
      });
    }
  }
  ownsElement(el) {
    return el.getAttribute(PHX_PARENT_ID) === this.id || maybe(el.closest(PHX_VIEW_SELECTOR), (node) => node.id) === this.id;
  }
  submitForm(form, targetCtx, phxEvent, opts = {}) {
    dom_default.putPrivate(form, PHX_HAS_SUBMITTED, true);
    this.liveSocket.blurActiveElement(this);
    this.pushFormSubmit(form, targetCtx, phxEvent, opts, () => {
      this.liveSocket.restorePreviouslyActiveFocus();
    });
  }
  binding(kind) {
    return this.liveSocket.binding(kind);
  }
};
var LiveSocket = class {
  constructor(url, phxSocket, opts = {}) {
    this.unloaded = false;
    if (!phxSocket || phxSocket.constructor.name === "Object") {
      throw new Error(`
      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:

          import {Socket} from "phoenix"
          import LiveSocket from "phoenix_live_view"
          let liveSocket = new LiveSocket("/live", Socket, {...})
      `);
    }
    this.socket = new phxSocket(url, opts);
    this.bindingPrefix = opts.bindingPrefix || BINDING_PREFIX;
    this.opts = opts;
    this.params = closure2(opts.params || {});
    this.viewLogger = opts.viewLogger;
    this.metadataCallbacks = opts.metadata || {};
    this.defaults = Object.assign(clone(DEFAULTS), opts.defaults || {});
    this.activeElement = null;
    this.prevActive = null;
    this.silenced = false;
    this.main = null;
    this.linkRef = 1;
    this.roots = {};
    this.href = window.location.href;
    this.pendingLink = null;
    this.currentLocation = clone(window.location);
    this.hooks = opts.hooks || {};
    this.uploaders = opts.uploaders || {};
    this.loaderTimeout = opts.loaderTimeout || LOADER_TIMEOUT;
    this.localStorage = opts.localStorage || window.localStorage;
    this.sessionStorage = opts.sessionStorage || window.sessionStorage;
    this.boundTopLevelEvents = false;
    this.domCallbacks = Object.assign({ onNodeAdded: closure2(), onBeforeElUpdated: closure2() }, opts.dom || {});
    this.transitions = new TransitionSet();
    window.addEventListener("pagehide", (_e) => {
      this.unloaded = true;
    });
    this.socket.onOpen(() => {
      if (this.isUnloaded()) {
        window.location.reload();
      }
    });
  }
  isProfileEnabled() {
    return this.sessionStorage.getItem(PHX_LV_PROFILE) === "true";
  }
  isDebugEnabled() {
    return this.sessionStorage.getItem(PHX_LV_DEBUG) === "true";
  }
  enableDebug() {
    this.sessionStorage.setItem(PHX_LV_DEBUG, "true");
  }
  enableProfiling() {
    this.sessionStorage.setItem(PHX_LV_PROFILE, "true");
  }
  disableDebug() {
    this.sessionStorage.removeItem(PHX_LV_DEBUG);
  }
  disableProfiling() {
    this.sessionStorage.removeItem(PHX_LV_PROFILE);
  }
  enableLatencySim(upperBoundMs) {
    this.enableDebug();
    console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable");
    this.sessionStorage.setItem(PHX_LV_LATENCY_SIM, upperBoundMs);
  }
  disableLatencySim() {
    this.sessionStorage.removeItem(PHX_LV_LATENCY_SIM);
  }
  getLatencySim() {
    let str = this.sessionStorage.getItem(PHX_LV_LATENCY_SIM);
    return str ? parseInt(str) : null;
  }
  getSocket() {
    return this.socket;
  }
  connect() {
    let doConnect = () => {
      if (this.joinRootViews()) {
        this.bindTopLevelEvents();
        this.socket.connect();
      }
    };
    if (["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0) {
      doConnect();
    } else {
      document.addEventListener("DOMContentLoaded", () => doConnect());
    }
  }
  disconnect(callback) {
    this.socket.disconnect(callback);
  }
  execJS(el, encodedJS, eventType = null) {
    this.owner(el, (view) => js_default.exec(eventType, encodedJS, view, el));
  }
  triggerDOM(kind, args) {
    this.domCallbacks[kind](...args);
  }
  time(name, func) {
    if (!this.isProfileEnabled() || !console.time) {
      return func();
    }
    console.time(name);
    let result = func();
    console.timeEnd(name);
    return result;
  }
  log(view, kind, msgCallback) {
    if (this.viewLogger) {
      let [msg, obj] = msgCallback();
      this.viewLogger(view, kind, msg, obj);
    } else if (this.isDebugEnabled()) {
      let [msg, obj] = msgCallback();
      debug(view, kind, msg, obj);
    }
  }
  requestDOMUpdate(callback) {
    this.transitions.after(callback);
  }
  transition(time, onStart, onDone = function() {
  }) {
    this.transitions.addTransition(time, onStart, onDone);
  }
  onChannel(channel, event, cb) {
    channel.on(event, (data2) => {
      let latency = this.getLatencySim();
      if (!latency) {
        cb(data2);
      } else {
        console.log(`simulating ${latency}ms of latency from server to client`);
        setTimeout(() => cb(data2), latency);
      }
    });
  }
  wrapPush(view, opts, push) {
    let latency = this.getLatencySim();
    let oldJoinCount = view.joinCount;
    if (!latency) {
      if (opts.timeout) {
        return push().receive("timeout", () => {
          if (view.joinCount === oldJoinCount && !view.isDestroyed()) {
            this.reloadWithJitter(view, () => {
              this.log(view, "timeout", () => ["received timeout while communicating with server. Falling back to hard refresh for recovery"]);
            });
          }
        });
      } else {
        return push();
      }
    }
    console.log(`simulating ${latency}ms of latency from client to server`);
    let fakePush = {
      receives: [],
      receive(kind, cb) {
        this.receives.push([kind, cb]);
      }
    };
    setTimeout(() => {
      if (view.isDestroyed()) {
        return;
      }
      fakePush.receives.reduce((acc, [kind, cb]) => acc.receive(kind, cb), push());
    }, latency);
    return fakePush;
  }
  reloadWithJitter(view, log) {
    view.destroy();
    this.disconnect();
    let [minMs, maxMs] = RELOAD_JITTER;
    let afterMs = Math.floor(Math.random() * (maxMs - minMs + 1)) + minMs;
    let tries = browser_default.updateLocal(this.localStorage, window.location.pathname, CONSECUTIVE_RELOADS, 0, (count) => count + 1);
    log ? log() : this.log(view, "join", () => [`encountered ${tries} consecutive reloads`]);
    if (tries > MAX_RELOADS) {
      this.log(view, "join", () => [`exceeded ${MAX_RELOADS} consecutive reloads. Entering failsafe mode`]);
      afterMs = FAILSAFE_JITTER;
    }
    setTimeout(() => {
      if (this.hasPendingLink()) {
        window.location = this.pendingLink;
      } else {
        window.location.reload();
      }
    }, afterMs);
  }
  getHookCallbacks(name) {
    return name && name.startsWith("Phoenix.") ? hooks_default[name.split(".")[1]] : this.hooks[name];
  }
  isUnloaded() {
    return this.unloaded;
  }
  isConnected() {
    return this.socket.isConnected();
  }
  getBindingPrefix() {
    return this.bindingPrefix;
  }
  binding(kind) {
    return `${this.getBindingPrefix()}${kind}`;
  }
  channel(topic, params) {
    return this.socket.channel(topic, params);
  }
  joinRootViews() {
    let rootsFound = false;
    dom_default.all(document, `${PHX_VIEW_SELECTOR}:not([${PHX_PARENT_ID}])`, (rootEl) => {
      if (!this.getRootById(rootEl.id)) {
        let view = this.newRootView(rootEl);
        view.setHref(this.getHref());
        view.join();
        if (rootEl.getAttribute(PHX_MAIN)) {
          this.main = view;
        }
      }
      rootsFound = true;
    });
    return rootsFound;
  }
  redirect(to, flash) {
    this.disconnect();
    browser_default.redirect(to, flash);
  }
  replaceMain(href, flash, callback = null, linkRef = this.setPendingLink(href)) {
    let oldMainEl = this.main.el;
    let newMainEl = dom_default.cloneNode(oldMainEl, "");
    this.main.showLoader(this.loaderTimeout);
    this.main.destroy();
    this.main = this.newRootView(newMainEl, flash);
    this.main.setRedirect(href);
    this.transitionRemoves();
    this.main.join((joinCount, onDone) => {
      if (joinCount === 1 && this.commitPendingLink(linkRef)) {
        this.requestDOMUpdate(() => {
          oldMainEl.replaceWith(newMainEl);
          callback && callback();
          onDone();
        });
      }
    });
  }
  transitionRemoves(elements) {
    let removeAttr = this.binding("remove");
    elements = elements || dom_default.all(document, `[${removeAttr}]`);
    elements.forEach((el) => {
      if (document.body.contains(el)) {
        this.execJS(el, el.getAttribute(removeAttr), "remove");
      }
    });
  }
  isPhxView(el) {
    return el.getAttribute && el.getAttribute(PHX_SESSION) !== null;
  }
  newRootView(el, flash) {
    let view = new View(el, this, null, flash);
    this.roots[view.id] = view;
    return view;
  }
  owner(childEl, callback) {
    let view = maybe(childEl.closest(PHX_VIEW_SELECTOR), (el) => this.getViewByEl(el)) || this.main;
    if (view) {
      callback(view);
    }
  }
  withinOwners(childEl, callback) {
    this.owner(childEl, (view) => callback(view, childEl));
  }
  getViewByEl(el) {
    let rootId = el.getAttribute(PHX_ROOT_ID);
    return maybe(this.getRootById(rootId), (root) => root.getDescendentByEl(el));
  }
  getRootById(id) {
    return this.roots[id];
  }
  destroyAllViews() {
    for (let id in this.roots) {
      this.roots[id].destroy();
      delete this.roots[id];
    }
  }
  destroyViewByEl(el) {
    let root = this.getRootById(el.getAttribute(PHX_ROOT_ID));
    if (root) {
      root.destroyDescendent(el.id);
    }
  }
  setActiveElement(target) {
    if (this.activeElement === target) {
      return;
    }
    this.activeElement = target;
    let cancel = () => {
      if (target === this.activeElement) {
        this.activeElement = null;
      }
      target.removeEventListener("mouseup", this);
      target.removeEventListener("touchend", this);
    };
    target.addEventListener("mouseup", cancel);
    target.addEventListener("touchend", cancel);
  }
  getActiveElement() {
    if (document.activeElement === document.body) {
      return this.activeElement || document.activeElement;
    } else {
      return document.activeElement || document.body;
    }
  }
  dropActiveElement(view) {
    if (this.prevActive && view.ownsElement(this.prevActive)) {
      this.prevActive = null;
    }
  }
  restorePreviouslyActiveFocus() {
    if (this.prevActive && this.prevActive !== document.body) {
      this.prevActive.focus();
    }
  }
  blurActiveElement() {
    this.prevActive = this.getActiveElement();
    if (this.prevActive !== document.body) {
      this.prevActive.blur();
    }
  }
  bindTopLevelEvents() {
    if (this.boundTopLevelEvents) {
      return;
    }
    this.boundTopLevelEvents = true;
    document.body.addEventListener("click", function() {
    });
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) {
        this.getSocket().disconnect();
        this.withPageLoading({ to: window.location.href, kind: "redirect" });
        window.location.reload();
      }
    }, true);
    this.bindNav();
    this.bindClicks();
    this.bindForms();
    this.bind({ keyup: "keyup", keydown: "keydown" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
      let matchKey = targetEl.getAttribute(this.binding(PHX_KEY));
      let pressedKey = e.key && e.key.toLowerCase();
      if (matchKey && matchKey.toLowerCase() !== pressedKey) {
        return;
      }
      let data2 = { key: e.key, ...this.eventMeta(type, e, targetEl) };
      js_default.exec(type, phxEvent, view, targetEl, ["push", { data: data2 }]);
    });
    this.bind({ blur: "focusout", focus: "focusin" }, (e, type, view, targetEl, phxEvent, eventTarget) => {
      if (!eventTarget) {
        let data2 = { key: e.key, ...this.eventMeta(type, e, targetEl) };
        js_default.exec(type, phxEvent, view, targetEl, ["push", { data: data2 }]);
      }
    });
    this.bind({ blur: "blur", focus: "focus" }, (e, type, view, targetEl, targetCtx, phxEvent, phxTarget) => {
      if (phxTarget === "window") {
        let data2 = this.eventMeta(type, e, targetEl);
        js_default.exec(type, phxEvent, view, targetEl, ["push", { data: data2 }]);
      }
    });
    window.addEventListener("dragover", (e) => e.preventDefault());
    window.addEventListener("drop", (e) => {
      e.preventDefault();
      let dropTargetId = maybe(closestPhxBinding(e.target, this.binding(PHX_DROP_TARGET)), (trueTarget) => {
        return trueTarget.getAttribute(this.binding(PHX_DROP_TARGET));
      });
      let dropTarget = dropTargetId && document.getElementById(dropTargetId);
      let files = Array.from(e.dataTransfer.files || []);
      if (!dropTarget || dropTarget.disabled || files.length === 0 || !(dropTarget.files instanceof FileList)) {
        return;
      }
      LiveUploader.trackFiles(dropTarget, files);
      dropTarget.dispatchEvent(new Event("input", { bubbles: true }));
    });
    this.on(PHX_TRACK_UPLOADS, (e) => {
      let uploadTarget = e.target;
      if (!dom_default.isUploadInput(uploadTarget)) {
        return;
      }
      let files = Array.from(e.detail.files || []).filter((f) => f instanceof File || f instanceof Blob);
      LiveUploader.trackFiles(uploadTarget, files);
      uploadTarget.dispatchEvent(new Event("input", { bubbles: true }));
    });
  }
  eventMeta(eventName, e, targetEl) {
    let callback = this.metadataCallbacks[eventName];
    return callback ? callback(e, targetEl) : {};
  }
  setPendingLink(href) {
    this.linkRef++;
    this.pendingLink = href;
    return this.linkRef;
  }
  commitPendingLink(linkRef) {
    if (this.linkRef !== linkRef) {
      return false;
    } else {
      this.href = this.pendingLink;
      this.pendingLink = null;
      return true;
    }
  }
  getHref() {
    return this.href;
  }
  hasPendingLink() {
    return !!this.pendingLink;
  }
  bind(events, callback) {
    for (let event in events) {
      let browserEventName = events[event];
      this.on(browserEventName, (e) => {
        let binding = this.binding(event);
        let windowBinding = this.binding(`window-${event}`);
        let targetPhxEvent = e.target.getAttribute && e.target.getAttribute(binding);
        if (targetPhxEvent) {
          this.debounce(e.target, e, () => {
            this.withinOwners(e.target, (view) => {
              callback(e, event, view, e.target, targetPhxEvent, null);
            });
          });
        } else {
          dom_default.all(document, `[${windowBinding}]`, (el) => {
            let phxEvent = el.getAttribute(windowBinding);
            this.debounce(el, e, () => {
              this.withinOwners(el, (view) => {
                callback(e, event, view, el, phxEvent, "window");
              });
            });
          });
        }
      });
    }
  }
  bindClicks() {
    this.bindClick("click", "click", false);
    this.bindClick("mousedown", "capture-click", true);
  }
  bindClick(eventName, bindingName, capture) {
    let click = this.binding(bindingName);
    window.addEventListener(eventName, (e) => {
      if (!this.isConnected()) {
        return;
      }
      let target = null;
      if (capture) {
        target = e.target.matches(`[${click}]`) ? e.target : e.target.querySelector(`[${click}]`);
      } else {
        target = closestPhxBinding(e.target, click);
        this.dispatchClickAway(e);
      }
      let phxEvent = target && target.getAttribute(click);
      if (!phxEvent) {
        return;
      }
      if (target.getAttribute("href") === "#") {
        e.preventDefault();
      }
      this.debounce(target, e, () => {
        this.withinOwners(target, (view) => {
          js_default.exec("click", phxEvent, view, target, ["push", { data: this.eventMeta("click", e, target) }]);
        });
      });
    }, capture);
  }
  dispatchClickAway(e) {
    let binding = this.binding("click-away");
    dom_default.all(document, `[${binding}]`, (el) => {
      if (!(el.isSameNode(e.target) || el.contains(e.target))) {
        this.withinOwners(e.target, (view) => {
          let phxEvent = el.getAttribute(binding);
          if (js_default.isVisible(el)) {
            js_default.exec("click", phxEvent, view, e.target, ["push", { data: this.eventMeta("click", e, e.target) }]);
          }
        });
      }
    });
  }
  bindNav() {
    if (!browser_default.canPushState()) {
      return;
    }
    if (history.scrollRestoration) {
      history.scrollRestoration = "manual";
    }
    let scrollTimer = null;
    window.addEventListener("scroll", (_e) => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        browser_default.updateCurrentState((state) => Object.assign(state, { scroll: window.scrollY }));
      }, 100);
    });
    window.addEventListener("popstate", (event) => {
      if (!this.registerNewLocation(window.location)) {
        return;
      }
      let { type, id, root, scroll } = event.state || {};
      let href = window.location.href;
      this.requestDOMUpdate(() => {
        if (this.main.isConnected() && (type === "patch" && id === this.main.id)) {
          this.main.pushLinkPatch(href, null);
        } else {
          this.replaceMain(href, null, () => {
            if (root) {
              this.replaceRootHistory();
            }
            if (typeof scroll === "number") {
              setTimeout(() => {
                window.scrollTo(0, scroll);
              }, 0);
            }
          });
        }
      });
    }, false);
    window.addEventListener("click", (e) => {
      let target = closestPhxBinding(e.target, PHX_LIVE_LINK);
      let type = target && target.getAttribute(PHX_LIVE_LINK);
      let wantsNewTab = e.metaKey || e.ctrlKey || e.button === 1;
      if (!type || !this.isConnected() || !this.main || wantsNewTab) {
        return;
      }
      let href = target.href;
      let linkState = target.getAttribute(PHX_LINK_STATE);
      e.preventDefault();
      if (this.pendingLink === href) {
        return;
      }
      this.requestDOMUpdate(() => {
        if (type === "patch") {
          this.pushHistoryPatch(href, linkState, target);
        } else if (type === "redirect") {
          this.historyRedirect(href, linkState);
        } else {
          throw new Error(`expected ${PHX_LIVE_LINK} to be "patch" or "redirect", got: ${type}`);
        }
      });
    }, false);
  }
  dispatchEvent(event, payload = {}) {
    dom_default.dispatchEvent(window, `phx:${event}`, payload);
  }
  dispatchEvents(events) {
    events.forEach(([event, payload]) => this.dispatchEvent(event, payload));
  }
  withPageLoading(info, callback) {
    dom_default.dispatchEvent(window, "phx:page-loading-start", info);
    let done = () => dom_default.dispatchEvent(window, "phx:page-loading-stop", info);
    return callback ? callback(done) : done;
  }
  pushHistoryPatch(href, linkState, targetEl) {
    this.withPageLoading({ to: href, kind: "patch" }, (done) => {
      this.main.pushLinkPatch(href, targetEl, (linkRef) => {
        this.historyPatch(href, linkState, linkRef);
        done();
      });
    });
  }
  historyPatch(href, linkState, linkRef = this.setPendingLink(href)) {
    if (!this.commitPendingLink(linkRef)) {
      return;
    }
    browser_default.pushState(linkState, { type: "patch", id: this.main.id }, href);
    this.registerNewLocation(window.location);
  }
  historyRedirect(href, linkState, flash) {
    let scroll = window.scrollY;
    this.withPageLoading({ to: href, kind: "redirect" }, (done) => {
      this.replaceMain(href, flash, () => {
        browser_default.pushState(linkState, { type: "redirect", id: this.main.id, scroll }, href);
        this.registerNewLocation(window.location);
        done();
      });
    });
  }
  replaceRootHistory() {
    browser_default.pushState("replace", { root: true, type: "patch", id: this.main.id });
  }
  registerNewLocation(newLocation) {
    let { pathname, search } = this.currentLocation;
    if (pathname + search === newLocation.pathname + newLocation.search) {
      return false;
    } else {
      this.currentLocation = clone(newLocation);
      return true;
    }
  }
  bindForms() {
    let iterations = 0;
    this.on("submit", (e) => {
      let phxEvent = e.target.getAttribute(this.binding("submit"));
      if (!phxEvent) {
        return;
      }
      e.preventDefault();
      e.target.disabled = true;
      this.withinOwners(e.target, (view) => {
        js_default.exec("submit", phxEvent, view, e.target, ["push", {}]);
      });
    }, false);
    for (let type of ["change", "input"]) {
      this.on(type, (e) => {
        let input = e.target;
        let phxEvent = input.form && input.form.getAttribute(this.binding("change"));
        if (!phxEvent) {
          return;
        }
        if (input.type === "number" && input.validity && input.validity.badInput) {
          return;
        }
        let currentIterations = iterations;
        iterations++;
        let { at, type: lastType } = dom_default.private(input, "prev-iteration") || {};
        if (at === currentIterations - 1 && type !== lastType) {
          return;
        }
        dom_default.putPrivate(input, "prev-iteration", { at: currentIterations, type });
        this.debounce(input, e, () => {
          this.withinOwners(input.form, (view) => {
            dom_default.putPrivate(input, PHX_HAS_FOCUSED, true);
            if (!dom_default.isTextualInput(input)) {
              this.setActiveElement(input);
            }
            js_default.exec("change", phxEvent, view, input, ["push", { _target: e.target.name }]);
          });
        });
      }, false);
    }
  }
  debounce(el, event, callback) {
    let phxDebounce = this.binding(PHX_DEBOUNCE);
    let phxThrottle = this.binding(PHX_THROTTLE);
    let defaultDebounce = this.defaults.debounce.toString();
    let defaultThrottle = this.defaults.throttle.toString();
    dom_default.debounce(el, event, phxDebounce, defaultDebounce, phxThrottle, defaultThrottle, callback);
  }
  silenceEvents(callback) {
    this.silenced = true;
    callback();
    this.silenced = false;
  }
  on(event, callback) {
    window.addEventListener(event, (e) => {
      if (!this.silenced) {
        callback(e);
      }
    });
  }
};
var TransitionSet = class {
  constructor() {
    this.transitions = /* @__PURE__ */ new Set();
    this.pendingOps = [];
    this.reset();
  }
  reset() {
    this.transitions.forEach((timer) => {
      cancelTimeout(timer);
      this.transitions.delete(timer);
    });
    this.flushPendingOps();
  }
  after(callback) {
    if (this.size() === 0) {
      callback();
    } else {
      this.pushPendingOp(callback);
    }
  }
  addTransition(time, onStart, onDone) {
    onStart();
    let timer = setTimeout(() => {
      this.transitions.delete(timer);
      onDone();
      if (this.size() === 0) {
        this.flushPendingOps();
      }
    }, time);
    this.transitions.add(timer);
  }
  pushPendingOp(op) {
    this.pendingOps.push(op);
  }
  size() {
    return this.transitions.size;
  }
  flushPendingOps() {
    this.pendingOps.forEach((op) => op());
    this.pendingOps = [];
  }
};

// node_modules/alpinejs/dist/module.esm.js
var __create2 = Object.create;
var __defProp2 = Object.defineProperty;
var __getProtoOf2 = Object.getPrototypeOf;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
var __commonJS2 = (callback, module2) => () => {
  if (!module2) {
    module2 = { exports: {} };
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames2(module2))
      if (!__hasOwnProp2.call(target, key) && key !== "default")
        __defProp2(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc2(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __exportStar(__markAsModule2(__defProp2(module2 != null ? __create2(__getProtoOf2(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var require_shared_cjs = __commonJS2((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = 0; i < list.length; i++) {
      map[list[i]] = true;
    }
    return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
  }
  var PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `HYDRATE_EVENTS`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `HOISTED`,
    [-2]: `BAIL`
  };
  var slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  var GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
  var isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
  var range2 = 2;
  function generateCodeFrame(source, start2 = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start2) {
        for (let j = i - range2; j <= i + range2 || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start2 - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start2);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
  var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
  var attrValidationCache = {};
  function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
      return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
      console.error(`unsafe attribute name: ${name}`);
    }
    return attrValidationCache[name] = !isUnsafe;
  }
  var propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
  };
  var isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
  var isKnownAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isObject2(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:(.+)/;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function stringifyStyle(styles) {
    let ret = "";
    if (!styles) {
      return ret;
    }
    for (const key in styles) {
      const value = styles[key];
      const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
      if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
        ret += `${normalizedKey}:${value};`;
      }
    }
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject2(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
  var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  var isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
  var escapeRE = /["'&<>]/;
  function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) {
      return str;
    }
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
      switch (str.charCodeAt(index)) {
        case 34:
          escaped = "&quot;";
          break;
        case 38:
          escaped = "&amp;";
          break;
        case 39:
          escaped = "&#39;";
          break;
        case 60:
          escaped = "&lt;";
          break;
        case 62:
          escaped = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index) {
        html += str.substring(lastIndex, index);
      }
      lastIndex = index + 1;
      html += escaped;
    }
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
  }
  var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
  function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b)
      return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject2(a);
    bValidType = isObject2(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  var toDisplayString = (val) => {
    return val == null ? "" : isObject2(val) ? JSON.stringify(val, replacer, 2) : String(val);
  };
  var replacer = (_key, val) => {
    if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
          entries[`${key} =>`] = val2;
          return entries;
        }, {})
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()]
      };
    } else if (isObject2(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  var babelParserDefaultPlugins = [
    "bigInt",
    "optionalChaining",
    "nullishCoalescingOperator"
  ];
  var EMPTY_OBJ = Object.freeze({});
  var EMPTY_ARR = Object.freeze([]);
  var NOOP = () => {
  };
  var NO = () => false;
  var onRE = /^on[^a-z]/;
  var isOn = (key) => onRE.test(key);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isDate = (val) => val instanceof Date;
  var isFunction = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject2 = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return isObject2(val) && isFunction(val.then) && isFunction(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
  var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
  var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
  var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
  var invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  var def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      value
    });
  };
  var toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof window !== "undefined" ? window : {});
  };
  exports.EMPTY_ARR = EMPTY_ARR;
  exports.EMPTY_OBJ = EMPTY_OBJ;
  exports.NO = NO;
  exports.NOOP = NOOP;
  exports.PatchFlagNames = PatchFlagNames;
  exports.babelParserDefaultPlugins = babelParserDefaultPlugins;
  exports.camelize = camelize;
  exports.capitalize = capitalize;
  exports.def = def;
  exports.escapeHtml = escapeHtml;
  exports.escapeHtmlComment = escapeHtmlComment;
  exports.extend = extend;
  exports.generateCodeFrame = generateCodeFrame;
  exports.getGlobalThis = getGlobalThis;
  exports.hasChanged = hasChanged;
  exports.hasOwn = hasOwn;
  exports.hyphenate = hyphenate;
  exports.invokeArrayFns = invokeArrayFns;
  exports.isArray = isArray;
  exports.isBooleanAttr = isBooleanAttr2;
  exports.isDate = isDate;
  exports.isFunction = isFunction;
  exports.isGloballyWhitelisted = isGloballyWhitelisted;
  exports.isHTMLTag = isHTMLTag;
  exports.isIntegerKey = isIntegerKey;
  exports.isKnownAttr = isKnownAttr;
  exports.isMap = isMap;
  exports.isModelListener = isModelListener;
  exports.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
  exports.isObject = isObject2;
  exports.isOn = isOn;
  exports.isPlainObject = isPlainObject;
  exports.isPromise = isPromise;
  exports.isReservedProp = isReservedProp;
  exports.isSSRSafeAttrName = isSSRSafeAttrName;
  exports.isSVGTag = isSVGTag;
  exports.isSet = isSet;
  exports.isSpecialBooleanAttr = isSpecialBooleanAttr;
  exports.isString = isString;
  exports.isSymbol = isSymbol;
  exports.isVoidTag = isVoidTag;
  exports.looseEqual = looseEqual;
  exports.looseIndexOf = looseIndexOf;
  exports.makeMap = makeMap;
  exports.normalizeClass = normalizeClass;
  exports.normalizeStyle = normalizeStyle;
  exports.objectToString = objectToString;
  exports.parseStringStyle = parseStringStyle;
  exports.propsToAttrMap = propsToAttrMap;
  exports.remove = remove;
  exports.slotFlagsText = slotFlagsText;
  exports.stringifyStyle = stringifyStyle;
  exports.toDisplayString = toDisplayString;
  exports.toHandlerKey = toHandlerKey;
  exports.toNumber = toNumber;
  exports.toRawType = toRawType;
  exports.toTypeString = toTypeString;
});
var require_shared = __commonJS2((exports, module2) => {
  "use strict";
  if (false) {
    module2.exports = null;
  } else {
    module2.exports = require_shared_cjs();
  }
});
var require_reactivity_cjs = __commonJS2((exports) => {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  var shared = require_shared();
  var targetMap = /* @__PURE__ */ new WeakMap();
  var effectStack = [];
  var activeEffect;
  var ITERATE_KEY = Symbol("iterate");
  var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
  function isEffect(fn) {
    return fn && fn._isEffect === true;
  }
  function effect3(fn, options = shared.EMPTY_OBJ) {
    if (isEffect(fn)) {
      fn = fn.raw;
    }
    const effect4 = createReactiveEffect(fn, options);
    if (!options.lazy) {
      effect4();
    }
    return effect4;
  }
  function stop2(effect4) {
    if (effect4.active) {
      cleanup(effect4);
      if (effect4.options.onStop) {
        effect4.options.onStop();
      }
      effect4.active = false;
    }
  }
  var uid = 0;
  function createReactiveEffect(fn, options) {
    const effect4 = function reactiveEffect() {
      if (!effect4.active) {
        return fn();
      }
      if (!effectStack.includes(effect4)) {
        cleanup(effect4);
        try {
          enableTracking();
          effectStack.push(effect4);
          activeEffect = effect4;
          return fn();
        } finally {
          effectStack.pop();
          resetTracking();
          activeEffect = effectStack[effectStack.length - 1];
        }
      }
    };
    effect4.id = uid++;
    effect4.allowRecurse = !!options.allowRecurse;
    effect4._isEffect = true;
    effect4.active = true;
    effect4.raw = fn;
    effect4.deps = [];
    effect4.options = options;
    return effect4;
  }
  function cleanup(effect4) {
    const { deps } = effect4;
    if (deps.length) {
      for (let i = 0; i < deps.length; i++) {
        deps[i].delete(effect4);
      }
      deps.length = 0;
    }
  }
  var shouldTrack = true;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) {
      return;
    }
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = /* @__PURE__ */ new Set());
    }
    if (!dep.has(activeEffect)) {
      dep.add(activeEffect);
      activeEffect.deps.push(dep);
      if (activeEffect.options.onTrack) {
        activeEffect.options.onTrack({
          effect: activeEffect,
          target,
          type,
          key
        });
      }
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd) => {
      if (effectsToAdd) {
        effectsToAdd.forEach((effect4) => {
          if (effect4 !== activeEffect || effect4.allowRecurse) {
            effects.add(effect4);
          }
        });
      }
    };
    if (type === "clear") {
      depsMap.forEach(add2);
    } else if (key === "length" && shared.isArray(target)) {
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 >= newValue) {
          add2(dep);
        }
      });
    } else {
      if (key !== void 0) {
        add2(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!shared.isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (shared.isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (shared.isIntegerKey(key)) {
            add2(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!shared.isArray(target)) {
            add2(depsMap.get(ITERATE_KEY));
            if (shared.isMap(target)) {
              add2(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (shared.isMap(target)) {
            add2(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    const run = (effect4) => {
      if (effect4.options.onTrigger) {
        effect4.options.onTrigger({
          effect: effect4,
          target,
          key,
          type,
          newValue,
          oldValue,
          oldTarget
        });
      }
      if (effect4.options.scheduler) {
        effect4.options.scheduler(effect4);
      } else {
        effect4();
      }
    };
    effects.forEach(run);
  }
  var isNonTrackableKeys = /* @__PURE__ */ shared.makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(shared.isSymbol));
  var get2 = /* @__PURE__ */ createGetter();
  var shallowGet = /* @__PURE__ */ createGetter(false, true);
  var readonlyGet = /* @__PURE__ */ createGetter(true);
  var shallowReadonlyGet = /* @__PURE__ */ createGetter(true, true);
  var arrayInstrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      const arr = toRaw2(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = method.apply(arr, args);
      if (res === -1 || res === false) {
        return method.apply(arr, args.map(toRaw2));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    const method = Array.prototype[key];
    arrayInstrumentations[key] = function(...args) {
      pauseTracking();
      const res = method.apply(this, args);
      resetTracking();
      return res;
    };
  });
  function createGetter(isReadonly2 = false, shallow = false) {
    return function get3(target, key, receiver) {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw" && receiver === (isReadonly2 ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
        return target;
      }
      const targetIsArray = shared.isArray(target);
      if (!isReadonly2 && targetIsArray && shared.hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      const res = Reflect.get(target, key, receiver);
      if (shared.isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (shallow) {
        return res;
      }
      if (isRef(res)) {
        const shouldUnwrap = !targetIsArray || !shared.isIntegerKey(key);
        return shouldUnwrap ? res.value : res;
      }
      if (shared.isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive3(res);
      }
      return res;
    };
  }
  var set2 = /* @__PURE__ */ createSetter();
  var shallowSet = /* @__PURE__ */ createSetter(true);
  function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
      let oldValue = target[key];
      if (!shallow) {
        value = toRaw2(value);
        oldValue = toRaw2(oldValue);
        if (!shared.isArray(target) && isRef(oldValue) && !isRef(value)) {
          oldValue.value = value;
          return true;
        }
      }
      const hadKey = shared.isArray(target) && shared.isIntegerKey(key) ? Number(key) < target.length : shared.hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw2(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (shared.hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    };
  }
  function deleteProperty(target, key) {
    const hadKey = shared.hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function has(target, key) {
    const result = Reflect.has(target, key);
    if (!shared.isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  function ownKeys(target) {
    track(target, "iterate", shared.isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
  }
  var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
  };
  var readonlyHandlers = {
    get: readonlyGet,
    set(target, key) {
      {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    },
    deleteProperty(target, key) {
      {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
      }
      return true;
    }
  };
  var shallowReactiveHandlers = shared.extend({}, mutableHandlers, {
    get: shallowGet,
    set: shallowSet
  });
  var shallowReadonlyHandlers = shared.extend({}, readonlyHandlers, {
    get: shallowReadonlyGet
  });
  var toReactive = (value) => shared.isObject(value) ? reactive3(value) : value;
  var toReadonly = (value) => shared.isObject(value) ? readonly(value) : value;
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get$1(target, key, isReadonly2 = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw2(target);
    const rawKey = toRaw2(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "get", key);
    }
    !isReadonly2 && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has$1(key, isReadonly2 = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw2(target);
    const rawKey = toRaw2(key);
    if (key !== rawKey) {
      !isReadonly2 && track(rawTarget, "has", key);
    }
    !isReadonly2 && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw2(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw2(value);
    const target = toRaw2(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set$1(key, value) {
    value = toRaw2(value);
    const target = toRaw2(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw2(key);
      hadKey = has2.call(target, key);
    } else {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (shared.hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw2(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw2(key);
      hadKey = has2.call(target, key);
    } else {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw2(this);
    const hadItems = target.size !== 0;
    const oldTarget = shared.isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow) {
    return function forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw2(target);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw2(target);
      const targetIsMap = shared.isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
      return {
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        console.warn(`${shared.capitalize(type)} operation ${key}failed: target is readonly.`, toRaw2(this));
      }
      return type === "delete" ? false : this;
    };
  }
  var mutableInstrumentations = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(shared.hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
  }
  var mutableCollectionHandlers = {
    get: createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw2(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = shared.toRawType(target);
      console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(shared.toRawType(value));
  }
  function reactive3(target) {
    if (target && target["__v_isReadonly"]) {
      return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
  }
  function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
  }
  function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
  }
  function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!shared.isObject(target)) {
      {
        console.warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive2(value) {
    if (isReadonly(value)) {
      return isReactive2(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isProxy(value) {
    return isReactive2(value) || isReadonly(value);
  }
  function toRaw2(observed) {
    return observed && toRaw2(observed["__v_raw"]) || observed;
  }
  function markRaw(value) {
    shared.def(value, "__v_skip", true);
    return value;
  }
  var convert = (val) => shared.isObject(val) ? reactive3(val) : val;
  function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value);
  }
  function shallowRef(value) {
    return createRef(value, true);
  }
  var RefImpl = class {
    constructor(_rawValue, _shallow = false) {
      this._rawValue = _rawValue;
      this._shallow = _shallow;
      this.__v_isRef = true;
      this._value = _shallow ? _rawValue : convert(_rawValue);
    }
    get value() {
      track(toRaw2(this), "get", "value");
      return this._value;
    }
    set value(newVal) {
      if (shared.hasChanged(toRaw2(newVal), this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        trigger(toRaw2(this), "set", "value", newVal);
      }
    }
  };
  function createRef(rawValue, shallow = false) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  function triggerRef(ref2) {
    trigger(toRaw2(ref2), "set", "value", ref2.value);
  }
  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  var shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive2(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  var CustomRefImpl = class {
    constructor(factory) {
      this.__v_isRef = true;
      const { get: get3, set: set3 } = factory(() => track(this, "get", "value"), () => trigger(this, "set", "value"));
      this._get = get3;
      this._set = set3;
    }
    get value() {
      return this._get();
    }
    set value(newVal) {
      this._set(newVal);
    }
  };
  function customRef(factory) {
    return new CustomRefImpl(factory);
  }
  function toRefs(object) {
    if (!isProxy(object)) {
      console.warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = shared.isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
      ret[key] = toRef(object, key);
    }
    return ret;
  }
  var ObjectRefImpl = class {
    constructor(_object, _key) {
      this._object = _object;
      this._key = _key;
      this.__v_isRef = true;
    }
    get value() {
      return this._object[this._key];
    }
    set value(newVal) {
      this._object[this._key] = newVal;
    }
  };
  function toRef(object, key) {
    return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
  }
  var ComputedRefImpl = class {
    constructor(getter, _setter, isReadonly2) {
      this._setter = _setter;
      this._dirty = true;
      this.__v_isRef = true;
      this.effect = effect3(getter, {
        lazy: true,
        scheduler: () => {
          if (!this._dirty) {
            this._dirty = true;
            trigger(toRaw2(this), "set", "value");
          }
        }
      });
      this["__v_isReadonly"] = isReadonly2;
    }
    get value() {
      const self2 = toRaw2(this);
      if (self2._dirty) {
        self2._value = this.effect();
        self2._dirty = false;
      }
      track(self2, "get", "value");
      return self2._value;
    }
    set value(newValue) {
      this._setter(newValue);
    }
  };
  function computed(getterOrOptions) {
    let getter;
    let setter;
    if (shared.isFunction(getterOrOptions)) {
      getter = getterOrOptions;
      setter = () => {
        console.warn("Write operation failed: computed value is readonly");
      };
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    return new ComputedRefImpl(getter, setter, shared.isFunction(getterOrOptions) || !getterOrOptions.set);
  }
  exports.ITERATE_KEY = ITERATE_KEY;
  exports.computed = computed;
  exports.customRef = customRef;
  exports.effect = effect3;
  exports.enableTracking = enableTracking;
  exports.isProxy = isProxy;
  exports.isReactive = isReactive2;
  exports.isReadonly = isReadonly;
  exports.isRef = isRef;
  exports.markRaw = markRaw;
  exports.pauseTracking = pauseTracking;
  exports.proxyRefs = proxyRefs;
  exports.reactive = reactive3;
  exports.readonly = readonly;
  exports.ref = ref;
  exports.resetTracking = resetTracking;
  exports.shallowReactive = shallowReactive;
  exports.shallowReadonly = shallowReadonly;
  exports.shallowRef = shallowRef;
  exports.stop = stop2;
  exports.toRaw = toRaw2;
  exports.toRef = toRef;
  exports.toRefs = toRefs;
  exports.track = track;
  exports.trigger = trigger;
  exports.triggerRef = triggerRef;
  exports.unref = unref;
});
var require_reactivity = __commonJS2((exports, module2) => {
  "use strict";
  if (false) {
    module2.exports = null;
  } else {
    module2.exports = require_reactivity_cjs();
  }
});
var flushPending = false;
var flushing = false;
var queue = [];
function scheduler(callback) {
  queueJob(callback);
}
function queueJob(job) {
  if (!queue.includes(job))
    queue.push(job);
  queueFlush();
}
function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}
function flushJobs() {
  flushPending = false;
  flushing = true;
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
  }
  queue.length = 0;
  flushing = false;
}
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}
function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;
  effect = (callback) => engine.effect(callback, { scheduler: (task) => {
    if (shouldSchedule) {
      scheduler(task);
    } else {
      task();
    }
  } });
  raw = engine.raw;
}
function overrideEffect(override) {
  effect = override;
}
function elementBoundEffect(el) {
  let cleanup = () => {
  };
  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);
    if (!el._x_effects) {
      el._x_effects = /* @__PURE__ */ new Set();
      el._x_runEffects = () => {
        el._x_effects.forEach((i) => i());
      };
    }
    el._x_effects.add(effectReference);
    cleanup = () => {
      if (effectReference === void 0)
        return;
      el._x_effects.delete(effectReference);
      release(effectReference);
    };
  };
  return [wrappedEffect, () => {
    cleanup();
  }];
}
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
  onElAddeds.push(callback);
}
function onElRemoved(callback) {
  onElRemoveds.push(callback);
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups)
    el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name])
    el._x_attributeCleanups[name] = [];
  el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i) => i());
      delete el._x_attributeCleanups[name];
    }
  });
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
  observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
  currentlyObserving = true;
}
function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}
var recordQueue = [];
var willProcessRecordQueue = false;
function flushObserver() {
  recordQueue = recordQueue.concat(observer.takeRecords());
  if (recordQueue.length && !willProcessRecordQueue) {
    willProcessRecordQueue = true;
    queueMicrotask(() => {
      processRecordQueue();
      willProcessRecordQueue = false;
    });
  }
}
function processRecordQueue() {
  onMutate(recordQueue);
  recordQueue.length = 0;
}
function mutateDom(callback) {
  if (!currentlyObserving)
    return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
  isCollecting = true;
}
function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }
  let addedNodes = [];
  let removedNodes = [];
  let addedAttributes = /* @__PURE__ */ new Map();
  let removedAttributes = /* @__PURE__ */ new Map();
  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i].type === "childList") {
      mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
      mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
    }
    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;
      let add = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add();
      } else if (el.hasAttribute(name)) {
        remove();
        add();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => i(el, attrs));
  });
  for (let node of removedNodes) {
    if (addedNodes.includes(node))
      continue;
    onElRemoveds.forEach((i) => i(node));
  }
  addedNodes.forEach((node) => {
    node._x_ignoreSelf = true;
    node._x_ignore = true;
  });
  for (let node of addedNodes) {
    if (removedNodes.includes(node))
      continue;
    if (!node.isConnected)
      continue;
    delete node._x_ignoreSelf;
    delete node._x_ignore;
    onElAddeds.forEach((i) => i(node));
    node._x_ignore = true;
    node._x_ignoreSelf = true;
  }
  addedNodes.forEach((node) => {
    delete node._x_ignoreSelf;
    delete node._x_ignore;
  });
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
  };
}
function refreshScope(element, scope) {
  let existingScope = element._x_dataStack[0];
  Object.entries(scope).forEach(([key, value]) => {
    existingScope[key] = value;
  });
}
function closestDataStack(node) {
  if (node._x_dataStack)
    return node._x_dataStack;
  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }
  if (!node.parentNode) {
    return [];
  }
  return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
  let thisProxy = new Proxy({}, {
    ownKeys: () => {
      return Array.from(new Set(objects.flatMap((i) => Object.keys(i))));
    },
    has: (target, name) => {
      return objects.some((obj) => obj.hasOwnProperty(name));
    },
    get: (target, name) => {
      return (objects.find((obj) => {
        if (obj.hasOwnProperty(name)) {
          let descriptor = Object.getOwnPropertyDescriptor(obj, name);
          if (descriptor.get && descriptor.get._x_alreadyBound || descriptor.set && descriptor.set._x_alreadyBound) {
            return true;
          }
          if ((descriptor.get || descriptor.set) && descriptor.enumerable) {
            let getter = descriptor.get;
            let setter = descriptor.set;
            let property = descriptor;
            getter = getter && getter.bind(thisProxy);
            setter = setter && setter.bind(thisProxy);
            if (getter)
              getter._x_alreadyBound = true;
            if (setter)
              setter._x_alreadyBound = true;
            Object.defineProperty(obj, name, {
              ...property,
              get: getter,
              set: setter
            });
          }
          return true;
        }
        return false;
      }) || {})[name];
    },
    set: (target, name, value) => {
      let closestObjectWithKey = objects.find((obj) => obj.hasOwnProperty(name));
      if (closestObjectWithKey) {
        closestObjectWithKey[name] = value;
      } else {
        objects[objects.length - 1][name] = value;
      }
      return true;
    }
  });
  return thisProxy;
}
function initInterceptors(data2) {
  let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
      if (enumerable === false || value === void 0)
        return;
      let path = basePath === "" ? key : `${basePath}.${key}`;
      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject2(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };
  return recurse(data2);
}
function interceptor(callback, mutateObj = () => {
}) {
  let obj = {
    initialValue: void 0,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
    }
  };
  mutateObj(obj);
  return (initialValue) => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);
      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }
    return obj;
  };
}
function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}
function set(obj, path, value) {
  if (typeof path === "string")
    path = path.split(".");
  if (path.length === 1)
    obj[path[0]] = value;
  else if (path.length === 0)
    throw error;
  else {
    if (obj[path[0]])
      return set(obj[path[0]], path.slice(1), value);
    else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
}
var magics = {};
function magic(name, callback) {
  magics[name] = callback;
}
function injectMagics(obj, el) {
  Object.entries(magics).forEach(([name, callback]) => {
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, { Alpine: alpine_default, interceptor });
      },
      enumerable: false
    });
  });
  return obj;
}
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e) {
    handleError(e, el, expression);
  }
}
function handleError(error2, el, expression = void 0) {
  Object.assign(error2, { el, expression });
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
}
function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)((value) => result = value, extras);
  return result;
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  if (typeof expression === "function") {
    return generateEvaluatorFromFunction(dataStack, expression);
  }
  let evaluator = generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {
  }, { scope = {}, params = [] } = {}) => {
    let result = func.apply(mergeProxies([scope, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }
  let AsyncFunction = Object.getPrototypeOf(async function() {
  }).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression) || /^(let|const)\s/.test(expression) ? `(() => { ${expression} })()` : expression;
  const safeAsyncFunction = () => {
    try {
      return new AsyncFunction(["__self", "scope"], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };
  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {
  }, { scope = {}, params = [] } = {}) => {
    func.result = void 0;
    func.finished = false;
    let completeScope = mergeProxies([scope, ...dataStack]);
    if (typeof func === "function") {
      let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
        func.result = void 0;
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
      }
    }
  };
}
function runIfTypeOfFunction(receiver, value, scope, params, el) {
  if (typeof value === "function") {
    let result = value.apply(scope, params);
    if (result instanceof Promise) {
      result.then((i) => runIfTypeOfFunction(receiver, i, scope, params)).catch((error2) => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else {
    receiver(value);
  }
}
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
  directiveHandlers[name] = callback;
}
function directives(el, attributes, originalAttributeOverride) {
  let transformedAttributeMap = {};
  let directives2 = Array.from(attributes).map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2);
  });
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);
  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length)
      directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };
  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };
  callback(flushHandlers);
  stopDeferring();
}
function getDirectiveHandler(el, directive2) {
  let noop2 = () => {
  };
  let handler3 = directiveHandlers[directive2.type] || noop2;
  let cleanups = [];
  let cleanup = (callback) => cleanups.push(callback);
  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };
  let doCleanup = () => cleanups.forEach((i) => i());
  onAttributeRemoved(el, directive2.original, doCleanup);
  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf)
      return;
    handler3.inline && handler3.inline(el, directive2, utilities);
    handler3 = handler3.bind(handler3, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler3) : handler3();
  };
  fullHandler.runCleanups = doCleanup;
  return fullHandler;
}
var startingWith = (subject, replacement) => ({ name, value }) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return { name, value };
};
var into = (i) => i;
function toTransformedAttributes(callback = () => {
}) {
  return ({ name, value }) => {
    let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, { name, value });
    if (newName !== name)
      callback(newName, name);
    return { name: newName, value: newValue };
  };
}
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
  return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({ name, value }) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => i.replace(".", "")),
      expression: value,
      original
    };
  };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
  "ignore",
  "ref",
  "data",
  "id",
  "bind",
  "init",
  "for",
  "model",
  "transition",
  "show",
  "if",
  DEFAULT,
  "teleport",
  "element"
];
function byPriority(a, b) {
  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
  let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(new CustomEvent(name, {
    detail,
    bubbles: true,
    composed: true,
    cancelable: true
  }));
}
var tickStack = [];
var isHolding = false;
function nextTick(callback) {
  tickStack.push(callback);
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
}
function releaseNextTicks() {
  isHolding = false;
  while (tickStack.length)
    tickStack.shift()();
}
function holdNextTicks() {
  isHolding = true;
}
function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => walk(el2, callback));
    return;
  }
  let skip = false;
  callback(el, () => skip = true);
  if (skip)
    return;
  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
}
function start() {
  if (!document.body)
    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded((el) => initTree(el, walk));
  onElRemoved((el) => destroyTree(el));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => handle());
  });
  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
  Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => fn());
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, (element) => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some((selector) => element.matches(selector)))
      return true;
  });
}
function findClosest(el, callback) {
  if (!el)
    return;
  if (callback(el))
    return el;
  if (el._x_teleportBack)
    el = el._x_teleportBack;
  if (!el.parentElement)
    return;
  return findClosest(el.parentElement, callback);
}
function isRoot(el) {
  return rootSelectors().some((selector) => el.matches(selector));
}
function initTree(el, walker = walk) {
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      directives(el2, el2.attributes).forEach((handle) => handle());
      el2._x_ignore && skip();
    });
  });
}
function destroyTree(root) {
  walk(root, (el) => cleanupAttributes(el));
}
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }
  return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
  let split = (classString2) => classString2.split(" ").filter(Boolean);
  let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
  let addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };
  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);
  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });
  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });
  return () => {
    removed.forEach((i) => el.classList.add(i));
    added.forEach((i) => el.classList.remove(i));
  };
}
function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }
  return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    el.style.setProperty(kebabCase(key), value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}
function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache || "");
  };
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function once(callback, fallback = () => {
}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === "function")
    expression = evaluate2(expression);
  if (!expression) {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    enter: (classes) => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": (classes) => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": (classes) => {
      el._x_transition.enter.end = classes;
    },
    leave: (classes) => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": (classes) => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": (classes) => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
  }
  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
  }
  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay = modifierValue(modifiers, "delay", 0);
  let origin = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: delay,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: delay,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition)
    el._x_transition = {
      enter: { during: defaultValue, start: defaultValue, end: defaultValue },
      leave: { during: defaultValue, start: defaultValue, end: defaultValue },
      in(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, before, after);
      },
      out(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, before, after);
      }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
  let clickAwayCompatibleShow = () => {
    document.visibilityState === "visible" ? requestAnimationFrame(show) : setTimeout(show);
  };
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }
    return;
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {
    }, () => resolve(hide));
    el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);
    if (closest) {
      if (!closest._x_hideChildren)
        closest._x_hideChildren = [];
      closest._x_hideChildren.push(el);
    } else {
      queueMicrotask(() => {
        let hideAfterChildren = (el2) => {
          let carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren)
          ]).then(([i]) => i());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };
        hideAfterChildren(el).catch((e) => {
          if (!e.isFromCancelledTransition)
            throw e;
        });
      });
    }
  });
};
function closestHide(el) {
  let parent = el.parentNode;
  if (!parent)
    return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
}, after = () => {
}) {
  if (el._x_transitioning)
    el._x_transitioning.cancel();
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }
  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },
    during() {
      undoDuring = setFunction(el, during);
    },
    before,
    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },
    after,
    cleanup() {
      undoDuring();
      undoEnd();
    }
  });
}
function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore)
        stages.before();
      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }
      stages.after();
      if (el.isConnected)
        stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },
    cancel: once(function() {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }
      ;
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted)
      return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
    let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    if (duration === 0)
      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay);
      reachedEnd = true;
    });
  });
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "scale") {
    if (isNaN(rawValue))
      return fallback;
  }
  if (key === "duration") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }
  return rawValue;
}
var isCloning = false;
function skipDuringClone(callback, fallback = () => {
}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}
function clone2(oldEl, newEl) {
  if (!newEl._x_dataStack)
    newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false;
  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3))
        return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };
  initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {
    };
  });
  callback();
  overrideEffect(cache);
}
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
function throttle(func, limit) {
  let inThrottle;
  return function() {
    let context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
function plugin(callback) {
  callback(alpine_default);
}
var stores = {};
var isReactive = false;
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }
  if (value === void 0) {
    return stores[name];
  }
  stores[name] = value;
  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }
  initInterceptors(stores[name]);
}
function getStores() {
  return stores;
}
var datas = {};
function data(name, callback) {
  datas[name] = callback;
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },
      enumerable: false
    });
  });
  return obj;
}
var Alpine = {
  get reactive() {
    return reactive;
  },
  get release() {
    return release;
  },
  get effect() {
    return effect;
  },
  get raw() {
    return raw;
  },
  version: "3.7.1",
  flushAndStopDeferringMutations,
  disableEffectScheduling,
  setReactivityEngine,
  closestDataStack,
  skipDuringClone,
  addRootSelector,
  addInitSelector,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  setEvaluator,
  mergeProxies,
  closestRoot,
  interceptor,
  transition,
  setStyles,
  mutateDom,
  directive,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone: clone2,
  data
};
var alpine_default = Alpine;
var import_reactivity9 = __toModule(require_reactivity());
magic("nextTick", () => nextTick);
magic("dispatch", (el) => dispatch.bind(dispatch, el));
magic("watch", (el) => (key, callback) => {
  let evaluate2 = evaluateLater(el, key);
  let firstTime = true;
  let oldValue;
  effect(() => evaluate2((value) => {
    JSON.stringify(value);
    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue);
        oldValue = value;
      });
    } else {
      oldValue = value;
    }
    firstTime = false;
  }));
});
magic("store", getStores);
magic("data", (el) => {
  return mergeProxies(closestDataStack(el));
});
magic("root", (el) => closestRoot(el));
magic("refs", (el) => {
  if (el._x_refs_proxy)
    return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
  let refObjects = [];
  let currentEl = el;
  while (currentEl) {
    if (currentEl._x_refs)
      refObjects.push(currentEl._x_refs);
    currentEl = currentEl.parentNode;
  }
  return refObjects;
}
var globalIdMemo = {};
function findAndIncrementId(name) {
  if (!globalIdMemo[name])
    globalIdMemo[name] = 0;
  return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
  return findClosest(el, (element) => {
    if (element._x_ids && element._x_ids[name])
      return true;
  });
}
function setIdRoot(el, name) {
  if (!el._x_ids)
    el._x_ids = {};
  if (!el._x_ids[name])
    el._x_ids[name] = findAndIncrementId(name);
}
magic("id", (el) => (name, key = null) => {
  let root = closestIdRoot(el, name);
  let id = root ? root._x_ids[name] : findAndIncrementId(name);
  return key ? new AlpineId(`${name}-${id}-${key}`) : new AlpineId(`${name}-${id}`);
});
var AlpineId = class {
  constructor(id) {
    this.id = id;
  }
  toString() {
    return this.id;
  }
};
magic("el", (el) => el);
directive("teleport", (el, { expression }, { cleanup }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-teleport can only be used on a <template> tag", el);
  let target = document.querySelector(expression);
  if (!target)
    warn(`Cannot find x-teleport element for selector: "${expression}"`);
  let clone22 = el.content.cloneNode(true).firstElementChild;
  el._x_teleport = clone22;
  clone22._x_teleportBack = el;
  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach((eventName) => {
      clone22.addEventListener(eventName, (e) => {
        e.stopPropagation();
        el.dispatchEvent(new e.constructor(e.type, e));
      });
    });
  }
  addScopeToNode(clone22, {}, el);
  mutateDom(() => {
    target.appendChild(clone22);
    initTree(clone22);
    clone22._x_ignore = true;
  });
  cleanup(() => clone22.remove());
});
var handler = () => {
};
handler.inline = (el, { modifiers }, { cleanup }) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};
directive("ignore", handler);
directive("effect", (el, { expression }, { effect: effect3 }) => effect3(evaluateLater(el, expression)));
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings)
    el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;
  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;
    case "style":
      bindStyles(el, value);
      break;
    case "class":
      bindClasses(el, value);
      break;
    default:
      bindAttribute(el, name, value);
      break;
  }
}
function bindInputValue(el, value) {
  if (el.type === "radio") {
    if (el.attributes.value === void 0) {
      el.value = value;
    }
    if (window.fromModel) {
      el.checked = checkedAttrLooseCompare(el.value, value);
    }
  } else if (el.type === "checkbox") {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Number.isInteger(value) && !Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value)
      return;
    el.value = value;
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses)
    el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles)
    el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name))
      value = name;
    setIfChanged(el, name, value);
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return value2 + "";
  });
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}
function isBooleanAttr(attrName) {
  const booleanAttributes = [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule"
  ];
  return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded"].includes(name);
}
function on(el, event, modifiers, callback) {
  let listenerTarget = el;
  let handler3 = (e) => callback(e);
  let options = {};
  let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
  if (modifiers.includes("dot"))
    event = dotSyntax(event);
  if (modifiers.includes("camel"))
    event = camelCase2(event);
  if (modifiers.includes("passive"))
    options.passive = true;
  if (modifiers.includes("capture"))
    options.capture = true;
  if (modifiers.includes("window"))
    listenerTarget = window;
  if (modifiers.includes("document"))
    listenerTarget = document;
  if (modifiers.includes("prevent"))
    handler3 = wrapHandler(handler3, (next, e) => {
      e.preventDefault();
      next(e);
    });
  if (modifiers.includes("stop"))
    handler3 = wrapHandler(handler3, (next, e) => {
      e.stopPropagation();
      next(e);
    });
  if (modifiers.includes("self"))
    handler3 = wrapHandler(handler3, (next, e) => {
      e.target === el && next(e);
    });
  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler3 = wrapHandler(handler3, (next, e) => {
      if (el.contains(e.target))
        return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1)
        return;
      if (el._x_isShown === false)
        return;
      next(e);
    });
  }
  handler3 = wrapHandler(handler3, (next, e) => {
    if (isKeyEvent(event)) {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return;
      }
    }
    next(e);
  });
  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler3 = debounce(handler3, wait);
  }
  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler3 = throttle(handler3, wait);
  }
  if (modifiers.includes("once")) {
    handler3 = wrapHandler(handler3, (next, e) => {
      next(e);
      listenerTarget.removeEventListener(event, handler3, options);
    });
  }
  listenerTarget.addEventListener(event, handler3, options);
  return () => {
    listenerTarget.removeEventListener(event, handler3, options);
  };
}
function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter((i) => {
    return !["window", "document", "prevent", "stop", "once"].includes(i);
  });
  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.length === 0)
    return false;
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
    return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === "cmd" || modifier === "super")
        modifier = "meta";
      return e[`${modifier}Key`];
    });
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (keyToModifiers(e.key).includes(keyModifiers[0]))
        return false;
    }
  }
  return true;
}
function keyToModifiers(key) {
  if (!key)
    return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    ctrl: "control",
    slash: "/",
    space: "-",
    spacebar: "-",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    equal: "="
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key)
      return modifier;
  }).filter((modifier) => modifier);
}
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup }) => {
  let evaluate2 = evaluateLater(el, expression);
  let assignmentExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
  let evaluateAssignment = evaluateLater(el, assignmentExpression);
  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
  let assigmentFunction = generateAssignmentFunction(el, modifiers, expression);
  let removeListener = on(el, event, modifiers, (e) => {
    evaluateAssignment(() => {
    }, { scope: {
      $event: e,
      rightSideOfExpression: assigmentFunction
    } });
  });
  cleanup(() => removeListener());
  let evaluateSetModel = evaluateLater(el, `${expression} = __placeholder`);
  el._x_model = {
    get() {
      let result;
      evaluate2((value) => result = value);
      return result;
    },
    set(value) {
      evaluateSetModel(() => {
      }, { scope: { __placeholder: value } });
    }
  };
  el._x_forceModelUpdate = () => {
    evaluate2((value) => {
      if (value === void 0 && expression.match(/\./))
        value = "";
      window.fromModel = true;
      mutateDom(() => bind(el, "value", value));
      delete window.fromModel;
    });
  };
  effect3(() => {
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
      return;
    el._x_forceModelUpdate();
  });
});
function generateAssignmentFunction(el, modifiers, expression) {
  if (el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name"))
        el.setAttribute("name", expression);
    });
  }
  return (event, currentValue) => {
    return mutateDom(() => {
      if (event instanceof CustomEvent && event.detail !== void 0) {
        return event.detail || event.target.value;
      } else if (el.type === "checkbox") {
        if (Array.isArray(currentValue)) {
          let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
        return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
          let rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map((option) => {
          return option.value || option.text;
        });
      } else {
        let rawValue = event.target.value;
        return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
      }
    });
  };
}
function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate(el, expression, {}, false);
  }
  return evaluate(el, expression, {}, false);
}));
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
});
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      el.innerHTML = value;
    });
  });
});
mapAttributes(startingWith(":", into(prefix("bind:"))));
directive("bind", (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
  if (!value)
    return applyBindingsObject(el, expression, original, effect3);
  if (value === "key")
    return storeKeyForXFor(el, expression);
  let evaluate2 = evaluateLater(el, expression);
  effect3(() => evaluate2((result) => {
    if (result === void 0 && expression.match(/\./))
      result = "";
    mutateDom(() => bind(el, value, result, modifiers));
  }));
});
function applyBindingsObject(el, expression, original, effect3) {
  let getBindings = evaluateLater(el, expression);
  let cleanupRunners = [];
  effect3(() => {
    while (cleanupRunners.length)
      cleanupRunners.pop()();
    getBindings((bindings) => {
      let attributes = Object.entries(bindings).map(([name, value]) => ({ name, value }));
      let staticAttributes = attributesOnly(attributes);
      attributes = attributes.map((attribute) => {
        if (staticAttributes.find((attr) => attr.name === attribute.name)) {
          return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
          };
        }
        return attribute;
      });
      directives(el, attributes, original).map((handle) => {
        cleanupRunners.push(handle.runCleanups);
        handle();
      });
    });
  });
}
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
}
addRootSelector(() => `[${prefix("data")}]`);
directive("data", skipDuringClone((el, { expression }, { cleanup }) => {
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, { scope: dataProviderContext });
  if (data2 === void 0)
    data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup(() => {
    undo();
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
  });
}));
directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
  let evaluate2 = evaluateLater(el, expression);
  let hide = () => mutateDom(() => {
    el.style.display = "none";
    el._x_isShown = false;
  });
  let show = () => mutateDom(() => {
    if (el.style.length === 1 && el.style.display === "none") {
      el.removeAttribute("style");
    } else {
      el.style.removeProperty("display");
    }
    el._x_isShown = true;
  });
  let clickAwayCompatibleShow = () => setTimeout(show);
  let toggle = once((value) => value ? show() : hide(), (value) => {
    if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
      el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
    } else {
      value ? clickAwayCompatibleShow() : hide();
    }
  });
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate2((value) => {
    if (!firstTime && value === oldValue)
      return;
    if (modifiers.includes("immediate"))
      value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
});
directive("for", (el, { expression }, { effect: effect3, cleanup }) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(el, el._x_keyExpression || "index");
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup(() => {
    Object.values(el._x_lookup).forEach((el2) => el2.remove());
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
  let templateEl = el;
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i) => i + 1);
    }
    if (items === void 0)
      items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];
    if (isObject2(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey((value2) => keys.push(value2), { scope: { index: key, ...scope } });
        scopes.push(scope);
      });
    } else {
      for (let i = 0; i < items.length; i++) {
        let scope = getIterationScopeVariables(iteratorNames, items[i], i, items);
        evaluateKey((value) => keys.push(value), { scope: { index: i, ...scope } });
        scopes.push(scope);
      }
    }
    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];
    for (let i = 0; i < prevKeys.length; i++) {
      let key = prevKeys[i];
      if (keys.indexOf(key) === -1)
        removes.push(key);
    }
    prevKeys = prevKeys.filter((key) => !removes.includes(key));
    let lastKey = "template";
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let prevIndex = prevKeys.indexOf(key);
      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key);
        adds.push([lastKey, i]);
      } else if (prevIndex !== i) {
        let keyInSpot = prevKeys.splice(i, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }
      lastKey = key;
    }
    for (let i = 0; i < removes.length; i++) {
      let key = removes[i];
      lookup[key].remove();
      lookup[key] = null;
      delete lookup[key];
    }
    for (let i = 0; i < moves.length; i++) {
      let [keyInSpot, keyForSpot] = moves[i];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
        marker.before(elInSpot);
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
        marker.remove();
      });
      refreshScope(elForSpot, scopes[keys.indexOf(keyForSpot)]);
    }
    for (let i = 0; i < adds.length; i++) {
      let [lastKey2, index] = adds[i];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      if (lastEl._x_currentIfEl)
        lastEl = lastEl._x_currentIfEl;
      let scope = scopes[index];
      let key = keys[index];
      let clone22 = document.importNode(templateEl.content, true).firstElementChild;
      addScopeToNode(clone22, reactive(scope), templateEl);
      mutateDom(() => {
        lastEl.after(clone22);
        initTree(clone22);
      });
      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }
      lookup[key] = clone22;
    }
    for (let i = 0; i < sames.length; i++) {
      refreshScope(lookup[sames[i]], scopes[keys.indexOf(sames[i])]);
    }
    templateEl._x_prevKeys = keys;
  });
}
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch)
    return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }
  return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
    names.forEach((name, i) => {
      scopeVariables[name] = item[i];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
    names.forEach((name) => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }
  if (iteratorNames.index)
    scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection)
    scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function handler2() {
}
handler2.inline = (el, { expression }, { cleanup }) => {
  let root = closestRoot(el);
  if (!root._x_refs)
    root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup(() => delete root._x_refs[expression]);
};
directive("ref", handler2);
directive("if", (el, { expression }, { effect: effect3, cleanup }) => {
  let evaluate2 = evaluateLater(el, expression);
  let show = () => {
    if (el._x_currentIfEl)
      return el._x_currentIfEl;
    let clone22 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone22, {}, el);
    mutateDom(() => {
      el.after(clone22);
      initTree(clone22);
    });
    el._x_currentIfEl = clone22;
    el._x_undoIf = () => {
      clone22.remove();
      delete el._x_currentIfEl;
    };
    return clone22;
  };
  let hide = () => {
    if (!el._x_undoIf)
      return;
    el._x_undoIf();
    delete el._x_undoIf;
  };
  effect3(() => evaluate2((value) => {
    value ? show() : hide();
  }));
  cleanup(() => el._x_undoIf && el._x_undoIf());
});
directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
  let names = evaluate2(expression);
  names.forEach((name) => setIdRoot(el, name));
});
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup }) => {
  let evaluate2 = expression ? evaluateLater(el, expression) : () => {
  };
  if (el.tagName.toLowerCase() === "template") {
    if (!el._x_forwardEvents)
      el._x_forwardEvents = [];
    if (!el._x_forwardEvents.includes(value))
      el._x_forwardEvents.push(value);
  }
  let removeListener = on(el, value, modifiers, (e) => {
    evaluate2(() => {
    }, { scope: { $event: e }, params: [e] });
  });
  cleanup(() => removeListener());
}));
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({ reactive: import_reactivity9.reactive, effect: import_reactivity9.effect, release: import_reactivity9.stop, raw: import_reactivity9.toRaw });
var src_default = alpine_default;
var module_default = src_default;

// js/react/src/nami/loader.js
var Loader = class {
  async load() {
    if (this._wasm)
      return;
    this._wasm = await init_cardano_serialization_lib_bg3().then(() => cardano_serialization_lib_bg_exports);
  }
  get Cardano() {
    return this._wasm;
  }
};
var loader_default = new Loader();

// js/react/src/nami/coinSelection.js
var BigInt3 = typeof window !== "undefined" && window.BigInt;
var protocolParameters = null;
var CoinSelection = {
  setProtocolParameters: (minUTxO, minFeeA, minFeeB, maxTxSize) => {
    protocolParameters = {
      minUTxO,
      minFeeA,
      minFeeB,
      maxTxSize
    };
  },
  randomImprove: async (inputs, outputs, limit) => {
    if (!protocolParameters)
      throw new Error("Protocol parameters not set. Use setProtocolParameters().");
    await loader_default.load();
    const _minUTxOValue = BigInt3(outputs.len()) * BigInt3(protocolParameters.minUTxO);
    let utxoSelection = {
      selection: [],
      remaining: [...inputs],
      subset: [],
      amount: loader_default.Cardano.Value.new(loader_default.Cardano.BigNum.from_str("0"))
    };
    let mergedOutputsAmounts = mergeOutputsAmounts(outputs);
    let splitOutputsAmounts = splitAmounts(mergedOutputsAmounts);
    splitOutputsAmounts.forEach((output) => {
      createSubSet(utxoSelection, output);
      try {
        utxoSelection = randomSelect(cloneUTxOSelection(utxoSelection), output, limit - utxoSelection.selection.length, _minUTxOValue);
      } catch (e) {
        if (e.message === "INPUT_LIMIT_EXCEEDED") {
          utxoSelection = descSelect(utxoSelection, output, limit - utxoSelection.selection.length, _minUTxOValue);
        } else {
          throw e;
        }
      }
    });
    splitOutputsAmounts = sortAmountList(splitOutputsAmounts);
    splitOutputsAmounts.forEach((output) => {
      createSubSet(utxoSelection, output);
      let range2 = {};
      range2.ideal = loader_default.Cardano.Value.new(loader_default.Cardano.BigNum.from_str("0")).checked_add(output).checked_add(output);
      range2.maximum = loader_default.Cardano.Value.new(loader_default.Cardano.BigNum.from_str("0")).checked_add(range2.ideal).checked_add(output);
      improve(utxoSelection, output, limit - utxoSelection.selection.length, range2);
    });
    return {
      input: utxoSelection.selection,
      output: outputs,
      remaining: utxoSelection.remaining,
      amount: utxoSelection.amount,
      change: utxoSelection.amount.checked_sub(mergedOutputsAmounts)
    };
  }
};
function randomSelect(utxoSelection, outputAmount, limit, minUTxOValue) {
  let nbFreeUTxO = utxoSelection.subset.length;
  if (isQtyFulfilled(outputAmount, utxoSelection.amount, minUTxOValue, nbFreeUTxO)) {
    utxoSelection.remaining = [
      ...utxoSelection.remaining,
      ...utxoSelection.subset
    ];
    utxoSelection.subset = [];
    return utxoSelection;
  }
  if (limit <= 0) {
    throw new Error("INPUT_LIMIT_EXCEEDED");
  }
  if (nbFreeUTxO <= 0) {
    if (isQtyFulfilled(outputAmount, utxoSelection.amount, 0, 0)) {
      throw new Error("MIN_UTXO_ERROR");
    }
    throw new Error("INPUTS_EXHAUSTED");
  }
  let utxo = utxoSelection.subset.splice(Math.floor(Math.random() * nbFreeUTxO), 1).pop();
  utxoSelection.selection.push(utxo);
  utxoSelection.amount = addAmounts(utxo.output().amount(), utxoSelection.amount);
  return randomSelect(utxoSelection, outputAmount, limit - 1, minUTxOValue);
}
function descSelect(utxoSelection, outputAmount, limit, minUTxOValue) {
  utxoSelection.subset = utxoSelection.subset.sort((utxoA, utxoB) => utxoB.output().amount().compare(utxoA.output().amount()));
  do {
    if (limit <= 0) {
      throw new Error("INPUT_LIMIT_EXCEEDED");
    }
    if (utxoSelection.subset.length <= 0) {
      if (isQtyFulfilled(outputAmount, utxoSelection.amount, 0, 0)) {
        throw new Error("MIN_UTXO_ERROR");
      }
      throw new Error("INPUTS_EXHAUSTED");
    }
    let utxo = utxoSelection.subset.splice(0, 1).pop();
    utxoSelection.selection.push(utxo);
    utxoSelection.amount = addAmounts(utxo.output().amount(), utxoSelection.amount);
    limit--;
  } while (!isQtyFulfilled(outputAmount, utxoSelection.amount, minUTxOValue, utxoSelection.subset.length - 1));
  utxoSelection.remaining = [
    ...utxoSelection.remaining,
    ...utxoSelection.subset
  ];
  utxoSelection.subset = [];
  return utxoSelection;
}
function improve(utxoSelection, outputAmount, limit, range2) {
  let nbFreeUTxO = utxoSelection.subset.length;
  if (utxoSelection.amount.compare(range2.ideal) >= 0 || nbFreeUTxO <= 0 || limit <= 0) {
    utxoSelection.remaining = [
      ...utxoSelection.remaining,
      ...utxoSelection.subset
    ];
    utxoSelection.subset = [];
    return;
  }
  const utxo = utxoSelection.subset.splice(Math.floor(Math.random() * nbFreeUTxO), 1).pop();
  const newAmount = loader_default.Cardano.Value.new(loader_default.Cardano.BigNum.from_str("0")).checked_add(utxo.output().amount()).checked_add(outputAmount);
  if (abs(getAmountValue(range2.ideal) - getAmountValue(newAmount)) < abs(getAmountValue(range2.ideal) - getAmountValue(outputAmount)) && newAmount.compare(range2.maximum) <= 0) {
    utxoSelection.selection.push(utxo);
    utxoSelection.amount = addAmounts(utxo.output().amount(), utxoSelection.amount);
    limit--;
  } else {
    utxoSelection.remaining.push(utxo);
  }
  return improve(utxoSelection, outputAmount, limit, range2);
}
function mergeOutputsAmounts(outputs) {
  let compiledAmountList = loader_default.Cardano.Value.new(loader_default.Cardano.BigNum.from_str("0"));
  for (let i = 0; i < outputs.len(); i++) {
    compiledAmountList = addAmounts(outputs.get(i).amount(), compiledAmountList);
  }
  return compiledAmountList;
}
function addAmounts(amounts, compiledAmounts) {
  return compiledAmounts.checked_add(amounts);
}
function splitAmounts(amounts) {
  let splitAmounts2 = [];
  if (amounts.multiasset()) {
    let mA = amounts.multiasset();
    for (let i = 0; i < mA.keys().len(); i++) {
      let scriptHash = mA.keys().get(i);
      for (let j = 0; j < mA.get(scriptHash).keys().len(); j++) {
        let _assets = loader_default.Cardano.Assets.new();
        let assetName = mA.get(scriptHash).keys().get(j);
        _assets.insert(loader_default.Cardano.AssetName.from_bytes(assetName.to_bytes()), loader_default.Cardano.BigNum.from_bytes(mA.get(scriptHash).get(assetName).to_bytes()));
        let _multiasset = loader_default.Cardano.MultiAsset.new();
        _multiasset.insert(loader_default.Cardano.ScriptHash.from_bytes(scriptHash.to_bytes()), _assets);
        let _value = loader_default.Cardano.Value.new(loader_default.Cardano.BigNum.from_str("0"));
        _value.set_multiasset(_multiasset);
        splitAmounts2.push(_value);
      }
    }
  }
  splitAmounts2 = sortAmountList(splitAmounts2, "DESC");
  splitAmounts2.push(loader_default.Cardano.Value.new(loader_default.Cardano.BigNum.from_bytes(amounts.coin().to_bytes())));
  return splitAmounts2;
}
function sortAmountList(amountList, sortOrder = "ASC") {
  return amountList.sort((a, b) => {
    let sortInt = sortOrder === "DESC" ? BigInt3(-1) : BigInt3(1);
    return Number((getAmountValue(a) - getAmountValue(b)) * sortInt);
  });
}
function getAmountValue(amount) {
  let val = BigInt3(0);
  let lovelace = BigInt3(amount.coin().to_str());
  if (lovelace > 0) {
    val = lovelace;
  } else if (amount.multiasset() && amount.multiasset().len() > 0) {
    let scriptHash = amount.multiasset().keys().get(0);
    let assetName = amount.multiasset().get(scriptHash).keys().get(0);
    val = BigInt3(amount.multiasset().get(scriptHash).get(assetName).to_str());
  }
  return val;
}
function createSubSet(utxoSelection, output) {
  if (BigInt3(output.coin().to_str()) < BigInt3(1)) {
    utxoSelection.remaining.forEach((utxo, index) => {
      if (output.compare(utxo.output().amount()) !== void 0) {
        utxoSelection.subset.push(utxoSelection.remaining.splice(index, 1).pop());
      }
    });
  } else {
    utxoSelection.subset = utxoSelection.remaining.splice(0, utxoSelection.remaining.length);
  }
}
function isQtyFulfilled(outputAmount, cumulatedAmount, minUTxOValue, nbFreeUTxO) {
  let amount = outputAmount;
  if (minUTxOValue && BigInt3(outputAmount.coin().to_str()) > 0) {
    let minAmount = loader_default.Cardano.Value.new(loader_default.Cardano.min_ada_required(cumulatedAmount, loader_default.Cardano.BigNum.from_str(minUTxOValue.toString())));
    if (cumulatedAmount.compare(minAmount) < 0)
      return false;
    if (outputAmount.compare(minAmount) < 0) {
      amount = minAmount.checked_add(loader_default.Cardano.Value.new(loader_default.Cardano.BigNum.from_str(protocolParameters.minUTxO)));
    }
    if (nbFreeUTxO > 0) {
      let maxFee = BigInt3(protocolParameters.minFeeA) * BigInt3(protocolParameters.maxTxSize) + BigInt3(protocolParameters.minFeeB);
      maxFee = loader_default.Cardano.Value.new(loader_default.Cardano.BigNum.from_str(maxFee.toString()));
      amount = amount.checked_add(maxFee);
    }
  }
  return cumulatedAmount.compare(amount) >= 0;
}
function cloneUTxOSelection(utxoSelection) {
  return {
    selection: cloneUTxOList(utxoSelection.selection),
    remaining: cloneUTxOList(utxoSelection.remaining),
    subset: cloneUTxOList(utxoSelection.subset),
    amount: cloneValue(utxoSelection.amount)
  };
}
var cloneUTxOList = (utxoList) => utxoList.map((utxo) => loader_default.Cardano.TransactionUnspentOutput.from_bytes(utxo.to_bytes()));
var cloneValue = (value) => loader_default.Cardano.Value.from_bytes(value.to_bytes());
function abs(big) {
  return big < 0 ? big * BigInt3(-1) : big;
}
var coinSelection_default = CoinSelection;

// js/react/src/nami/nami.js
var import_buffer = __toESM(require_buffer());
var import_cip14_js = __toESM(require_cip14_js());
async function Cardano() {
  await loader_default.load();
  return loader_default.Cardano;
}
var ERROR = {
  FAILED_PROTOCOL_PARAMETER: "Couldnt fetch protocol parameters from blockfrost",
  TX_TOO_BIG: "Transaction too big"
};
var NamiWalletApi = class {
  constructor(serilizationLib, nami2, apiKey) {
    this.apiKey = apiKey;
    this.Nami = nami2;
    this.S = serilizationLib;
  }
  async isInstalled() {
    if (this.Nami)
      return true;
    else
      return false;
  }
  async isEnabled() {
    return await this.Nami.isEnabled();
  }
  async enable() {
    if (!await this.isEnabled()) {
      try {
        return await this.Nami.enable();
      } catch (error2) {
        throw error2;
      }
    }
  }
  async getAddress() {
    if (!this.isEnabled())
      throw ERROR.NOT_CONNECTED;
    const addressHex = import_buffer.Buffer.from((await this.Nami.getUsedAddresses())[0], "hex");
    const address2 = this.S.BaseAddress.from_address(this.S.Address.from_bytes(addressHex)).to_address().to_bech32();
    return address2;
  }
  async getHexAddress() {
    const addressHex = import_buffer.Buffer.from((await window.cardano.getUsedAddresses())[0], "hex");
    return addressHex;
  }
  async getNetworkId() {
    if (!this.isEnabled())
      throw ERROR.NOT_CONNECTED;
    let networkId2 = await this.Nami.getNetworkId();
    return {
      id: networkId2,
      network: networkId2 === 1 ? "mainnet" : "testnet"
    };
  }
  async getBalance() {
    if (!this.isEnabled()) {
      await this.enable();
    }
    let networkId2 = await this.getNetworkId();
    let protocolParameter = await this._getProtocolParameter(networkId2.id);
    const valueCBOR = await this.Nami.getBalance();
    const value = this.S.Value.from_bytes(import_buffer.Buffer.from(valueCBOR, "hex"));
    const utxos = await this.Nami.getUtxos();
    const parsedUtxos = utxos.map((utxo) => this.S.TransactionUnspentOutput.from_bytes(import_buffer.Buffer.from(utxo, "hex")));
    let countedValue = this.S.Value.new(this.S.BigNum.from_str("0"));
    parsedUtxos.forEach((element) => {
      countedValue = countedValue.checked_add(element.output().amount());
    });
    const minAda = this.S.min_ada_required(countedValue, this.S.BigNum.from_str(protocolParameter.minUtxo));
    const availableAda = countedValue.coin().checked_sub(minAda);
    const lovelace = availableAda.to_str();
    console.log("assets", protocolParameter.minUtxo);
    const assets = [];
    if (value.multiasset()) {
      const multiAssets = value.multiasset().keys();
      for (let j = 0; j < multiAssets.len(); j++) {
        const policy = multiAssets.get(j);
        const policyAssets = value.multiasset().get(policy);
        const assetNames = policyAssets.keys();
        for (let k = 0; k < assetNames.len(); k++) {
          const policyAsset = assetNames.get(k);
          const quantity = policyAssets.get(policyAsset);
          const asset = import_buffer.Buffer.from(policy.to_bytes(), "hex").toString("hex") + import_buffer.Buffer.from(policyAsset.name(), "hex").toString("hex");
          const _policy = asset.slice(0, 56);
          const _name = asset.slice(56);
          const fingerprint = new import_cip14_js.default(import_buffer.Buffer.from(_policy, "hex"), import_buffer.Buffer.from(_name, "hex")).fingerprint();
          assets.push({
            unit: asset,
            quantity: quantity.to_str(),
            policy: _policy,
            name: HexToAscii(_name),
            fingerprint
          });
        }
      }
    }
    return {
      "lovelace": lovelace,
      "assets": assets
    };
  }
  getApiKey(networkId2) {
    if (networkId2 == 0) {
      return this.apiKey[0];
    } else {
      return this.apiKey[1];
    }
  }
  async registerPolicy(policy) {
    fetch(`https://pool.pm/register/policy/${policy.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type: "all",
        scripts: [
          {
            keyHash: policy.paymentKeyHash,
            type: "sig"
          },
          { slot: policy.ttl, type: "before" }
        ]
      })
    }).then((res) => res.json()).then(console.log);
  }
  async getUtxos(utxos) {
    let Utxos = utxos.map((u) => this.S.TransactionUnspentOutput.from_bytes(import_buffer.Buffer.from(u, "hex")));
    let UTXOS = [];
    for (let utxo of Utxos) {
      let assets = this._utxoToAssets(utxo);
      UTXOS.push({
        txHash: import_buffer.Buffer.from(utxo.input().transaction_id().to_bytes(), "hex").toString("hex"),
        txId: utxo.input().index(),
        amount: assets
      });
    }
    return UTXOS;
  }
  async getUtxosHex() {
    return await this.Nami.getUtxos();
  }
  async transaction({
    PaymentAddress = "",
    recipients = [],
    metadata = null,
    metadataHash = null,
    addMetadata = true,
    utxosRaw = [],
    networkId: networkId2 = 0,
    ttl = 3600,
    multiSig = false
  }) {
    let utxos = utxosRaw.map((u) => this.S.TransactionUnspentOutput.from_bytes(import_buffer.Buffer.from(u, "hex")));
    let protocolParameter = await this._getProtocolParameter(networkId2);
    let mintedAssetsArray = [];
    let outputs = this.S.TransactionOutputs.new();
    let minting = 0;
    let outputValues = {};
    let costValues = {};
    for (let recipient of recipients) {
      let lovelace = Math.floor((recipient.amount || 0) * 1e6).toString();
      let ReceiveAddress = recipient.address;
      let multiAsset = this._makeMultiAsset(recipient?.assets || []);
      let mintedAssets = this._makeMintedAssets(recipient?.mintedAssets || []);
      let outputValue = this.S.Value.new(this.S.BigNum.from_str(lovelace));
      let minAdaMint = this.S.Value.new(this.S.BigNum.from_str("0"));
      if ((recipient?.assets || []).length > 0) {
        outputValue.set_multiasset(multiAsset);
        let minAda = this.S.min_ada_required(outputValue, this.S.BigNum.from_str(protocolParameter.minUtxo));
        if (this.S.BigNum.from_str(lovelace).compare(minAda) < 0)
          outputValue.set_coin(minAda);
      }
      (recipient?.mintedAssets || []).map((asset) => {
        minting += 1;
        mintedAssetsArray.push({
          ...asset,
          address: recipient.address
        });
      });
      if (parseInt(outputValue.coin().to_str()) > 0) {
        outputValues[recipient.address] = outputValue;
      }
      if ((recipient.mintedAssets || []).length > 0) {
        minAdaMint = this.S.min_ada_required(mintedAssets, this.S.BigNum.from_str(protocolParameter.minUtxo));
        let requiredMintAda = this.S.Value.new(this.S.BigNum.from_str("0"));
        requiredMintAda.set_coin(minAdaMint);
        if (outputValue.coin().to_str() == 0) {
          outputValue = requiredMintAda;
        } else {
          outputValue = outputValue.checked_add(requiredMintAda);
        }
      }
      if (ReceiveAddress != PaymentAddress)
        costValues[ReceiveAddress] = outputValue;
      outputValues[ReceiveAddress] = outputValue;
      if (parseInt(outputValue.coin().to_str()) > 0) {
        outputs.add(this.S.TransactionOutput.new(this.S.Address.from_bech32(ReceiveAddress), outputValue));
      }
    }
    let RawTransaction = null;
    if (minting > 0) {
      outputValues[PaymentAddress] = this.S.Value.new(this.S.BigNum.from_str("0"));
      RawTransaction = await this._txBuilderMinting({
        PaymentAddress,
        Utxos: utxos,
        Outputs: outputs,
        mintedAssetsArray,
        outputValues,
        ProtocolParameter: protocolParameter,
        metadata,
        metadataHash,
        addMetadata,
        multiSig,
        ttl,
        costValues
      });
    } else {
      RawTransaction = await this._txBuilder({
        PaymentAddress,
        Utxos: utxos,
        Outputs: outputs,
        ProtocolParameter: protocolParameter,
        Metadata: metadata,
        Delegation: null
      });
    }
    return import_buffer.Buffer.from(RawTransaction, "hex").toString("hex");
  }
  async createLockingPolicyScript(address2, networkId2, expirationTime) {
    var now = new Date();
    const protocolParameters2 = await this._getProtocolParameter(networkId2);
    const slot = parseInt(protocolParameters2.slot);
    const duration = expirationTime.getTime() - now.getTime();
    const ttl = slot + duration;
    const paymentKeyHash = this.S.BaseAddress.from_address(this.S.Address.from_bytes(import_buffer.Buffer.from(address2, "hex"))).payment_cred().to_keyhash();
    const nativeScripts = this.S.NativeScripts.new();
    const script = this.S.ScriptPubkey.new(paymentKeyHash);
    const nativeScript = this.S.NativeScript.new_script_pubkey(script);
    const lockScript = this.S.NativeScript.new_timelock_expiry(this.S.TimelockExpiry.new(ttl));
    nativeScripts.add(nativeScript);
    nativeScripts.add(lockScript);
    const finalScript = this.S.NativeScript.new_script_all(this.S.ScriptAll.new(nativeScripts));
    const policyId = import_buffer.Buffer.from(this.S.ScriptHash.from_bytes(finalScript.hash().to_bytes()).to_bytes(), "hex").toString("hex");
    return {
      id: policyId,
      script: import_buffer.Buffer.from(finalScript.to_bytes()).toString("hex"),
      paymentKeyHash: import_buffer.Buffer.from(paymentKeyHash.to_bytes(), "hex").toString("hex"),
      ttl
    };
  }
  async signTx(transaction, partialSign = false) {
    if (!this.isEnabled())
      throw ERROR.NOT_CONNECTED;
    return await this.Nami.signTx(transaction, partialSign);
  }
  async signData(string) {
    let address2 = await getAddressHex();
    let coseSign1Hex = await Nami.signData(address2, import_buffer.Buffer.from(string, "ascii").toString("hex"));
    return coseSign1Hex;
  }
  hashMetadata(metadata) {
    let aux2 = this.S.AuxiliaryData.new();
    const generalMetadata = this.S.GeneralTransactionMetadata.new();
    Object.entries(metadata).map(([MetadataLabel, Metadata2]) => {
      generalMetadata.insert(this.S.BigNum.from_str(MetadataLabel), this.S.encode_json_str_to_metadatum(JSON.stringify(Metadata2), 0));
    });
    aux2.set_metadata(generalMetadata);
    const metadataHash = this.S.hash_auxiliary_data(aux2);
    return import_buffer.Buffer.from(metadataHash.to_bytes(), "hex").toString("hex");
  }
  _makeMintedAssets(mintedAssets) {
    let AssetsMap = {};
    for (let asset of mintedAssets) {
      let assetName = asset.assetName;
      let quantity = asset.quantity;
      if (!Array.isArray(AssetsMap[asset.policyId])) {
        AssetsMap[asset.policyId] = [];
      }
      AssetsMap[asset.policyId].push({
        "unit": import_buffer.Buffer.from(assetName, "ascii").toString("hex"),
        "quantity": quantity
      });
    }
    let multiAsset = this.S.MultiAsset.new();
    for (const policy in AssetsMap) {
      const ScriptHash2 = this.S.ScriptHash.from_bytes(import_buffer.Buffer.from(policy, "hex"));
      const Assets2 = this.S.Assets.new();
      const _assets = AssetsMap[policy];
      for (const asset of _assets) {
        const AssetName2 = this.S.AssetName.new(import_buffer.Buffer.from(asset.unit, "hex"));
        const BigNum2 = this.S.BigNum.from_str(asset.quantity);
        Assets2.insert(AssetName2, BigNum2);
      }
      multiAsset.insert(ScriptHash2, Assets2);
    }
    const value = this.S.Value.new(this.S.BigNum.from_str("0"));
    value.set_multiasset(multiAsset);
    return value;
  }
  _makeMultiAsset(assets) {
    let AssetsMap = {};
    for (let asset of assets) {
      let [policy, assetName] = asset.unit.split(".");
      let quantity = asset.quantity;
      if (!Array.isArray(AssetsMap[policy])) {
        AssetsMap[policy] = [];
      }
      AssetsMap[policy].push({
        "unit": import_buffer.Buffer.from(assetName, "ascii").toString("hex"),
        "quantity": quantity
      });
    }
    let multiAsset = this.S.MultiAsset.new();
    for (const policy in AssetsMap) {
      const ScriptHash2 = this.S.ScriptHash.from_bytes(import_buffer.Buffer.from(policy, "hex"));
      const Assets2 = this.S.Assets.new();
      const _assets = AssetsMap[policy];
      for (const asset of _assets) {
        const AssetName2 = this.S.AssetName.new(import_buffer.Buffer.from(asset.unit, "hex"));
        const BigNum2 = this.S.BigNum.from_str(asset.quantity.toString());
        Assets2.insert(AssetName2, BigNum2);
      }
      multiAsset.insert(ScriptHash2, Assets2);
    }
    return multiAsset;
  }
  _utxoToAssets(utxo) {
    let value = utxo.output().amount();
    const assets = [];
    assets.push({
      unit: "lovelace",
      quantity: value.coin().to_str()
    });
    if (value.multiasset()) {
      const multiAssets = value.multiasset().keys();
      for (let j = 0; j < multiAssets.len(); j++) {
        const policy = multiAssets.get(j);
        const policyAssets = value.multiasset().get(policy);
        const assetNames = policyAssets.keys();
        for (let k = 0; k < assetNames.len(); k++) {
          const policyAsset = assetNames.get(k);
          const quantity = policyAssets.get(policyAsset);
          const asset = import_buffer.Buffer.from(policy.to_bytes()).toString("hex") + "." + import_buffer.Buffer.from(policyAsset.name()).toString("ascii");
          assets.push({
            unit: asset,
            quantity: quantity.to_str()
          });
        }
      }
    }
    return assets;
  }
  async _txBuilderMinting({
    PaymentAddress,
    Utxos,
    Outputs,
    ProtocolParameter,
    mintedAssetsArray = [],
    outputValues = {},
    metadata = null,
    metadataHash = null,
    addMetadata = true,
    ttl = 3600,
    multiSig = false,
    costValues = {}
  }) {
    const MULTIASSET_SIZE = 5e3;
    const VALUE_SIZE = 5e3;
    const totalAssets = 0;
    coinSelection_default.setProtocolParameters(ProtocolParameter.minUtxo.toString(), ProtocolParameter.linearFee.minFeeA.toString(), ProtocolParameter.linearFee.minFeeB.toString(), ProtocolParameter.maxTxSize.toString());
    const selection = await coinSelection_default.randomImprove(Utxos, Outputs, 20 + totalAssets);
    const nativeScripts = this.S.NativeScripts.new();
    let mint = this.S.Mint.new();
    let mintedAssetsDict = {};
    let assetsDict = {};
    for (let asset of mintedAssetsArray) {
      if (typeof assetsDict[asset.assetName] == "undefined") {
        assetsDict[asset.assetName] = {};
        assetsDict[asset.assetName].quantity = 0;
        assetsDict[asset.assetName].policyScript = asset.policyScript;
      }
      assetsDict[asset.assetName].quantity = assetsDict[asset.assetName].quantity + parseInt(asset.quantity);
    }
    Object.entries(assetsDict).map(([assetName, asset]) => {
      const mintAssets = this.S.MintAssets.new();
      mintAssets.insert(this.S.AssetName.new(import_buffer.Buffer.from(assetName)), this.S.Int.new(this.S.BigNum.from_str(asset.quantity.toString())));
      if (typeof mintedAssetsDict[asset.policyScript] == "undefined") {
        mintedAssetsDict[asset.policyScript] = this.S.MintAssets.new();
      }
      mintedAssetsDict[asset.policyScript].insert(this.S.AssetName.new(import_buffer.Buffer.from(assetName)), this.S.Int.new(this.S.BigNum.from_str(asset.quantity.toString())));
    });
    for (let asset of mintedAssetsArray) {
      const multiAsset = this.S.MultiAsset.new();
      const mintedAssets = this.S.Assets.new();
      const policyScript = this.S.NativeScript.from_bytes(import_buffer.Buffer.from(asset.policyScript, "hex"));
      nativeScripts.add(policyScript);
      mintedAssets.insert(this.S.AssetName.new(import_buffer.Buffer.from(asset.assetName)), this.S.BigNum.from_str(asset.quantity.toString()));
      multiAsset.insert(this.S.ScriptHash.from_bytes(policyScript.hash(this.S.ScriptHashNamespace.NativeScript).to_bytes()), mintedAssets);
      const mintedValue = this.S.Value.new(this.S.BigNum.from_str("0"));
      mintedValue.set_multiasset(multiAsset);
      if (typeof outputValues[asset.address] == "undefined") {
        outputValues[asset.address] = this.S.Value.new(this.S.BigNum.from_str("0"));
      }
      outputValues[asset.address] = outputValues[asset.address].checked_add(mintedValue);
    }
    Object.entries(mintedAssetsDict).map(([policyScriptHex, mintAssets]) => {
      const policyScript = this.S.NativeScript.from_bytes(import_buffer.Buffer.from(policyScriptHex, "hex"));
      mint.insert(this.S.ScriptHash.from_bytes(policyScript.hash(this.S.ScriptHashNamespace.NativeScript).to_bytes()), mintAssets);
    });
    const inputs = this.S.TransactionInputs.new();
    selection.input.forEach((utxo) => {
      inputs.add(this.S.TransactionInput.new(utxo.input().transaction_id(), utxo.input().index()));
      outputValues[PaymentAddress] = outputValues[PaymentAddress].checked_add(utxo.output().amount());
    });
    const rawOutputs = this.S.TransactionOutputs.new();
    Object.entries(outputValues).map(([address2, value]) => {
      rawOutputs.add(this.S.TransactionOutput.new(this.S.Address.from_bech32(address2), value));
    });
    const fee = this.S.BigNum.from_str("0");
    const rawTxBody = this.S.TransactionBody.new(inputs, rawOutputs, fee, ttl + ProtocolParameter.slot);
    rawTxBody.set_mint(mint);
    let aux2 = this.S.AuxiliaryData.new();
    if (metadata) {
      const generalMetadata = this.S.GeneralTransactionMetadata.new();
      Object.entries(metadata).map(([MetadataLabel, Metadata2]) => {
        generalMetadata.insert(this.S.BigNum.from_str(MetadataLabel), this.S.encode_json_str_to_metadatum(JSON.stringify(Metadata2), 0));
      });
      aux2.set_metadata(generalMetadata);
    }
    if (metadataHash) {
      const auxDataHash = this.S.AuxiliaryDataHash.from_bytes(import_buffer.Buffer.from(metadataHash, "hex"));
      console.log(auxDataHash);
      rawTxBody.set_auxiliary_data_hash(auxDataHash);
    } else
      rawTxBody.set_auxiliary_data_hash(this.S.hash_auxiliary_data(aux2));
    const witnesses = this.S.TransactionWitnessSet.new();
    witnesses.set_native_scripts(nativeScripts);
    const dummyVkeyWitness = "8258208814c250f40bfc74d6c64f02fc75a54e68a9a8b3736e408d9820a6093d5e38b95840f04a036fa56b180af6537b2bba79cec75191dc47419e1fd8a4a892e7d84b7195348b3989c15f1e7b895c5ccee65a1931615b4bdb8bbbd01e6170db7a6831310c";
    const vkeys = this.S.Vkeywitnesses.new();
    vkeys.add(this.S.Vkeywitness.from_bytes(import_buffer.Buffer.from(dummyVkeyWitness, "hex")));
    vkeys.add(this.S.Vkeywitness.from_bytes(import_buffer.Buffer.from(dummyVkeyWitness, "hex")));
    if (multiSig) {
      vkeys.add(this.S.Vkeywitness.from_bytes(import_buffer.Buffer.from(dummyVkeyWitness, "hex")));
    }
    witnesses.set_vkeys(vkeys);
    const rawTx = this.S.Transaction.new(rawTxBody, witnesses, aux2);
    let minFee = this.S.min_fee(rawTx, this.S.LinearFee.new(this.S.BigNum.from_str(ProtocolParameter.linearFee.minFeeA), this.S.BigNum.from_str(ProtocolParameter.linearFee.minFeeB)));
    outputValues[PaymentAddress] = outputValues[PaymentAddress].checked_sub(this.S.Value.new(minFee));
    Object.entries(costValues).map(([address2, value]) => {
      outputValues[PaymentAddress] = outputValues[PaymentAddress].checked_sub(value);
    });
    const outputs = this.S.TransactionOutputs.new();
    Object.entries(outputValues).map(([address2, value]) => {
      outputs.add(this.S.TransactionOutput.new(this.S.Address.from_bech32(address2), value));
    });
    const finalTxBody = this.S.TransactionBody.new(inputs, outputs, minFee, ttl + ProtocolParameter.slot);
    finalTxBody.set_mint(rawTxBody.multiassets());
    finalTxBody.set_auxiliary_data_hash(rawTxBody.auxiliary_data_hash());
    const finalWitnesses = this.S.TransactionWitnessSet.new();
    finalWitnesses.set_native_scripts(nativeScripts);
    let auxFinal;
    if (addMetadata)
      auxFinal = rawTx.auxiliary_data();
    else
      auxFinal = this.S.AuxiliaryData.new();
    const transaction = this.S.Transaction.new(finalTxBody, finalWitnesses, auxFinal);
    const size = transaction.to_bytes().length * 2;
    if (size > ProtocolParameter.maxTxSize)
      throw ERROR.TX_TOO_BIG;
    return transaction.to_bytes();
  }
  async _txBuilder({
    PaymentAddress,
    Utxos,
    Outputs,
    ProtocolParameter,
    metadata = null
  }) {
    const MULTIASSET_SIZE = 5e3;
    const VALUE_SIZE = 5e3;
    const totalAssets = 0;
    coinSelection_default.setProtocolParameters(ProtocolParameter.minUtxo.toString(), ProtocolParameter.linearFee.minFeeA.toString(), ProtocolParameter.linearFee.minFeeB.toString(), ProtocolParameter.maxTxSize.toString());
    const selection = await coinSelection_default.randomImprove(Utxos, Outputs, 20 + totalAssets);
    console.log(selection);
    const inputs = selection.input;
    const txBuilder = this.S.TransactionBuilder.new(this.S.LinearFee.new(this.S.BigNum.from_str(ProtocolParameter.linearFee.minFeeA), this.S.BigNum.from_str(ProtocolParameter.linearFee.minFeeB)), this.S.BigNum.from_str(ProtocolParameter.minUtxo.toString()), this.S.BigNum.from_str(ProtocolParameter.poolDeposit.toString()), this.S.BigNum.from_str(ProtocolParameter.keyDeposit.toString()), MULTIASSET_SIZE, MULTIASSET_SIZE);
    for (let i = 0; i < inputs.length; i++) {
      const utxo = inputs[i];
      txBuilder.add_input(utxo.output().address(), utxo.input(), utxo.output().amount());
    }
    let AUXILIARY_DATA;
    if (metadata) {
      AUXILIARY_DATA = this.S.AuxiliaryData.new();
      const generalMetadata = this.S.GeneralTransactionMetadata.new();
      Object.entries(Metadata).map(([MetadataLabel, Metadata2]) => {
        generalMetadata.insert(this.S.BigNum.from_str(MetadataLabel), this.S.encode_json_str_to_metadatum(JSON.stringify(Metadata2), 0));
      });
      aux.set_metadata(generalMetadata);
      txBuilder.set_auxiliary_data(AUXILIARY_DATA);
    }
    for (let i = 0; i < Outputs.len(); i++) {
      txBuilder.add_output(Outputs.get(i));
    }
    const change = selection.change;
    const changeMultiAssets = change.multiasset();
    if (changeMultiAssets && change.to_bytes().length * 2 > VALUE_SIZE) {
      const partialChange = this.S.Value.new(this.S.BigNum.from_str("0"));
      const partialMultiAssets = this.S.MultiAsset.new();
      const policies = changeMultiAssets.keys();
      const makeSplit = () => {
        for (let j = 0; j < changeMultiAssets.len(); j++) {
          const policy = policies.get(j);
          const policyAssets = changeMultiAssets.get(policy);
          const assetNames = policyAssets.keys();
          const assets = this.S.Assets.new();
          for (let k = 0; k < assetNames.len(); k++) {
            const policyAsset = assetNames.get(k);
            const quantity = policyAssets.get(policyAsset);
            assets.insert(policyAsset, quantity);
            const checkMultiAssets = this.S.MultiAsset.from_bytes(partialMultiAssets.to_bytes());
            checkMultiAssets.insert(policy, assets);
            const checkValue = this.S.Value.new(this.S.BigNum.from_str("0"));
            checkValue.set_multiasset(checkMultiAssets);
            if (checkValue.to_bytes().length * 2 >= VALUE_SIZE) {
              partialMultiAssets.insert(policy, assets);
              return;
            }
          }
          partialMultiAssets.insert(policy, assets);
        }
      };
      makeSplit();
      partialChange.set_multiasset(partialMultiAssets);
      const minAda = this.S.min_ada_required(partialChange, this.S.BigNum.from_str(ProtocolParameter.minUtxo));
      partialChange.set_coin(minAda);
      txBuilder.add_output(this.S.TransactionOutput.new(this.S.Address.from_bech32(PaymentAddress), partialChange));
    }
    txBuilder.add_change_if_needed(this.S.Address.from_bech32(PaymentAddress));
    const transaction = this.S.Transaction.new(txBuilder.build(), this.S.TransactionWitnessSet.new(), AUXILIARY_DATA);
    const size = transaction.to_bytes().length * 2;
    if (size > ProtocolParameter.maxTxSize)
      throw ERROR.TX_TOO_BIG;
    return transaction.to_bytes();
  }
  async submitTx({
    transactionRaw,
    witnesses,
    scripts,
    networkId: networkId2,
    metadata
  }) {
    let transaction = this.S.Transaction.from_bytes(import_buffer.Buffer.from(transactionRaw, "hex"));
    const txWitnesses = transaction.witness_set();
    const txVkeys = txWitnesses.vkeys();
    const txScripts = txWitnesses.native_scripts();
    const addWitnesses = this.S.TransactionWitnessSet.from_bytes(import_buffer.Buffer.from(witnesses[0], "hex"));
    const addVkeys = addWitnesses.vkeys();
    const addScripts = addWitnesses.native_scripts();
    const totalVkeys = this.S.Vkeywitnesses.new();
    const totalScripts = this.S.NativeScripts.new();
    if (txVkeys) {
      for (let i = 0; i < txVkeys.len(); i++) {
        totalVkeys.add(txVkeys.get(i));
      }
    }
    if (txScripts) {
      for (let i = 0; i < txScripts.len(); i++) {
        totalScripts.add(txScripts.get(i));
      }
    }
    if (addVkeys) {
      for (let i = 0; i < addVkeys.len(); i++) {
        totalVkeys.add(addVkeys.get(i));
      }
    }
    if (addScripts) {
      for (let i = 0; i < addScripts.len(); i++) {
        totalScripts.add(addScripts.get(i));
      }
    }
    const totalWitnesses = this.S.TransactionWitnessSet.new();
    totalWitnesses.set_vkeys(totalVkeys);
    totalWitnesses.set_native_scripts(totalScripts);
    let aux2;
    if (metadata) {
      aux2 = this.S.AuxiliaryData.new();
      const generalMetadata = this.S.GeneralTransactionMetadata.new();
      Object.entries(metadata).map(([MetadataLabel, Metadata2]) => {
        generalMetadata.insert(this.S.BigNum.from_str(MetadataLabel), this.S.encode_json_str_to_metadatum(JSON.stringify(Metadata2), 0));
      });
      aux2.set_metadata(generalMetadata);
    } else {
      aux2 = transaction.auxiliary_data();
    }
    const signedTx = await this.S.Transaction.new(transaction.body(), totalWitnesses, aux2);
    const txhash = await this._blockfrostRequest({
      endpoint: `/tx/submit`,
      headers: {
        "Content-Type": "application/cbor"
      },
      body: import_buffer.Buffer.from(signedTx.to_bytes(), "hex"),
      networkId: networkId2,
      method: "POST"
    });
    return txhash;
  }
  async _getProtocolParameter(networkId2) {
    let latestBlock = await this._blockfrostRequest({
      endpoint: "/blocks/latest",
      networkId: networkId2,
      method: "GET"
    });
    if (!latestBlock)
      throw ERROR.FAILED_PROTOCOL_PARAMETER;
    let p = await this._blockfrostRequest({
      endpoint: `/epochs/${latestBlock.epoch}/parameters`,
      networkId: networkId2,
      method: "GET"
    });
    return {
      linearFee: {
        minFeeA: p.min_fee_a.toString(),
        minFeeB: p.min_fee_b.toString()
      },
      minUtxo: "1000000",
      poolDeposit: p.pool_deposit,
      keyDeposit: p.key_deposit,
      maxTxSize: p.max_tx_size,
      slot: latestBlock.slot
    };
  }
  async _submitRequest(body) {
    let latestBlock = await this._blockfrostRequest({
      endpoint: "/blocks/latest",
      network: networkId
    });
    if (!latestBlock)
      throw ERROR.FAILED_PROTOCOL_PARAMETER;
    let p = await this._blockfrostRequest({
      endpoint: `/epochs/${latestBlock.epoch}/parameters`,
      networkId
    });
    if (!p)
      throw ERROR.FAILED_PROTOCOL_PARAMETER;
    return {
      linearFee: {
        minFeeA: p.min_fee_a.toString(),
        minFeeB: p.min_fee_b.toString()
      },
      minUtxo: "1000000",
      poolDeposit: p.pool_deposit,
      keyDeposit: p.key_deposit,
      maxTxSize: p.max_tx_size,
      slot: latestBlock.slot
    };
  }
  async _blockfrostRequest({
    body,
    endpoint = "",
    networkId: networkId2 = 0,
    headers = {},
    method = "GET"
  }) {
    let networkEndpoint = networkId2 == 0 ? "https://cardano-testnet.blockfrost.io/api/v0" : "https://cardano-mainnet.blockfrost.io/api/v0";
    let blockfrostApiKey2 = this.getApiKey(networkId2);
    try {
      return await (await fetch(`${networkEndpoint}${endpoint}`, {
        headers: {
          project_id: blockfrostApiKey2,
          ...headers
        },
        method,
        body
      })).json();
    } catch (error2) {
      console.log(error2);
      return null;
    }
  }
};
function HexToBuffer(string) {
  return import_buffer.Buffer.from(string, "hex");
}
function HexToAscii(string) {
  return HexToBuffer(string).toString("ascii");
}
var nami_default = NamiWalletApi;

// js/config.js
var blockfrostApiKey = {
  0: "testnettRcYYIGxJfuDLfmJpJeX82WxPib4SLcN",
  1: "mainnet"
};
var config_default = blockfrostApiKey;

// js/react/src/index.js
var nami;
var useState = (defaultValue) => {
  let value = defaultValue;
  const getValue = () => value;
  const setValue = (newValue) => value = newValue;
  return [getValue, setValue];
};
var [connected, setConnected] = useState(false);
var [address, setAddress] = useState("");
var [nfts, setNfts] = useState([]);
var t = async () => {
  const S = await Cardano();
  nami = new nami_default(S, window.cardano, config_default);
  if (await nami.isInstalled()) {
    await nami.isEnabled().then((result) => {
      setConnected(result);
    });
  }
};
var connect = async () => {
  await nami.enable().then((result) => setConnected(result)).catch((e) => console.log(e));
};
var getAddress = async () => {
  if (!connected) {
    await connect();
  }
  await nami.getAddress().then((newAddress) => {
    console.log(newAddress);
    setAddress(newAddress);
  });
};

// js/bundle.js
var Hooks2 = {};
Hooks2.NamiConnectWallet = {
  page() {
    return this.el.dataset.page;
  },
  mounted() {
    document.getElementById("nami-connect-wallet").addEventListener("click", function(e) {
      t();
      connect().then(getAddress());
    });
  },
  reconnected() {
    this.pending = this.page();
  },
  updated() {
    this.pending = this.page();
  }
};
var bundle_default = Hooks2;

// js/app.js
window.Alpine = module_default;
module_default.start();
var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
var liveSocket = new LiveSocket("/live", Socket, {
  hooks: bundle_default,
  params: { _csrf_token: csrfToken },
  dom: {
    onBeforeElUpdated(from, to) {
      if (from.__x_dataStack) {
        window.Alpine.clone(from, to);
      }
    }
  }
});
liveSocket.connect();
window.liveSocket = liveSocket;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=./app.js-9972f5238b03ecbc16a0c9eaf4974d62.map
