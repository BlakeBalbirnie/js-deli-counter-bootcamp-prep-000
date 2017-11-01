katz_deli = []

def line(queue)
  if queue.length == 0
      puts "The line is currently empty."
  else
    total = []
    queue.each_with_index do |person, index|
    total << " #{index + 1}. #{person}"
    end
    puts "The line is currently: " + result.join
  end
end

def take_a_number(arr,name)
  arr << name
  puts "Welcome, #{name}. You are number #{arr.size} in line."
end

def now_serving(arr)
  if arr.size == 0
    puts "There is nobody waiting to be served!"
  else
    puts "Currently serving #{arr.first}."
    arr.shift()
  end

end
