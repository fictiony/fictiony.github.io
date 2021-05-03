(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{9615:function(r,n,a){"use strict";a.r(n),n["default"]='<template>\r\n  <div class="q-pa-md">\r\n    <q-layout view="hHh Lpr fff" container style="height: 300px" class="shadow-2 rounded-borders">\r\n      <q-header elevated class="bg-black">\r\n        <q-toolbar>\r\n          <q-btn flat round dense icon="menu" @click="drawer = !drawer" />\r\n          <q-toolbar-title>Header</q-toolbar-title>\r\n        </q-toolbar>\r\n      </q-header>\r\n\r\n      <my-drawer v-model="drawer" elevated show-if-above :breakpoint="500" :width.sync="drawerWidth" :limits="[drawerLimits.min, drawerLimits.max]">\r\n        <div class="q-pa-lg">This is the Drawer</div>\r\n      </my-drawer>\r\n\r\n      <q-page-container>\r\n        <q-page class="q-pa-lg bg-grey-2">\r\n          <div class="row no-wrap">\r\n            <div class="q-mr-md">Width:</div>\r\n            {{ drawerWidth }}\r\n          </div>\r\n          <div class="row no-wrap q-pt-xl">\r\n            <div class="q-mr-md">Limits:</div>\r\n            <q-range label-always v-model="drawerLimits" :min="50" :max="600" />\r\n          </div>\r\n        </q-page>\r\n      </q-page-container>\r\n    </q-layout>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data: () => ({\r\n    drawer: false,\r\n    drawerWidth: 200,\r\n    drawerLimits: {\r\n      min: 100,\r\n      max: 300\r\n    }\r\n  })\r\n}\r\n<\/script>\r\n'}}]);