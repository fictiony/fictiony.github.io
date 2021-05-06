(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{bac4:function(e,n,a){"use strict";a.r(n),n["default"]='<template>\n  <div class="q-pa-md">\n    <q-layout view="hHh Lpr fff" container style="height: 400px" class="shadow-2 rounded-borders">\n      <q-header elevated class="bg-red-9">\n        <q-toolbar>\n          <q-btn flat round dense icon="menu" @click="drawer = !drawer" />\n          <q-toolbar-title>Header</q-toolbar-title>\n        </q-toolbar>\n      </q-header>\n\n      <my-drawer\n        v-model="drawer"\n        elevated\n        show-if-above\n        :breakpoint="500"\n        :width="200"\n        :limits="[100, 500]"\n        content-class="bg-red-1"\n        resizerClass="drawer-resizer"\n        resizerStyle="width: 6px"\n      >\n        <template #default>\n          <div class="fit no-scroll q-pa-lg">\n            <q-icon v-for="n in 7" :key="n" :name="`brightness_${n}`" size="lg" color="red" class="q-ma-md" />\n          </div>\n        </template>\n        <template #resizer>\n          <q-btn flat dense icon="arrow_back" color="red-5" size="md" class="absolute-top hide-drawer" @mousedown.stop @click="drawer = false" />\n        </template>\n      </my-drawer>\n\n      <q-page-container>\n        <q-page padding>\n          <p v-for="n in 15" :key="n">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem\n            consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?\n          </p>\n        </q-page>\n      </q-page-container>\n    </q-layout>\n  </div>\n</template>\n\n<script>\nexport default {\n  data: () => ({\n    drawer: false\n  })\n}\n<\/script>\n\n<style>\n.drawer-resizer {\n  background-color: transparent;\n  background-image: linear-gradient(#c00, transparent 90%);\n}\n.hide-drawer {\n  margin-top: 15px;\n  margin-left: -8px;\n}\n</style>\n'}}]);