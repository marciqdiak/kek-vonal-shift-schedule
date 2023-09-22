import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/Layout';
import Table from '../../components/Table.js';
import { useFormik } from 'formik';
import { TextField, Button, Grid } from '@mui/material';
import {useRouter} from 'next/router'

export default function Register() {
  const router = useRouter()
  const {id} = router.query
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      workloadMin: 0,
      workloadMax: 0,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Layout>
        <h1 className={styles.title}>
        Preferenciák beállítása <span> {1}-nek</span>
        </h1>
        <h3 className={styles.description}>Néhány adatra szükségem <span>lesz :)</span></h3>
        <Table></Table>
    </Layout>
  );
}