(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{bac4:function(r,e,n){"use strict";n.r(e),e["default"]='<template>\r\n  <div class="q-pa-md">\r\n    <q-layout view="hHh Lpr fff" container style="height: 400px" class="shadow-2 rounded-borders">\r\n      <q-header elevated class="bg-red-9">\r\n        <q-toolbar>\r\n          <q-btn flat round dense icon="menu" @click="drawer = !drawer" />\r\n          <q-toolbar-title>Header</q-toolbar-title>\r\n        </q-toolbar>\r\n      </q-header>\r\n\r\n      <my-drawer\r\n        v-model="drawer"\r\n        elevated\r\n        show-if-above\r\n        :breakpoint="500"\r\n        :width="200"\r\n        :limits="[100, 500]"\r\n        content-class="bg-red-1"\r\n        resizerClass="drawer-resizer"\r\n        resizerStyle="width: 6px"\r\n      >\r\n        <template #default>\r\n          <div class="fit no-scroll q-pa-lg">\r\n            <q-icon v-for="n in 7" :key="n" :name="`brightness_${n}`" size="lg" color="red" class="q-ma-md" />\r\n          </div>\r\n        </template>\r\n        <template #resizer>\r\n          <q-btn flat dense icon="arrow_back" color="red-5" size="md" class="absolute-top hide-drawer" @mousedown.stop @click="drawer = false" />\r\n        </template>\r\n      </my-drawer>\r\n\r\n      <q-page-container>\r\n        <q-page padding>\r\n          <p v-for="n in 15" :key="n">\r\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem\r\n            consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?\r\n          </p>\r\n        </q-page>\r\n      </q-page-container>\r\n    </q-layout>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data: () => ({\r\n    drawer: false\r\n  })\r\n}\r\n<\/script>\r\n\r\n<style>\r\n.drawer-resizer {\r\n  background-color: transparent;\r\n  background-image: linear-gradient(#c00, transparent 90%);\r\n}\r\n.hide-drawer {\r\n  margin-top: 15px;\r\n  margin-left: -8px;\r\n}\r\n</style>\r\n'}}]);