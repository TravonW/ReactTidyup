import {useState, useEffect, useRef, SetStateAction} from 'react';

import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';

import Animated, {
  useAnimatedProps,
  useSharedValue,
} from 'react-native-reanimated';

import DropDownPicker from 'react-native-dropdown-picker';

export default function useCamera() {
  const camera = useRef<any>(null);
  const [cameraPermission, setCameraPermission] = useState<any>();
  const [open, setOpen] = useState(false);
  const [photoPath, setPhotoPath] = useState();
  const [snapshotPath, setSnapshotPath] = useState();

  useEffect(() => {
    async function getPermissions() {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    }
    getPermissions();
  }, []);

  const devices = useCameraDevices();
  const cameraDevice = devices.back;

  const takePhoto = async () => {
    try {
      const photo = await camera.current.takePhoto({
        flash: 'on',
      });
      setPhotoPath(photo.path);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    camera,
    cameraPermission,
    open,
    photoPath,
    snapshotPath,
    devices,
    cameraDevice,
    setCameraPermission,
    setOpen,
    setPhotoPath,
    setSnapshotPath,
    takePhoto,
  };
}
