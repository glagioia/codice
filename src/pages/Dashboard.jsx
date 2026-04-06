import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen surface-ground">
      {/* Header */}
      <div className="surface-card shadow-2 p-3 mb-4 flex justify-content-between align-items-center">
        <h2 className="m-0">Panel de Control</h2>
        <div className="flex align-items-center gap-3">
          <span className="text-600">
            <i className="pi pi-user mr-2"></i>
            {user?.email}
          </span>
          <Button
            label="Cerrar Sesión"
            icon="pi pi-sign-out"
            onClick={handleLogout}
            className="p-button-outlined p-button-secondary"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3">
            <Card className="surface-card shadow-2">
              <div className="flex align-items-center gap-3">
                <div className="border-circle bg-blue-100 p-3">
                  <i className="pi pi-users text-blue-600 text-2xl"></i>
                </div>
                <div>
                  <span className="text-500 font-medium">Usuarios</span>
                  <div className="text-900 font-bold text-xl">1,234</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-12 md:col-6 lg:col-3">
            <Card className="surface-card shadow-2">
              <div className="flex align-items-center gap-3">
                <div className="border-circle bg-green-100 p-3">
                  <i className="pi pi-check-circle text-green-600 text-2xl"></i>
                </div>
                <div>
                  <span className="text-500 font-medium">Completados</span>
                  <div className="text-900 font-bold text-xl">456</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-12 md:col-6 lg:col-3">
            <Card className="surface-card shadow-2">
              <div className="flex align-items-center gap-3">
                <div className="border-circle bg-orange-100 p-3">
                  <i className="pi pi-clock text-orange-600 text-2xl"></i>
                </div>
                <div>
                  <span className="text-500 font-medium">Pendientes</span>
                  <div className="text-900 font-bold text-xl">89</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="col-12 md:col-6 lg:col-3">
            <Card className="surface-card shadow-2">
              <div className="flex align-items-center gap-3">
                <div className="border-circle bg-purple-100 p-3">
                  <i className="pi pi-chart-line text-purple-600 text-2xl"></i>
                </div>
                <div>
                  <span className="text-500 font-medium">Estadísticas</span>
                  <div className="text-900 font-bold text-xl">78%</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-4">
          <Card title="Bienvenido al Sistema" className="shadow-2">
            <p className="m-0 text-600">
              Has iniciado sesión correctamente. Este es tu panel de control donde podrás gestionar
              todas las funcionalidades del sistema.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
