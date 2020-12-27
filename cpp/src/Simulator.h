#pragma once

#include "Controller.h"

class Simulator : public Controller
{
public:
	Simulator() {}
	~Simulator() {}

	void setLED(int row, int col, Color color) override;
};