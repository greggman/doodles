#!/bin/sh
emcc -std=c++11 --shell-file shell.html  -O2 -I imgui -I ./  -s NO_EXIT_RUNTIME=1 -s WASM=1 -s USE_WEBGL2=1 -s USE_GLFW=3 --js-library library_glfw.js --js-library library_gl.js imgui/imgui.cpp imgui/imgui_draw.cpp imgui/imgui_demo.cpp imgui_impl_glfw_gl3.cpp glfw-imgui.cpp -o out/glfw-imgui.html
