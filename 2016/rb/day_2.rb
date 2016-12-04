@input = File.read '../res/day_2'

numpad_1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

numpad_2 = [
  [nil, nil, 1, nil, nil],
  [nil, 2, 3, 4, nil],
  [5, 6, 7, 8, 9],
  [nil, 'A', 'B', 'C', nil],
  [nil, nil, 'D', nil, nil]
]

@map = {
  'U' => [0, -1],
  'R' => [1, 0],
  'D' => [0, 1],
  'L' => [-1, 0],
}

def isValid? pos, numpad
  pos[0] >= 0 && pos[0] < numpad.length && numpad[pos[0]] != nil &&
  pos[1] >= 0 && pos[1] < numpad[0].length && numpad[pos[0]][pos[1]] != nil
end

def solve(numpad, start)
  pos = start
  code = ''

  @input.split(/\s+/).each do |line|
    line.split('').each do |ch|
      newPos = [pos[0] + @map[ch][0], pos[1] + @map[ch][1]]
      if (isValid?(newPos, numpad))
        pos = newPos
      end
    end
    code << numpad[pos[1]][pos[0]].to_s
  end

  return code
end

puts "Part 1: #{solve(numpad_1, [1, 1])}"
puts "Part 2: #{solve(numpad_2, [0, 2])}"
