import { PRIVATE } from "./routes";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  AddUser,
  Appointment,
  Profile,
  Home,
  PendingAppointments,
  AppointmentDetail,
} from "../private/pages";
import { RequireAuth } from "../guard/RequireAuth";
import Unauthorized from "../private/components/Unauthorized";
import { LayoutPrivate } from "../private/layout/LayoutPrivate";
import { AppontmentHistory } from "../private/pages/AppontmentHistory";
import { Doctors } from "../private/pages/Doctors";
import { DoctorProvider } from "../context/DoctorContext";

export const PrivateRoutes = () => {
  return (
    <DoctorProvider>
      <Routes>
        <Route element={<LayoutPrivate />}>
          <Route path="/" element={<Navigate to={PRIVATE.HOME} />} />
          <Route path={`${PRIVATE.HOME}`} element={<Home />} />
          <Route path={`${PRIVATE.PROFILE}`} element={<Profile />} />

          <Route element={<RequireAuth roles={["ADMIN"]} />}>
            <Route path={`${PRIVATE.ADD_USER}`} element={<AddUser />} />
          </Route>

          <Route element={<RequireAuth roles={["ADMIN"]} />}>
            <Route path={`${PRIVATE.DOCTORES}`} element={<Doctors />} />
          </Route>

          <Route
            element={
              <RequireAuth roles={["ADMIN", "ADMINISTRATION", "DOCTOR"]} />
            }
          >
            <Route
              path={`${PRIVATE.REGISTRAR_CITA}`}
              element={<Appointment />}
            />
          </Route>

          <Route
            element={
              <RequireAuth roles={["ADMIN", "ADMINISTRATION", "DOCTOR"]} />
            }
          >
            <Route
              path={`${PRIVATE.HISTORIAL_CITAS}`}
              element={<AppontmentHistory />}
            />
          </Route>

          <Route
            path={`${PRIVATE.PENDIENTES}`}
            element={<PendingAppointments />}
          />
        </Route>

        <Route path={PRIVATE.UNAUTHORIZED} element={<Unauthorized />} />
        <Route path="*" element={<Navigate replace to={`/not-found`} />} />
      </Routes>
    </DoctorProvider>
  );
};
