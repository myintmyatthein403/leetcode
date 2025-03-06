defmodule Solution do
  @spec find_missing_and_repeated_values(grid :: [[integer]]) :: [integer]
  def find_missing_and_repeated_values(grid) do
    n = length(grid)
    range = 1..(n * n) |> Enum.to_list()
    flattened = List.flatten(grid)

    # Find the repeated number
    repeated = flattened
      |> Enum.frequencies()
      |> Enum.find(fn {_, v} -> v > 1 end)
      |> elem(0)

    # Find the missing number using MapSet
    missing = MapSet.difference(MapSet.new(range), MapSet.new(flattened))
      |> Enum.at(0)

    [repeated, missing]
  end
end

