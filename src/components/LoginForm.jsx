import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { useAuthStore } from '../store/authStore';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useRef(null);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      toast.current.show({
        severity: 'success',
        summary: 'Éxito',
        detail: 'Sesión iniciada correctamente',
        life: 3000,
      });
      navigate('/dashboard');
    } catch (error) {
      toast.current.show({
        severity: 'error',
        summary: 'Error',
        detail: error.response?.data?.message || 'Error al iniciar sesión',
        life: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="flex align-items-center justify-content-center min-h-screen">
        <Card title="Iniciar Sesión" className="w-full md:w-4 lg:w-3">
          <form onSubmit={handleSubmit} className="flex flex-column gap-3">
            <div className="flex flex-column gap-2">
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="usuario@ejemplo.com"
                required
                autoFocus
              />
            </div>

            <div className="flex flex-column gap-2">
              <label htmlFor="password">Contraseña</label>
              <Password
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                toggleMask
                feedback={false}
                required
              />
            </div>

            <Button
              type="submit"
              label="Ingresar"
              icon="pi pi-sign-in"
              loading={loading}
              className="mt-3"
            />
          </form>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
