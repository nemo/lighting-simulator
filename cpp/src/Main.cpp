#include <iostream>
#include "Simulator.h"
#include "Snake.h"
#include "Firework.h"
#include "Runner.h"

int main(int argc, char const *argv[]) {
	Simulator s;
	//Snake *snake = new Snake(s);
	Firework *firework1 = new Firework(s, 20, 20);
	Firework *firework2 = new Firework(s, 7, 7);
	Runner runner(s, {firework1, firework2});

	std::cout << "delta,x,y,r,g,b" << std::endl;
	runner.perform();

	free(firework1);
	free(firework2);
	// free(snake);
	return 0;
}
