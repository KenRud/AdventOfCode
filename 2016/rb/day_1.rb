require 'set'

def day_1 input
  x = 0
  y = 0
  angle = Math::PI / 2
  locations = Set.new
  input.split(', ').each do |dir|
    angle += (dir[0] == 'L' ? Math::PI / 2 : -Math::PI / 2)

    blocks = dir[1..dir.length].to_i
    blocks.times do
      x += Math.cos(angle).to_i
      y += Math.sin(angle).to_i

      if (locations.include? [x , y])
        return [x, y]
      end

      locations << [x, y]
    end
  end

  return [x, y]
end

answer = day_1 File.read('../res/day_1')

puts "Part 2: #{(answer[0].abs + answer[1].abs).round}"
