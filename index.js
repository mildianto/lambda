let AWS = require("aws-sdk");
const http = require('https')
// const fetch = require('node-fetch');
let S3 = new AWS.S3();
//let lottieMapping = require('./lottie_mapping.js');
const lottieMapping = {
  "preload/card_payment": "ic_card_payment.json",
  "preload/card_bagid": "ic_card_bagid.json",
  "preload/system_ac_ceiling": "ic_system_ac_ceiling.json",
  "preload/system_ac_duct" : "ic_system_ac_duct.json",
  "preload/smart_tag_2": "ic_smart_tag_2.json",
  "preload/ai_speaker": "ic_ai_speaker.json",
  "preload/frame": "ic_frame.json",
  "preload/wifi_kit": "ic_wifi_kit.json",
  "preload/samsungconnect_button": "ic_device_button_1.json",
  "preload/signage": "ic_device_signage.json",
  "preload/refrigerator": "ic_device_refrigerator.json",
  "preload/oven": "ic_device_oven.json",
  "preload/sero_tv": "ic_device_portland.json",
  "preload/switch_power_outlet": "ic_device_outlet_2.json",
  "preload/floor_a_c": "ic_device_floor_ac.json",
  "preload/system_purifier_a_c": "ic_device_system_air_purifier.json",
  "preload/samsungconnect_smoke": "ic_device_smoke_detector.json",
  "preload/hometheater": "ic_device_home_theater.json",
  "preload/accessory": "ic_device_accessory.json", 
  "preload/air_purifier": "ic_device_air_purifier.json",
  "preload/room_a_c": "ic_device_room_ac.json",
  "preload/indicatior_ic_oven.png": "ic_device_oven.json",
  "preload/samsungconnect_access_key": "ic_device_access_key.json",
  "preload/ceiling_light": "ic_device_ceiling_light.json",
  "preload/lcd_refrigerator": "ic_device_refrigerator.json",
  "preload/indicatior_ic_room_a_c.png": "ic_device_room_ac.json",
  "preload/charger_hub": "ic_device_charger_hub.json",
  "preload/microwave_oven": "ic_device_microwave_oven.json",
  "preload/tv": "ic_device_tv.json",
  "preload/airsensor": "ic_device_airsensor.json",
  "preload/indicatior_ic_hood": "ic_device_hood.json",
  "preload/landscape_moisture_sensor": "ic_device_moisture_sensor_3.json",
  "preload/pc": "ic_device_pc.json",
  "preload/soundbar": "ic_device_soundbar.json",
  "preload/commercial_air_purifier": "ic_device_commercial_air_purifier.json",
  "preload/av": "ic_device_akg.json",
  "preload/smart_home": "ic_device_r3_2022_smart_home.json",
  "preload/portrait_moisture_sensor": "ic_device_moisture_sensor_2.json",
  "preload/home_hub": "ic_device_home_hub.json",
  "preload/system_a_c": "ic_device_system_ac.json",
  "preload/freestyle_1": "ic_freestyle_1.json",
  "preload/camera": "ic_device_camera.json",
  "preload/dishwasher": "ic_device_dishwasher.json",
  "preload/lux-one": "ic_device_ai_speaker_lux_one.json",
  "preload/samsungconnect_access_sensor": "ic_device_access_sensor.json",
  "preload/window_a_c": "ic_device_window_ac.json",
  "preload/tablet": "ic_device_tablet.json",
  "preload/indicatior_ic_oven": "ic_device_oven.json",
  "preload/dryer": "ic_device_dryer.json",
  "preload/st_network_audio": "ic_device_speaker.json",
  "preload/indicatior_ic_room_a_c": "ic_device_room_ac.json",
  "preload/erv": "ic_device_system_ac_erv.json",
  "preload/qooker": "ic_device_qooker.json",
  "preload/thermostat": "ic_device_thermostat.json",
  "preload/printer": "ic_device_printer.json",
  "preload/kimchi_refrigerator": "ic_device_kimchi_refrigerator.json",
  "preload/monitor": "ic_device_general_display.json",
  "preload/camcorder": "ic_device_camcorder.json",
  "preload/ark": "ic_ark.json",
  "preload/tag": "ic_device_smart_tag.json",
  "preload/wearable": "ic_device_watch.json",
  "preload/vision_camera": "ic_device_camera_vision.json",
  "preload/e_board": "ic_device_eboard.json",
  "preload/steamcloset": "ic_device_steam_closet.json",
  "preload/robot_vacuum": "ic_device_robot_vacuum_1.json",
  "preload/projector": "ic_device_projector.json",
  "preload/range": "ic_device_range.json",
  "preload/cooktop": "ic_device_cooktop.json",
  "preload/hood": "ic_device_hood.json",
  "preload/iot": "ic_device_iot.json",
  "preload/headphone": "ic_device_headphone.json",
  "preload/ahu": "ic_device_system_ac_ahu.json",
  "preload/phone": "ic_device_phone.json",
  "preload/washer": "ic_device_washer.json",
  "preload/speaker": "ic_device_speaker.json",
  "preload/indicatior_ic_hood.png": "ic_device_hood.json",
  "preload/lux": "ic_device_ai_speaker_lux.json",
  "preload/robot_vacuum_2": "ic_device_robot_vacuum_2.json",
  "preload/energy_monitoring": "ic_device_r3_2022_energy_monitoring.json",
  "preload/dot_locator": "ic_device_connect_tag.json",
  "preload/soundframe": "ic_soundframe.json",
  "preload/ehs": "ic_device_system_ac_ehs.json",
  "preload/generic_motion": "ic_device_motion_sensor_2.json",
  "preload/wifihub": "ic_device_r3_2022_wifi_hub_1.json",
  "preload/blueray": "ic_device_bd.json",
  "oneui/x.com.st.d.car": "ic_device_car.json",
  "oneui/x.com.st.d.sensor.contact": "ic_device_contact_sensor.json",
  "oneui/oic.d.doorbell": "ic_device_doorbell.json",
  "oneui/x.com.st.d.sensor.moisture": "ic_device_moisture_sensor_1.json",
  "oneui/x.com.st.d.waterheater": "ic_device_water_heater.json",
  "oneui/x.com.st.d.hub": "ic_device_r3_2022_hub.json",
  "oneui/x.com.st.d.irrigation": "ic_device_irrigation.json",
  "oneui/x.com.st.d.elevator": "ic_device_elevator.json",
  "oneui/x.com.st.d.electricvehiclecharger": "ic_electric_vehicle_charger.json",
  "oneui/oic.d.switch": "ic_device_switch.json",
  "oneui/x.com.st.d.airqualitysensor": "ic_device_r3_2022_air_quality.json",
  "oneui/oic.d.networking": "ic_device_r3_2022_range_extender.json",
  "oneui/oic.d.fan": "ic_device_vent.json",
  "oneui/x.com.st.d.gasMeter": "ic_device_gas_meter.json",
  "oneui/oic.d.garagedoor": "ic_device_garage_door.json",
  "oneui/x.com.st.d.doorbell": "ic_device_doorbell.json",
  "oneui/oic.d.smartlock": "ic_device_lock.json",
  "oneui/oic.d.microoven": "ic_device_microwave_oven.json",
  "oneui/oic.d.smokedetector": "ic_device_smoke_detector.json",
  "oneui/oic.d.thermostat": "ic_device_thermostat.json",
  "oneui/x.com.st.d.monitor": "ic_device_general_display.json",
  "oneui/x.com.st.d.tag": "ic_device_smart_tag.json",
  "oneui/oic.d.blind": "ic_device_shade.json",
  "oneui/x.com.st.d.button": "ic_device_button_1.json",
  "oneui/x.com.st.d.settop": "ic_device_home_sync.json",
  "oneui/oic.d.airpurifier": "ic_device_air_purifier.json",
  "oneui/oic.d.light": "ic_device_light_bulb.json",
  "oneui/x.com.st.d.cubebeverage": "ic_device_cube.json",
  "oneui/oic.d.smartplug": "ic_device_outlet_1.json",
  "oneui/oic.d.watervalve": "ic_device_valve.json",
  "oneui/x.com.st.d.projector": "ic_device_projector.json",
  "oneui/x.com.st.d.irblaster": "ic_device_r3_2022_remote.json",
  "oneui/x.com.st.d.healthtracker": "ic_device_r3_2022_health_tracker.json",
  "oneui/x.com.st.d.heatedmattresspad": "ic_device_heated_mattress_pad.json",
  "oneui/x.com.st.d.vent": "ic_device_vent.json",
  "oneui/oic.d.tracker": "ic_device_connect_tag.json",
  "oneui/oic.d.dryer": "ic_device_dryer.json",
  "oneui/x.com.st.d.gasvalve": "ic_device_gas_valve.json",
  "oneui/x.com.st.d.energymeter": "ic_device_r3_2022_energy_monitoring.json",
  "oneui/oic.d.airconditioner": "ic_device_floor_ac.json",
  "oneui/oic.d.range": "ic_device_range.json",
  "oneui/x.com.st.d.massagechair": "ic_device_massage_chair.json",
  "oneui/oic.d.microwave": "ic_device_microwave_oven.json",
  "oneui/oic.wk.d": "ic_device_accessory.json",
  "oneui/oic.d.refrigerator": "ic_device_refrigerator.json",
  "oneui/x.com.st.d.waterpurifier": "ic_device_water_purifier.json",
  "oneui/x.com.st.d.sensor.sound": "ic_device_sound.json",
  "oneui/x.com.st.d.sensor.smoke": "ic_device_smoke_detector.json",
  "oneui/x.com.st.d.winecellar": "ic_device_wine_cellar.json",
  "oneui/x.com.st.d.siren": "ic_device_siren.json",
  "oneui/x.com.st.d.sensor.multifunction": "ic_device_multipurpose_sensor_1.json",
  "oneui/oic.d.tv": "ic_device_tv.json",
  "oneui/x.com.st.d.cubewine": "ic_device_cube.json",
  "oneui/x.com.st.d.humidifier": "ic_device_humidifier.json",
  "oneui/x.com.st.d.dehumidifier": "ic_dehumidifier.json",
  "oneui/oic.d.smartdining": "ic_device_cloche.json",
  "oneui/x.com.st.d.mobile.presence": "ic_device_presence_sensor.json",
  "oneui/x.com.st.d.microfiberfilter": "ic_less_microfiber_filter.json",
  "oneui/oic.d.camera": "ic_device_camera_security.json",
  "oneui/oic.d.dishwasher": "ic_device_dishwasher.json",
  "oneui/oic.d.wirelessrouter": "ic_device_r3_2022_wifi_hub_1.json",
  "oneui/x.com.st.d.voiceassistance": "ic_device_assistance.json",
  "oneui/x.com.st.d.sensor.light": "ic_device_r3_2022_illuminance_sensor.json",
  "oneui/x.com.st.d.sensor.motion": "ic_device_motion_sensor_1.json",
  "oneui/x.com.st.d.remotecontroller": "ic_device_r3_2022_remote.json",
  "oneui/light_strap": "ic_device_custom_light_mood.json",
  "oneui/x.com.st.d.solarPanel": "ic_device_solar_panel.json",
  "oneui/oic.d.networkaudio": "ic_device_soundbar.json",
  "oneui/x.com.samsung.d.tracker": "ic_device_connect_tag.json",
  "oneui/x.com.st.d.cubecosmetic": "ic_device_cube.json",
  "oneui/x.com.st.d.steamcloset": "ic_device_steam_closet.json",
  "oneui/x.com.st.d.battery": "ic_device_battery_storage_system.json",
  "oneui/x.com.st.d.flashlight": "ic_device_flash_light.json",
  "oneui/x.com.samsung.bdplayer": "ic_device_bd.json",
  "oneui/x.com.st.d.airdressershoes": "ic_device_shoe_dressor.json",
  "oneui/x.com.st.d.stickcleaner": "ic_device_stick_cleaner.json",
  "oneui/oic.d.mask": "ic_device_smart_mask.json",
  "oneui/oic.d.washer": "ic_device_washer.json",
  "oneui/oic.d.robotcleaner": "ic_device_robot_vacuum_1.json",
  "oneui/x.com.st.d.sensor.presence": "ic_device_presence_sensor.json",
  "oneui/x.com.st.d.networkaudio": "ic_device_speaker.json",
  "oneui/oic.d.krefrigerator": "ic_device_kimchi_refrigerator.json",
  "oneui/x.com.st.d.bridge": "ic_device_r3_2022_hub.json",
  "oneui/oic.d.cooktop": "ic_device_cooktop.json",
  "oneui/x.com.st.d.feeder": "ic_device_pet_feeder.json",
  "oneui/oic.d.oven": "ic_device_oven.json",
  "oneui/x.com.st.d.ricecooker": "ic_rice_cooker.json",
  "oneui/ic_strollers": "ic_custom_device_strollers.json",
  "oneui/custom_air_purifier_bluesky": "ic_custom_air_purifier_bluesky.json",
  "oneui/x.com.st.d.sensor.humidity": "ic_device_moisture_sensor_1.json",
  "oneui/x.com.st.d.sensor.temp": "ic_device_thermostat.json",
  
}
const STATES = ["on", "off", "offline"];
const TYPES = ["png", "svg"];
const DISPLAY_SIZE = ["1x", "1.5x", "2x", "3x", "4x","original"];
const STATUS = ["draft", "requested", "published"];
const THEMES = ["day", "night"];
const MODES = ["light", "dark"];
const EXISTING_PREFIX = ['actions', 
            'badges', 
            'oneui', 
            'preload', 
            'group', 
            'auto', 
            'scenes', 
            'capabilities', 
            'ocfDeviceType',
            'lottie']
// const queryParams = ['displaySize', 'contentType', 'status'];

let mode, platform, displaySize, contentType, status, theme;

const oldNewMap = {
  state:{
    on: 'color',
    off: 'gray',
    live: 'live',
    offline: 'dim',
    qb: 'line',
    lottie: 'lottie'
  },
  theme: {
    day: 'light',
    night: 'dark'
  }
}

let s3Cache = {};
let newIconMap

async function getRequest(url, path, iconKey) {
  return new Promise((resolve, reject) => {
    if (path in s3Cache && s3Cache[path].expiresOn > Date.now()) {
      // Fetch data from cache
      // console.log("cache hit", path);
      resolve (s3Cache[path].val);
    } else{
      // console.log("cache miss", path);
      http.request(url, function(res) {
          s3Cache[path] = {val: res.statusCode, expiresOn: Date.now() + 3600 * 1000};
          resolve(res.statusCode);
          if(res.rawHeaders.includes('RefreshHit from cloudfront')){
            console.log("cloudfront Icon", iconKey )
          }
          
      }).end();
      
    }
  });
}

async function getNewIconMap (url){
  if(newIconMap && newIconMap.expiresOn > Date.now()){
    // console.log('sbaas cache hit')
    return(true)
  }
  // console.log('getting sbaas data')
  return new Promise((resolve, reject) => {
      const request  = http.request(url, function(res) 
        {
          // newIconMap = res
          let stringData = ''
          // console.log('my res', res)
          res.on('data', function(d) {
            stringData = stringData + d.toString()

            
          });
          
          res.on('end', ()=>{
            // console.log(stringData)
            newIconMap = JSON.parse(stringData)  
            newIconMap.expiresOn = Date.now() + 3600 * 1000
            // console.log('my res', newIconMap)
            const result = {
              statusCode: "302",
              body: JSON.stringify(newIconMap["universalMap"]),
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Headers" : "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET"
              },
            };
            resolve(result)
          })
        })
      request.on('error', function(err) {
        const result = {
            statusCode: "400",
            body: JSON.stringify(err),
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Headers" : "*",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET"
            },
          };
        
        resolve(result)
      });
      request.end()
  });
}


exports.handler = async (event) => {
  
  
  mode = "light";
  platform = "universal";
  displaySize = "1x";
  contentType = "png";
  status = "published";
  theme = "day";

  const bucketName = event["stageVariables"]["s3BucketName"];
  const bucketEndpoint = event["stageVariables"]["s3BucketEndpoint"];
  const cloudfront = event["stageVariables"]["s3Cloudfront"];
  const sbaasEndpoint = event["stageVariables"]["sbaasEndpoint"];
  const handleNew = event["stageVariables"]["handleNew"];
  const handleOld = event["stageVariables"]["handleOld"];
  status = event["stageVariables"]["status"];

  const proxy = event["pathParameters"]["proxy"];
  const proxyStr = proxy.toString();
  let proxyArr = proxyStr.split("/");
  

  if (proxyArr.length < 2) {
    return resInvalidReq("Invalid path parameters");
  }

  let queryRes = { valid: true, message: "" };
  if (event["queryStringParameters"]) {
    const queryParams = event["queryStringParameters"];
    queryRes = getQueryParams(queryParams);
  }

  if (!queryRes.valid) {
    return resInvalidReq(queryRes.message);
  }
  
  const iconState = proxyArr[2] ? proxyArr[2] : 'on';
  
  if(handleNew == "true"){
    const iconMapUrl = {
      host: `${cloudfront}`,
      path: `/assets/icons/old_new_icon_map.json`,
      method: 'GET'
    }; 
    
      
    const iconMapRes = await getNewIconMap(iconMapUrl)
    // return iconMapRes
    const statusIndex = STATUS.indexOf(status)
  // newIconMap.data.universalMap[status][`${proxyArr[0]}/${proxyArr[1]}`]
    if(newIconMap){
      for(let i = statusIndex; i<STATUS.length; i++){
        if(EXISTING_PREFIX.indexOf(proxyArr[0]) >= 0 ){
          if(newIconMap.universalMap && newIconMap.universalMap[STATUS[i]][`${proxyArr[0]}/${proxyArr[1]}`]){
            if(proxyArr[0] == 'badges' && proxyArr[2] == 'off'){
              proxyArr[2] = 'on'
            }
            proxyArr[0] = newIconMap.universalMap[STATUS[i]][`${proxyArr[0]}/${proxyArr[1]}`]
            proxyArr[1] = oldNewMap.state[proxyArr[2]]
            mode = oldNewMap.theme[theme]
            proxyArr = proxyArr.slice(0,2)
            status = STATUS[i]
            break;
          } else if(newIconMap.autoMap && newIconMap.autoMap[STATUS[i]][`${proxyArr[0]}/${proxyArr[1]}`]){
            proxyArr[0] = newIconMap.autoMap[STATUS[i]][`${proxyArr[0]}/${proxyArr[1]}`]
            proxyArr[1] = oldNewMap.state[proxyArr[2]]
            mode = oldNewMap.theme[theme]
            proxyArr = proxyArr.slice(0,2)
            platform = 'auto'
            status = STATUS[i]
            break;
          }
        }else{
          if(newIconMap.iconKeys && newIconMap.iconKeys[STATUS[i]][`${proxyArr[0]}`]){
            status = STATUS[i]
            break;
          }
        }
      }
      
    }
    
  }
  
 

  let res = {valid: false, message: "not found"};
  if (proxyArr[1] == "lottie" && handleNew == "true") {
    res = handleNewLottie(proxyArr);
  }
  else if(proxyArr.length == 3 && proxyArr[2] == "lottie" && handleOld == "true"){
    let key = lottieMapping[""+ proxyArr[0] + '/' + proxyArr[1]];
    const s3Key = `assets/Derkins/lottie/${key}`;
    res =  {valid: true, message: "", s3Key: s3Key };
  }
  else if(handleOld == "true") {
    switch (proxyArr[0]) {
      case "actions":
        res = handleAction(proxyArr);
        break;
      case "badges":
        res = handleBadge(proxyArr);
        break;
      case "oneui":
        res = handleOneui(proxyArr);
        break;
      case "preload":
        res = handlePreload(proxyArr);
        break;
      case "group":
        res = handleGroup(proxyArr);
        break;
      case "auto":
        res = handleAuto(proxyArr);
        break;
      case "scenes":
        res = handleScenes(proxyArr);
        break;
      case "capabilities":
        res = handleCapabilities(proxyArr);
        break;
      case "ocfDeviceType":
        res = handleocfDeviceType(proxyArr);
        break;
      case "lottie":
        res = handleLottie(proxyArr);
        break;
      case "deviceCategory":
        res = handleDeviceCategory(proxyArr);
        break;
      default:
        res = handleDefault(proxyArr, 'true');
    }
  } 
  else if(handleNew == "true"){
    res = handleDefault(proxyArr, handleNew);
  }

  if (!res.valid) {
    return resInvalidReq(res.message);
  }

  const s3Key = res.s3Key;
  let defaultURL = ``;
  if(proxyArr[0] == 'lottie' || proxyArr[2] == 'lottie'){
    defaultURL = `https://${cloudfront}/assets/Derkins/lottie/ic_device_accessory.json`;
  }
  else if(contentType == "svg"){
    defaultURL = `https://${cloudfront}/assets/Derkins/icons/oneui/accessory-${iconState}.${contentType}`;
  }
  else {
    defaultURL = `https://${cloudfront}/assets/Derkins/icons/oneui/accessory-${iconState}@${displaySize}.${contentType}`;
  }
  let exist = false; //await get(bucketName, s3Key);
  
  let url = `https://${cloudfront}/${s3Key}`;
  // console.log("my url", cloudfront, s3Key)
  const httpOption = {
    host: `${cloudfront}`,
    path: `/${s3Key}`,
    method: 'HEAD'
  };
  const cloudfrontRes = await getRequest(httpOption, url, s3Key);
  
  if(cloudfrontRes < 400){
    //console.log("statusCodes3: ", cloudfrontRes, url);
    exist = true;
  }
  
  if (!exist) {
    // s3Key = `assets/icons/unknown/unknown-${
    //   state == "off" ? state : "on"
    // }@${displaySize}.png`;
    // return response404(s3Key);
    return {
      statusCode: 302,
      headers: {
        "Access-Control-Allow-Headers" : "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        Location: defaultURL
      }
    }
  }

  
  
  const response = {
    statusCode: 302,
    headers: {
      "Access-Control-Allow-Headers" : "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      Location: url,
    },
  };
  return response;
};

// async function get(bucket, s3Key) {
//   let exist = true;
//   let params = {
//     Bucket: bucket,
//     Key: s3Key,
//   };

//   try {
//     await S3.headObject(params).promise();
//   } catch (err) {
//     exist = false;
//   }

//   return exist;
// }

function resInvalidReq(message) {
  const response = {
    statusCode: "400",
    body: JSON.stringify({
      error: {
        code: "400",
        message: message,
      },
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers" : "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET"
    },
  };
  return response;
}

function response404(key) {
  return {
    statusCode: "404",
    body: JSON.stringify({
      error: {
        code: "404",
        message: `Image not found : ${key}`,
      },
    }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers" : "*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET"
    },
  };
}

function getQueryParams(queryParams) {
  if (queryParams["mode"]) {
    mode = queryParams["mode"];
    if (MODES.indexOf(mode) < 0) {
      return { valid: false, message: `invalid 'mode'; try ${MODES}` };
    }
  }

  if (queryParams["platform"]) {
    platform = queryParams["platform"];
  }

  if (queryParams["contentType"]) {
    contentType = queryParams["contentType"];
    if (TYPES.indexOf(contentType) < 0) {
      return { valid: false, message: `invalid 'contentType'; try ${TYPES}` };
    }
  }

  if (queryParams["theme"]) {
    theme = queryParams["theme"];
    if (THEMES.indexOf(theme) < 0) {
      return { valid: false, message: `invalid 'theme'; try ${THEMES}` };
    }
  }

  if (queryParams["displaySize"]) {
    displaySize = queryParams["displaySize"];
    if (DISPLAY_SIZE.indexOf(displaySize) < 0)
      return {
        valid: false,
        message: `Invalid 'displaySize'; try ${DISPLAY_SIZE}`,
      };
  }

  if (queryParams["status"]) {
    status = queryParams["status"];
    if (STATUS.indexOf(status) < 0)
      return { valid: false, message: `Invalid 'status'; try ${STATUS}` };
  }

  return { valid: true, message: "" };
}

function handleDefault(proxyArr, handleNew) {
  if (proxyArr.length != 2 || handleNew != "true") {
    return {
      valid: false,
      message: "invalid path parameters",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[0];
  const iconState = proxyArr[1];
  let s3Key;
  if (contentType == "png")
    s3Key = `assets/icons/${status}/${iconKey}/${iconKey}-${platform}-${iconState}-${mode}@${displaySize}.${contentType}`;
  else
    s3Key = `assets/icons/${status}/${iconKey}/${iconKey}-${platform}-${iconState}-${mode}@original.${contentType}`;

  return { valid: true, message: iconKey, s3Key: s3Key };
}

function handleAction(proxyArr) {
  if (proxyArr.length != 2) {
    return {
      valid: false,
      message: "invalid path parameters for action icon",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[1];
  let s3Key;
  if (contentType == "png")
    s3Key = `assets/Derkins/icons/actions/${iconKey}-${theme}@${displaySize}.${contentType}`;
  else
    s3Key = `assets/Derkins/icons/actions/${iconKey}-${theme}.${contentType}`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handleBadge(proxyArr) {
  if (proxyArr.length != 3) {
    return {
      valid: false,
      message: "invalid path parameters for badge icon",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[1];
  const iconState = proxyArr[2];

  if (STATES.indexOf(iconState) < 0)
    return {
      valid: false,
      message: `Invalid 'iconState'; try ${STATES}`,
    };

  let s3Key;
  if (contentType == "png")
    s3Key = `assets/Derkins/icons/badges/${iconKey}-${iconState}-${theme}@${displaySize}.${contentType}`;
  else
    s3Key = `assets/Derkins/icons/badges/${iconKey}-${iconState}-${theme}.${contentType}`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handleOneui(proxyArr) {
  if (proxyArr.length != 3) {
    return {
      valid: false,
      message: "invalid path parameters for oneui icon",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[1];
  const iconState = proxyArr[2];
  let s3Key;
  if (contentType == "png")
    s3Key = `assets/Derkins/icons/oneui/${iconKey}-${iconState}@${displaySize}.${contentType}`;
  else
    s3Key = `assets/Derkins/icons/oneui/${iconKey}-${iconState}.${contentType}`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handlePreload(proxyArr) {
  if (proxyArr.length != 3) {
    return {
      valid: false,
      message: "invalid path parameters for preload icon",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[1];
  const iconState = proxyArr[2];
  let s3Key;
  if (contentType == "png")
    s3Key = `assets/Derkins/icons/preload/${iconKey}-${iconState}@${displaySize}.${contentType}`;
  else
    s3Key = `assets/Derkins/icons/preload/${iconKey}-${iconState}.${contentType}`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handleGroup(proxyArr) {
  if (proxyArr.length != 3) {
    return {
      valid: false,
      message: "invalid path parameters for group icon",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[1];
  const iconState = proxyArr[2];
  let s3Key;
  if (contentType == "png")
    s3Key = `assets/Derkins/icons/group/${iconKey}-${iconState}@${displaySize}.${contentType}`;
  else
    s3Key = `assets/Derkins/icons/group/${iconKey}-${iconState}.${contentType}`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handleAuto(proxyArr) {
  if (proxyArr.length != 3) {
    return {
      valid: false,
      message: "invalid path parameters for Auto icon",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[1];
  const iconState = proxyArr[2];
  let s3Key;
  if (contentType == "png")
    s3Key = `assets/Derkins/icons/auto/${iconKey}-${iconState}@${displaySize}.${contentType}`;
  else
    s3Key = `assets/Derkins/icons/auto/${iconKey}-${iconState}.${contentType}`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handleScenes(proxyArr) {
  if (proxyArr.length != 2) {
    return {
      valid: false,
      message: "invalid path parameters for scene icon",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[1];
  let s3Key;
  if (contentType == "png")
    s3Key = `assets/Derkins/icons/scenes/${iconKey}@${displaySize}.${contentType}`;
  else s3Key = `assets/Derkins/icons/scenes/${iconKey}.${contentType}`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handleCapabilities(proxyArr) {
  if (proxyArr.length != 3) {
    return {
      valid: false,
      message: "invalid path parameters for capabilities icon",
      s3Key: "",
    };
  }
  const capabilityId = proxyArr[1];
  const attributeName = proxyArr[2];
  let s3Key;
  if (contentType == "png")
    s3Key = `assets/Derkins/icons/capabilities/${capabilityId}/${attributeName}@${displaySize}.${contentType}`;
  else
    s3Key = `assets/Derkins/icons/capabilities/${capabilityId}/${attributeName}.${contentType}`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handleocfDeviceType(proxyArr) {
  if (proxyArr.length != 2) {
    return {
      valid: false,
      message: "invalid path parameters for OCF Device Type icon",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[1];
  let s3Key;
  if (contentType == "png")
    s3Key = `assets/Derkins/icons/ocfDeviceType/${iconKey}@${displaySize}.${contentType}`;
  else s3Key = `assets/Derkins/icons/ocfDeviceType/${iconKey}.${contentType}`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handleLottie(proxyArr) {
  if (proxyArr.length != 2) {
    return {
      valid: false,
      message: "invalid path parameters for lottie",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[1];
  // const iconKey = lottieMapping[""+ proxyArr[1] + '/' + proxyArr[2]]
  const s3Key = `assets/Derkins/lottie/${iconKey}.json`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handleNewLottie(proxyArr) {
  if (proxyArr.length != 2) {
    return {
      valid: false,
      message: "invalid path parameters for lottie",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[0];
  const s3Key = `assets/icons/${status}/${iconKey}/${iconKey}.json`;
  return { valid: true, message: "", s3Key: s3Key };
}

function handleDeviceCategory(proxyArr) {
  if (proxyArr.length != 3) {
    return {
      valid: false,
      message: "invalid path parameters for Device Category icon",
      s3Key: "",
    };
  }
  const iconKey = proxyArr[1];
  const iconState = proxyArr[2];
  let s3Key;
  if (contentType == "png")
    s3Key = `assets/Derkins/icons/deviceCategory/${iconKey}-${iconState}@${displaySize}.${contentType}`;
  else
    s3Key = `assets/Derkins/icons/deviceCategory/${iconKey}-${iconState}.${contentType}`;
  return { valid: true, message: "", s3Key: s3Key };
}
