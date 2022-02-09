defmodule Metaitems.Blockfrost do
  def start(_type, _args) do
    children = [
      {Blockfrost, [
        # network: :cardano_mainnet,
        # name: CardanoMainNet,
        network: :cardano_mainnet,
        name: CardanoMainNet,
        api_key: System.get_env("CARDANO_API_KEY"),
        retry_enabled?: true,
        retry_max_attempts: 3
      ]},
      {Blockfrost, [
        network: :ipfs,
        name: IPFS,
        api_key: System.get_env("IPFS_API_KEY"),
        retry_enabled?: false
      ]}
    ]

    Supervisor.start_link(children, strategy: :one_for_one, name: Metaitems.Blockfrost)
  end
end
