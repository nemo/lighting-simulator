#include "Simulator.h"
#include <iostream>

void Simulator::setLED(int x, int y, Color color) {
	std::cout << newTicks * 300 << "," << x << "," << y << "," << color.r << "," << color.g << "," << color.b << std::endl;
	newTicks = 0;
}

void Simulator::tick() {
	newTicks++;
}
