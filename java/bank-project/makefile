JFLAGS = -Wall
JC = javac
J = java

NAME = Main

sources := $(wildcard *.java)
sources := $(filter-out Main.java, $(sources))

classes := $(wildcard *.class)

classes: $(sources)
	$(JC) $(sources)

$(NAME): $(NAME).java
	$(J) $(NAME).java

clean:
	rm $(classes)