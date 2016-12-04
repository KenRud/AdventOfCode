input = File.read '../res/day_1'
x = 0
y = 0
angle = Math::PI / 2
input.split(', ').each do |dir|
  angle += (dir[0] == 'L' ? Math::PI / 2 : -Math::PI / 2)
  x += Math.cos(angle) * dir[1..dir.length].to_i
  y += Math.sin(angle) * dir[1..dir.length].to_i
end

puts (x.abs + y.abs).round
