input = File.read '../res/day_3'

count = 0
input.split(/\n/).each do |line|
  sides = line.split(' ').map {|x| x.to_i}.sort
  if (sides[0] + sides[1] > sides[2])
    count += 1
  end
end

puts 'Part 1: ' + count


sides = input.split(/\s+/)
[0..sides.length]
