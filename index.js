katz_deli = []

def line(deli)
  linArr = []
  if deli.size == 0
      puts "The line is currently empty."
  else
    result = deli.each_with_index.collect do |e, i|
      "#{i+1}. #{e}"
    end
    puts "The line is currently: " + result.join('')
  end
end

# print "The line is currently:"
# count = 1;
# katz_deli.each do |name|
#   print " #{count}. #{name}"
#   count +=1
# end

def take_a_number(katz_deli,name)
  katz_deli << name
  puts "Welcome, #{name}. You are number #{katz_deli.size} in line."
end

def now_serving(katz_deli)
  if katz_deli == [] || katz_deli == nil then
    puts "There is nobody waiting to be served!"
  else
    puts "Currently serving #{katz_deli[0]}.";
    katz_deli.shift
  end
end
