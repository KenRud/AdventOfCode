@lines = File.readlines '../res/day_8'
@screen = Array.new(6) { Array.new 50 }

def rect(x, y)
  y.times do |col|
    x.times do |row|
      @screen[col][row] = true
    end
  end
end

def rotate_row(y, length)
  @screen[y].rotate! -length
end

def rotate_col(x, length)
  transposed = @screen.transpose
  transposed[x].rotate! -length
  @screen = transposed.transpose
end

def print_screen
  @screen.each do |row|
    puts row.map {|pixel| pixel ? '#' : '.'}.join
  end
end

def pixel_count
  @screen.flatten.count true
end

def solve_problem
  @lines.each do |line|
    tokens = line.split ' '
    cmd = tokens[0]

    case cmd
    when 'rect'
      x, y = tokens[1].split('x').map {|s| s.to_i}
      rect(x, y)
    when 'rotate'
      dimension = tokens[1]
      case dimension
      when 'row'
        y = tokens[2].split('=')[1].to_i
        length = tokens[4].to_i
        rotate_row(y, length)
      when 'column'
        x = tokens[2].split('=')[1].to_i
        length = tokens[4].to_i
        rotate_col(x, length)
      end
    end
  end

  print_screen
  puts "Pixel count: #{pixel_count}"
end

solve_problem
